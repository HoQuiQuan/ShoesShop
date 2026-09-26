"use client";

import { useMemo, useState } from "react";

import {
  CheckCircle2,
  XCircle,
  SlidersHorizontal,
  Ticket,
  RefreshCw,
} from "lucide-react";

import { useQueryClient } from "@tanstack/react-query";

import VoucherHero from "@/components/vouchers/VoucherHero";
import VoucherTabs from "@/components/vouchers/VoucherTabs";
import VoucherList from "@/components/vouchers/VoucherList";
import MyVoucherSidebar from "@/components/vouchers/MyVoucherSidebar";
import VoucherGuide from "@/components/vouchers/VoucherGuide";

import type { Voucher } from "@/components/vouchers/VoucherCard";

import Vouchers from "@/app/Api/Voucher.api";

import { useAllVouchers } from "@/app/hooks/vouchers/useAllVouchers";
import { useMyVouchers } from "@/app/hooks/vouchers/useMyVouchers";

export default function VouchersPage() {
  // =========================================================
  // QUERY CLIENT
  // =========================================================

  const queryClient = useQueryClient();

  // =========================================================
  // TAB
  // =========================================================

  const [activeTab, setActiveTab] = useState("ALL");

  // =========================================================
  // CLAIMING
  // =========================================================

  const [claimingId, setClaimingId] = useState<number | null>(null);

  // =========================================================
  // NOTIFICATION
  // =========================================================

  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // =========================================================
  // GET ALL VOUCHERS
  // =========================================================

  const {
    data: allVouchers = [],
    isLoading: isLoadingAllVouchers,
    isError: isErrorAllVouchers,
    refetch: refetchAllVouchers,
  } = useAllVouchers();

  // =========================================================
  // GET MY VOUCHERS
  // =========================================================

  const {
    data: myVoucherData = [],
    isLoading: isLoadingMyVouchers,
    isError: isErrorMyVouchers,
  } = useMyVouchers();

  // =========================================================
  // BUILD MY VOUCHER ID SET
  // =========================================================

  const myVoucherIds = useMemo(() => {
    return new Set(
      myVoucherData.map((voucher: any) => {
        /*
          Trường hợp API my-vouchers trả:

          {
            id: 1,
            code: "SALE10PT"
          }

          hoặc:

          {
            voucherId: 1,
            voucher: {
              id: 1
            }
          }

          hoặc:

          {
            voucher: {
              id: 1
            }
          }
        */

        return voucher?.voucherId ?? voucher?.voucher?.id ?? voucher?.id;
      }),
    );
  }, [myVoucherData]);

  // =========================================================
  // MERGE CLAIMED STATUS
  // =========================================================

  const vouchers = useMemo<Voucher[]>(() => {
    return allVouchers.map((voucher: any) => ({
      ...voucher,

      /*
        Nếu voucher đã tồn tại trong my-vouchers
        thì claimed = true
      */

      claimed: voucher.claimed === true || myVoucherIds.has(voucher.id),
    }));
  }, [allVouchers, myVoucherIds]);

  // =========================================================
  // FILTER
  // =========================================================

  const filteredVouchers = useMemo(() => {
    if (activeTab === "ALL") {
      return vouchers;
    }

    return vouchers.filter((voucher) => voucher.voucherType === activeTab);
  }, [activeTab, vouchers]);

  // =========================================================
  // MY VOUCHERS
  // =========================================================

  const myVouchers = useMemo(() => {
    return vouchers.filter((voucher) => voucher.claimed);
  }, [vouchers]);

  // =========================================================
  // LOADING
  // =========================================================

  const loading = isLoadingAllVouchers || isLoadingMyVouchers;

  // =========================================================
  // CLAIM VOUCHER
  // =========================================================

  const handleClaimVoucher = async (voucher: Voucher) => {
    // ---------------------------------------------
    // Đã nhận rồi
    // ---------------------------------------------

    if (voucher.claimed) {
      return;
    }

    // ---------------------------------------------
    // Prevent duplicate request
    // ---------------------------------------------

    if (claimingId !== null) {
      return;
    }

    try {
      setClaimingId(voucher.id);

      setMessage("");
      setErrorMessage("");

      // ---------------------------------------------
      // CALL API
      // ---------------------------------------------

      await Vouchers.claimVoucher(voucher.id);

      // ---------------------------------------------
      // Refresh queries
      // ---------------------------------------------

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["vouchers", "all"],
        }),

        queryClient.invalidateQueries({
          queryKey: ["vouchers", "my"],
        }),
      ]);

      // ---------------------------------------------
      // SUCCESS
      // ---------------------------------------------

      setMessage(`Bạn đã nhận thành công voucher ${voucher.code}`);

      // ---------------------------------------------
      // Hide notification
      // ---------------------------------------------

      window.setTimeout(() => {
        setMessage("");
      }, 3500);
    } catch (error: any) {
      console.error("Claim voucher error:", error);

      // ---------------------------------------------
      // Backend message
      // ---------------------------------------------

      const backendMessage = error?.response?.data?.message;

      if (Array.isArray(backendMessage)) {
        setErrorMessage(backendMessage.join(", "));
      } else {
        setErrorMessage(
          backendMessage || "Không thể nhận voucher. Vui lòng thử lại.",
        );
      }

      window.setTimeout(() => {
        setErrorMessage("");
      }, 3500);
    } finally {
      setClaimingId(null);
    }
  };

  // =========================================================
  // ERROR ALL VOUCHERS
  // =========================================================

  if (isErrorAllVouchers) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-gray-50">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">
          <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
              <XCircle size={32} />
            </div>

            <h2 className="mt-5 text-xl font-black text-gray-900">
              Không thể tải voucher
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Đã xảy ra lỗi khi tải danh sách voucher. Vui lòng thử lại.
            </p>

            <button
              type="button"
              onClick={() => refetchAllVouchers()}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600 active:scale-95"
            >
              <RefreshCw size={16} />
              Thử lại
            </button>
          </div>
        </div>
      </main>
    );
  }

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-gray-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* ================================================= */}
        {/* SUCCESS NOTIFICATION */}
        {/* ================================================= */}

        {message && (
          <div className="fixed right-4 top-20 z-[100] w-[calc(100%-2rem)] max-w-md animate-in slide-in-from-right duration-300 sm:right-8">
            <div className="flex items-start gap-3 rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-2xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 size={21} />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-gray-900">Thành công!</p>

                <p className="mt-1 text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* ERROR NOTIFICATION */}
        {/* ================================================= */}

        {errorMessage && (
          <div className="fixed right-4 top-20 z-[100] w-[calc(100%-2rem)] max-w-md animate-in slide-in-from-right duration-300 sm:right-8">
            <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-white px-5 py-4 shadow-2xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                <XCircle size={21} />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-gray-900">Không thành công</p>

                <p className="mt-1 text-sm text-gray-500">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <VoucherHero />

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <section id="voucher-list" className="mt-8 lg:mt-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* ================================================= */}
            {/* LEFT */}
            {/* ================================================= */}

            <div>
              {/* Header */}

              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                      <Ticket size={21} />
                    </div>

                    <div>
                      <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                        Danh sách voucher
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Nhận ưu đãi trước khi hết hạn
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm">
                  <SlidersHorizontal size={16} />

                  <span>{filteredVouchers.length} voucher</span>
                </div>
              </div>

              {/* ================================================= */}
              {/* TABS */}
              {/* ================================================= */}

              <VoucherTabs active={activeTab} onChange={setActiveTab} />

              {/* ================================================= */}
              {/* LIST */}
              {/* ================================================= */}

              <div className="mt-6">
                <VoucherList
                  vouchers={filteredVouchers}
                  loading={loading}
                  claimingId={claimingId}
                  onClaim={handleClaimVoucher}
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* SIDEBAR */}
            {/* ================================================= */}

            <MyVoucherSidebar vouchers={myVouchers} />
          </div>
        </section>

        {/* ================================================= */}
        {/* GUIDE */}
        {/* ================================================= */}

        <VoucherGuide />
      </div>
    </main>
  );
}

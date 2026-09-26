"use client";

import { motion } from "framer-motion";
import {
  Download,
  PackagePlus,
  SlidersHorizontal,
  Warehouse,
} from "lucide-react";

interface InventoryHeaderProps {
  onImport?: () => void;
  onExport?: () => void;
}

export default function InventoryHeader({
  onImport,
  onExport,
}: InventoryHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
              <Warehouse size={18} />
            </div>

            <span className="text-sm font-medium text-zinc-500">
              Admin / Kho hàng
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Quản lý tồn kho
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Theo dõi số lượng sản phẩm, hàng đang giữ và tồn kho khả dụng.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onExport}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50"
          >
            <Download size={17} />
            <span>Xuất Excel</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onImport}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            <PackagePlus size={17} />
            <span>Nhập kho</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

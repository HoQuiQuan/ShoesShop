import type { Metadata } from "next";
import "./globals.css";
import { AlertProvider } from "@/components/alert/alert-provider";

import ReduxProvider from "@/reduxToolkit/Provider";
import AuthInitializer from "@/components/AuthInitializer";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Shoes Shop",
  description: "Shoes Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-yd-metadata-content-site="common"
      data-yd-content-ready="true"
    >
      <body>
        <ReduxProvider>
          <AuthInitializer>
            <QueryProvider>
              <AlertProvider>{children}</AlertProvider>
            </QueryProvider>
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}

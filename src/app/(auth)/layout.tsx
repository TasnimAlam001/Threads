import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Threads",
  description: "Thread application",
};

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider>
    <html lang="en">
        <body className={`${inter. className} bg-dark-1`}>
            {children}

        </body>

    </html>

  </ClerkProvider>
}
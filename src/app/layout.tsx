import "./styles/globals.css";
import "@radix-ui/themes/styles.css";
import { inter } from "./fonts/inter";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Theme } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  creator: "Wendell Kenneddy",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/icon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", type: "image/png" },
  ],
  other: { "theme-color": "#111827" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark" className={`${inter.variable} bg-gray-950 antialiased`}>
          <div className="flex flex-col gap-6">
            <Header />

            {children}

            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}

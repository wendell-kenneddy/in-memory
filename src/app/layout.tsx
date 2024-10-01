import "./styles/globals.css";
import { inter } from "./fonts/inter";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-950 antialiased`}>
        <div className="flex flex-col gap-6">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}

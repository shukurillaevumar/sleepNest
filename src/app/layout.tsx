import TgLink from "@/components/tgLink";
import Footer from "./footer";
import "./globals.css";
import Menu from "./menu";
import "leaflet/dist/leaflet.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Menu />
        {children}
        <TgLink />
        <Footer />
      </body>
    </html>
  );
}

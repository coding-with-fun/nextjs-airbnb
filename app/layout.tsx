import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
};

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Multi Step Form",
  description: "Provided by Frontned Mentors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}

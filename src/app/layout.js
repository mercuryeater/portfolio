import "./globals.css";

export const metadata = {
  title: "Federico Cordoba",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

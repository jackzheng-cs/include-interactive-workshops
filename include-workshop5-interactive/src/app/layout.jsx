import "./globals.scss";

export const metadata = {
  title: "Workshop Portal",
  description: "API Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

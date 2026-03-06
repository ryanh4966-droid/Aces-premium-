export const metadata = {
  title: "Aces Premium",
  description: "Cinematic, intelligent shopping experience"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-brand-white">{children}</body>
    </html>
  );
}

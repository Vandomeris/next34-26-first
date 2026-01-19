import Link from "next/link";
import "./globals.css";
import { Dancing_Script } from 'next/font/google'


const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ["400", "700"],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="container mx-auto flex justify-between py-5">
          <div>LOGO</div>
          <nav className="flex gap-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>2026 год</footer>
      </body>
    </html>
  );
}

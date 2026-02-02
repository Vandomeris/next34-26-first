import Link from "next/link";
import "./globals.css";
import { Dancing_Script } from 'next/font/google'
import { getServerSession } from "next-auth";
import { options } from "@/lib/authOptions";
import SignOutButton from "@/components/SignOutButton";


const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ["400", "700"],
})


export default async function RootLayout({ children }) {

  const session = await getServerSession(options)

  console.log(session)

  return (
    <html lang="en">
      <body>
        <header className="container mx-auto flex justify-between py-5">
          <div>LOGO</div>
          <nav className="flex gap-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/admin/cars">Cars</Link>
            {
              session ?
                (<SignOutButton />) :
                (<>
                  <Link href="/api/auth/signin">Войти</Link>
                  <Link href="/registration">Зарегистрироваться</Link>
                </>)
            }


          </nav>
        </header>
        <main>{children}</main>
        <footer>2026 год</footer>
      </body>
    </html>
  );
}

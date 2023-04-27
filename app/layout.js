import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
// after 'Link' import, create folder for link.
//a navbar makes layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head />
    <body>
      {/* navbar */}
      <div className="navbar">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
        <Link href="/cart">Cart</Link>
      </div>
      {children}
      {/* page.js는 여기에 담김 */}
    </body>
  </html>
)}

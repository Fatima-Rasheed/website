'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import{useState} from 'react'
import './style.css'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
// const[showNav,setShowNav]= useState(false);
// function showMenu() {
//     setShowNav(false)
// }

// function hideMenu() {
//     setShowNav(false)
// }
  return (
    <html lang="en">
      <body className={inter.className}>

      {children}</body>
    </html>
  )
}

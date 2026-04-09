"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-12 px-4 xl:p-8 z-50 mx-auto max-w-[1920px]">
      
      <div className="bg-[#dcd8ce] p-2 rounded-full flex md:grid md:grid-cols-4 items-center">

        {/* LOGO */}
        <div>
          <Link href="/">
            <Image
              src="/footerImage.png"
              alt="logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* NAV LINKS (desktop only) */}
        <div className="col-span-2 hidden md:flex gap-6 lg:gap-10 items-center justify-center text-sm lg:text-lg">
          <Link href="/AboutUs" className="cursor-pointer">About Us</Link>
          <Link href="/Programs" className="cursor-pointer">Programs</Link>
          <Link href="/Corporate" className="cursor-pointer">Corporate</Link>
          <Link href="/Blog" className="cursor-pointer">Blog</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center">

          {/* DESKTOP BUTTON */}
          <Button className="hidden md:flex items-center justify-center bg-[#3f5c4a] hover:bg-[#162d22] cursor-pointer rounded-full text-lg px-4 lg:px-8 py-6">
  Get Started
</Button>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-2 p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

     <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
className="fixed inset-0 bg-[#dcd8ce] z-40 flex flex-col items-start justify-center px-8 gap-8 text-2xl"
    >

      {/* ❌ CLOSE BUTTON (TOP RIGHT) */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 p-2"
      >
        <X size={28} />
      </button>

      {/* MENU LINKS */}
      <Link href="/" onClick={() => setOpen(false)}>Home</Link>
      <Link href="/AboutUs" onClick={() => setOpen(false)}>About Us</Link>
      <Link href="/Programs" onClick={() => setOpen(false)}>Programs</Link>
      <Link href="/Corporate" onClick={() => setOpen(false)}>Corporate</Link>
      <Link href="/Blog" onClick={() => setOpen(false)}>Blog</Link>

      {/* CTA */}
      <Button className="bg-[#3f5c4a] text-white px-8 py-6 rounded-full">
        Get Started
      </Button>

    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
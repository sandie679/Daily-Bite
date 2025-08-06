"use client";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-950 shadow-md px-6 py-4 flex justify-between items-center h-20 relative">
      <div className="w-[60px] h-[60px]">
        <Link href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-12 font-medium text-white font-roboto hover:text-pink-300 transition duration-200">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/reservations">Reservations</Link>
        <Link href="/shop">Our Shop</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/cart" className="relative">
          <FaShoppingBag className="w-9 h-9 text-white" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiOutlineX className="w-8 h-8" />
          ) : (
            <HiOutlineMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-green-950 flex flex-col font roboto md:hidden text-white font-medium space-y-4 p-6 z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/reservations" onClick={() => setIsOpen(false)}>
            Reservations
          </Link>
          <Link href="/shop" onClick={() => setIsOpen(false)}>
            Our Shop
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

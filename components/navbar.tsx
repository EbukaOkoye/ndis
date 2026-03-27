"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="shrink-0">
            <div className="text-2xl font-bold text-primary">
              <Image
                src={"/ndis_logo-removebg.png"}
                alt="ndis-logo"
                width={55}
                height={100}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/how-we-help"
              className="text-foreground hover:text-primary transition-colors"
            >
              How We Help
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact-us">NDIS Service Request</Link>
            </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact-us">Enquire Today</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/#services"
              className="block px-4 py-2 hover:bg-secondary rounded"
            >
              Services
            </Link>
            <Link
              href="/how-we-help"
              className="block px-4 py-2 hover:bg-secondary rounded"
            >
              How We Help
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-secondary rounded"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="block px-4 py-2 hover:bg-secondary rounded"
            >
              Contact
            </Link>
            <div className="px-4 pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact-us">NDIS Service Request</Link>
              </Button>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <Link href="/contact-us">Enquire Today</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

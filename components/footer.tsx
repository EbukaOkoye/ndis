"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Australian NDIS</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Supporting individuals and communities across South Australia
              through trusted, person-centred NDIS services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link
                  href="#services"
                  className="hover:text-background transition-colors"
                >
                  NDIS Support
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-background transition-colors"
                >
                  Career Support
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-background transition-colors"
                >
                  Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span>0415 777 143</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span>office@ausndisservices.com.au</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Adelaide, South Australia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">
              Newsletter
            </h4>
            <p className="text-background/80 text-sm mb-4">
              Subscribe for updates on our services and NDIS news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; 2026 Australian NDIS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-background transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

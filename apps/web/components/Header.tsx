// components/Header.tsx
"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";

import styles from "./Header.module.css";

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

// components/Header.tsx

const Header: React.FC = () => {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname() ?? "";

  // Determine if we're in the members area
  const isInMembersArea =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/members-directory") ||
    pathname.startsWith("/job-tracker") ||
    pathname.startsWith("/auth/signin") ||
    pathname.startsWith("/auth/verify-request");

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Observe .hero-section if it exists; if not, assume we're off hero
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) {
      setIsOnHeroSection(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setIsOnHeroSection(entry.isIntersecting), {
      threshold: 0.9,
    });
    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, [pathname]);

  // On route change, close the menu
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("routeChangeComplete", handleRouteChange);
    return () => window.removeEventListener("routeChangeComplete", handleRouteChange);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the logo container with GSAP
  useEffect(() => {
    if (logoContainerRef.current) {
      gsap.to(logoContainerRef.current, {
        duration: 2,
        rotation: () => gsap.utils.random(-15, 15),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        repeatRefresh: true,
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /* HEADER BACKGROUND LOGIC:
     - If menu is open or in members area: use black header.
     - Else if hero section is in view: use transparent header.
     - Otherwise: use solid (white) header.
  */
  let headerClasses = styles.header;
  if (isMenuOpen || isInMembersArea) {
    headerClasses += ` ${styles.black}`;
  } else if (isOnHeroSection) {
    headerClasses += ` ${styles.headerTransparent}`;
  } else {
    headerClasses += ` ${styles.headerSolid}`;
  }

  /* TOGGLE BUTTON (HAMBURGER) LOGIC:
     - If menu open or in members area: black bars.
     - Else if hero is in view: white bars.
     - Otherwise: black bars.
  */
  let toggleClass = styles.toggleButton;
  if (isMenuOpen || isInMembersArea) {
    toggleClass += ` ${styles.blackBars} ${styles.open}`;
  } else {
    toggleClass += isOnHeroSection ? ` ${styles.whiteBars}` : ` ${styles.blackBars}`;
  }

  // LOGO LOGIC:
  // When the hero is in view, use the white logo; otherwise, the black logo.
  const logoSrc = isOnHeroSection ? "/TBP-white.svg" : "/TBP.svg";

  // On mobile, force a small logo; on desktop, use 150 if not scrolled, 100 if scrolled.
  const logoWidth = isMobile ? 100 : isScrolled ? 100 : 150;
  const logoHeight = isMobile ? 100 : isScrolled ? 100 : 150;

  // NAVIGATION TEXT COLOR:
  // On mobile, always use black text (since the header is always white underneath).
  // On desktop, if hero is in view use white text; otherwise black.
  const navTextColorClass = isMobile ? "text-black" : isOnHeroSection ? "text-white" : "text-black";

  return (
    <header className={`${headerClasses} fixed left-0 top-0 z-50 w-full`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-10 py-3 lg:px-4">
        <Link href="https://balanceproject.co.nz/" className="z-20">
          <div ref={logoContainerRef} style={{ transformOrigin: "center bottom" }} className="inline-block">
            <Image
              key={logoSrc}
              src={logoSrc}
              alt="The Balance Project Logo"
              width={logoWidth}
              height={logoHeight}
              style={{ objectFit: "contain" }}
              className={`z-20 cursor-pointer ${styles.logo}`}
              aria-label="The Balance Project Logo"
              fetchPriority="high"
            />
          </div>
        </Link>
        <button
          ref={toggleButtonRef}
          className={`${toggleClass} focus:outline-none md:hidden`}
          aria-label="MENU"
          onClick={toggleMenu}>
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
        </button>
        <div className={`${styles.navContainer} ${isMenuOpen ? styles.open : ""}`} ref={navContainerRef}>
          <nav>
            <ul className={styles.navList}>
              <li className={`${styles.navItem} underline-animation ${navTextColorClass}`}>
                <a
                  href="https://book.balanceproject.co.nz/floorplan"
                  aria-label="Book now"
                  target="_self"
                  rel="noopener noreferrer"
                  className={`${styles.navLink} ${navTextColorClass} flex items-center`}>
                  Book now
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-6 w-6">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </li>
              <li className={`${styles.navItem} underline-animation ${navTextColorClass}`}>
                <a
                  href="https://balanceproject.co.nz/your-space"
                  aria-label="Your Space"
                  className={`${styles.navLink} ${navTextColorClass}`}>
                  Your Space
                </a>
              </li>
              <li className={`${styles.navItem} underline-animation ${navTextColorClass}`}>
                <a
                  href="https://balanceproject.co.nz/membership"
                  aria-label="Membership"
                  className={`${styles.navLink} ${navTextColorClass}`}>
                  Membership
                </a>
              </li>
              <li className={`${styles.navItem} underline-animation ${navTextColorClass}`}>
                <a
                  href="https://balanceproject.co.nz/christchurch"
                  aria-label="Christchurch"
                  className={`${styles.navLink} ${navTextColorClass}`}>
                  Christchurch
                </a>
              </li>
              <li className={`${styles.navItem} underline-animation ${navTextColorClass}`}>
                <a
                  href="https://balanceproject.co.nz/dashboard"
                  aria-label="Members Area"
                  className={`${styles.navLink} ${navTextColorClass}`}>
                  Members Area
                </a>
              </li>
              <li className={`${styles.navItem} underline-animation ${navTextColorClass}`}>
                <a
                  href="https://balanceproject.co.nz/contact"
                  aria-label="Contact"
                  className={`${styles.navLink} ${navTextColorClass}`}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

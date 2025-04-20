// app/components/Footer.tsx
import Image from "next/image";
import React from "react";

import styles from "./Footer.module.css";

// import Link from 'next/link'; (remove or comment out)

const Footer = () => {
  return (
    <footer className="sm:mt-50 pt-50 bg-black px-10 pb-5 text-center text-white lg:mt-0 lg:px-20 lg:pt-20">
      <div className="mx-auto max-w-7xl px-0 text-left lg:px-4">
        <div className="grid items-end gap-4 sm:grid-cols-1 lg:grid-cols-3">
          <div className={styles.blurb}>
            <h3 className="mb-8 text-lg font-semibold leading-tight text-white">
              WHAT IS THE BALANCE PROJECT?
            </h3>
            <p className="mb-4">
              Our boutique co-working space that brings collaboration and creativity to life.
            </p>
            <p className="mb-4">
              It is our vision to create an environment where motivated members come together to grow
              themselves, their business, and each other.
            </p>
            <p>
              We provide flexibility for those who need time, space and a creative environment to work, form
              ideas and thrive.
            </p>
          </div>
          <div className={styles.blurb} />
          <div className={styles.contactInfo}>
            <Image
              src="/TBP-white.svg"
              alt="The Balance Project Logo"
              width={100}
              height={100}
              className={`${styles.logo} footer-logo-balance h-24 w-auto`}
            />
            <address className="py-5 lg:py-10">
              Level 1, 26 St Heliers Bay Road
              <br />
              Auckland 1071
              <br />
              New Zealand
            </address>

            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/balanceproject.nz"
                aria-label="Facebook"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 320 512" fill="#fff">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/the_balance_project_/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 448 512" fill="#fff">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="mailto:hello@balanceproject.co.nz"
                aria-label="Email us"
                target="_blank"
                rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 512 512" fill="#fff">
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerCopy}>&copy; {new Date().getFullYear()} The Balance Project.</div>
      </div>
    </footer>
  );
};

export default Footer;

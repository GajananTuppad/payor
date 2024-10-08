'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { LiveStream } from "@/svg";
import SocialLinks from "@/components/social";
import MobileMenus from "./mobile-menus";

const OffCanvasSix = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div
        className={`offcanvas__area offcanvas__area-1 ${isOffCanvasOpen ? "offcanvas-opened" : ""
          }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={() => setIsOffCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas-close-btn"
            >
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo m-logo">
                <Link href="/">
                  <LiveStream />
                </Link>
              </div>
            </div>
            <div className="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none">
              <div className="mean-bar">
                {/* MobileMenus start*/}
                <MobileMenus />
                {/* MobileMenus end*/}
              </div>
            </div>
            {/* <div className="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Service</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div> */}
            <div className="offcanvas__btn">
              <a href="/contact" className="tp-btn-offcanvas">
              Contact Us <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
            {/* <div className="offcanvas__social">
              <h3 className="offcanvas__social-title">Follow :</h3>
              <SocialLinks />
            </div> */}
            {/* <div className="offcanvas__contact">
              <p className="offcanvas__contact-call">
                <a href="tel:801 621 4464">(801) 360-9000</a>
              </p>
              <p className="offcanvas__contact-mail">
                <a href="mailto:jeff@justdocoding.com">jeff@justdocoding.com</a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {/* overlay */}
      <div
        onClick={() => setIsOffCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
      {/* overlay */}
    </React.Fragment>
  );
};

export default OffCanvasSix;

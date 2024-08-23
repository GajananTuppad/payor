import Link from 'next/link';
import React from 'react';
import SocialLinks from "@/components/social";
const FooterBottom = ({ inner, copyright, link }) => {
  return (
    <div className={`footer__bottom-${inner}`}>
      <div className="row">
        <div className="col-sm-3">
          <div className="footer__social">
            <SocialLinks />
          </div> </div>
        <div className="col-sm-9">
          <div className={`footer__${copyright}`}>
            <Link href="/">Copyright © {new Date().getFullYear()} <b> Emids</b> </Link>  All Rights Reserved.   <span className='line'> / </span> <Link href="/terms"> Terms Conditions</Link>
            <span className='line'> / </span><Link href="/policy">Privacy Policy</Link>
          </div>
          {/* <div className={`footer__${link} text-sm-end`}> 
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default FooterBottom;
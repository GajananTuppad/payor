"use client";
import Image from "next/image";
import Link from "next/link";
// internal 
import FooterBottom from "./component/footer-bottom";
import FooterWidget from "./component/footer-widget";
import { LiveStream } from "@/svg";
const widget = [
  {
    col: "2",
    title: "Quick Link",
    lists: [
      { link: "/", title: "Home" },
      { link: "/services", title: "Services" },
      { link: "/industries", title: "Industries" },
      { link: "/technologies", title: "Technologies" },
      { link: "/about", title: "About Us" },
      { link: "/contact", title: "Contact Us" },
    ],
    colSize: 2,
  },
  {
    col: "3",
    title: "Services",
    lists: [
      { link: "/services/it-consulting", title: "IT Consulting" },
      { link: "/services/web-development", title: "Web Development" },
      { link: "/services/mobile-development", title: "Mobile Development" },
      { link: "/services/custom-software-development", title: "Custom Software Development" },
      { link: "/services/database-administration", title: "Database Administration" },
      { link: "/services/software-testing", title: "Security Testing" },
      { link: "/services/ux-ui-design", title: "UI/UX Design" },
      { link: "/services/software-testing", title: "Quality Assurance & Testing" },
      { link: "/services/dedicated-team", title: "Dedicated Team" },
      { link: "/services/business-analysis", title: "Business Analysis" },
      { link: "/services/staff-augmentation", title: "IT Staff augmentation" },
      { link: "/services/devops", title: "DevOps" },
      { link: "/services/maintenance-support", title: "Maintenance & Support" },
      { link: "/services/internet-of-things", title: "Internet of Things (IOT)" },
    ],
    colSize: 3,
  },
  {
    col: "4",
    title: "Industries",
    lists: [
      { link: "/industries/healthcare", title: "Healthcare" },
      { link: "/industries/finance", title: "Finance" },
      { link: "/industries/banking", title: "Banking" },
      { link: "/industries/insurance", title: "Insurance" },
      { link: "/industries/eCommerce", title: "eCommerce" },
      { link: "/industries/education", title: "Education" },
      { link: "/industries/telecommunications", title: "Telecommunications" },
      { link: "/industries/transportation", title: "Transportation" },
      { link: "/industries/media-entertainment", title: "Media/Entertainment" },
      { link: "/industries/construction", title: "Construction" },
      { link: "/industries/agriculture", title: "Agriculture" },
      { link: "/industries/retail", title: "Retail" },
      { link: "/industries/manufacturing", title: "Manufacturing" },
      { link: "/industries/automotive", title: "Automotive" },
      { link: "/industries/real-estate", title: " Real Estate" },
    ],
    colSize: 2,
  },
  {
    col: "5",
    title: "Technologies",
    lists: [
      { link: "/technologies/react", title: "React" },
      { link: "/technologies/angular", title: "Angular" },
      { link: "/technologies/vue-js", title: "Vue.js" },
      { link: "/technologies/javaScript", title: "JavaScript" },
      { link: "/technologies/dot-net", title: ".NET" },
      { link: "/technologies/java", title: "Java" },
      { link: "/technologies/node", title: "Node.js" },
      { link: "/technologies/c-plus-plus", title: "C/C++" },
      { link: "/technologies/python", title: "Python" },
      { link: "/technologies/ruby-rails", title: "Ruby on Rails" },
      { link: "/technologies/ios", title: "iOS" },
      { link: "/technologies/android", title: "Android" },
      { link: "/technologies/flutter", title: "Flutter" },
      { link: "/technologies/react-native", title: "React Native" },
      { link: "/technologies/xamarin", title: "Xamarin" },
      { link: "/technologies/net-maui", title: ".NET MAUI" },
    ],
    colSize: 2,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer__area">
          {/* <div className="footer__top f_right_bg">
            <div className="container">
              <div className="row pt-40 pb-80">
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <div className="footer_cta-title">Get started now!
                    <span> It takes less than a minute of your time.</span> </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="slider__btn-8 d-flex justify-content-end">
                    <Link href="/contact" className="tp-btn-4 tp-style-border"  >
                      Request a quote{" "}
                      <i class="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="container footer_line">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-1">
                    <div className="footer__logo logo">
                      <Link href="/">
                        <LiveStream />
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__info pt-20">
                        <p>
                          We transform bold business ideas into exceptional digital products. Searching for a partner that will take the process of software development off your hands? You’ve come to the right place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {widget.map((item, i) => (
                  <div
                    key={i}
                    className={`col-xxl-${item.colSize} col-xl-3 col-lg-3 col-md-6 col-sm-6`} >
                    <FooterWidget item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="footer__bottom">
            <div className="container">
              <FooterBottom inner="inner" copyright="copyright" link="link" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

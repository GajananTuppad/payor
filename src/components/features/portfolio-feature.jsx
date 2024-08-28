"use client";
import React, { useState } from "react";
import Image from "next/image";
// internal

import feature_thumb_1 from "/public/assets/img/features/9/features-1.jpg";
import feature_thumb_2 from "/public/assets/img/features/9/features-2.jpg";
import feature_thumb_3 from "/public/assets/img/features/9/features-3.jpg";
import feature_thumb_4 from "/public/assets/img/features/9/features-4.jpg";
import service_data from "@/data/service-data";
import CreativeSingleFeature from "@/components/features/single-feature/creative-single-feature";

// data
const dedicated_team = service_data.filter((item) => item.dedicated_team);
const custom_software_development = service_data.filter(
  (item) => item.custom_software_development
);
const consulting_support = service_data.filter(
  (item) => item.consulting_support
);
const digital_transformation = service_data.filter(
  (item) => item.digital_transformation
);
const ui_ux_design = service_data.filter((item) => item.ui_ux_design);

// feature content
const feature_contents = [
  { id: 1, subtitle: "Medicare", title: "Medicare plans for your needs" },
  { id: 2, subtitle: "Individual", title: "Individual and family" },
  { id: 3, subtitle: "Medicaid", title: "Medicaid plans for your needs" }/* ,
  { id: 4, subtitle: "Transformation", title: "Digital transformation" },
  { id: 5, subtitle: "Prototyping", title: "UI/UX Design" }, */
];

const feature_thumbs = [
  { ref: "features-img-1", img: feature_thumb_1 },
  { ref: "features-img-2", img: feature_thumb_2 },
  { ref: "features-img-3", img: feature_thumb_3 },
  { ref: "features-img-4", img: feature_thumb_4 },
  { ref: "features-img-1", img: feature_thumb_1 },
];

const PortfolioFeature = () => {
  const [serviceActive, setServiceActive] = useState("features-img-1");
  //const [activeTab, SetActiveTab] = useState(1);
  const [portfolioData, setPortfolioData] = useState(dedicated_team);
  // handleServiceActive
  const handleServiceActive = (id) => {
    setServiceActive(`features-img-${id}`);
    //SetActiveTab(id);
    switch (id) {
      case 1:
        setPortfolioData(dedicated_team);
        break;
      case 2:
        setPortfolioData(custom_software_development);
        break;
      case 3:
        setPortfolioData(consulting_support);
        break;
      case 4:
        setPortfolioData(digital_transformation);
        break;
      case 5:
        setPortfolioData(ui_ux_design);
        break;
    }
  };

  return (
    <>
      <section className="features__area pt-120 pb-20 grey-bg-2">
        <div className="container">
          <div
            className="tp-section-wrapper-3 mb-80 text-center wow fadeInUp"
            data-wow-delay=".7s"
            data-wow-duration="1s"
          >
            <span className="tp-section-subtitle-3">Our services</span>
            <h3 className="tp-section-title-3">
              Building end-to-end medical plans solutions
            </h3>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="features__wrapper-9 mr-30">
                {feature_contents.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleServiceActive(item.id)}
                    className={`features__content-9 features-item-content ${serviceActive === `features-img-${item.id}`
                      ? "active"
                      : ""
                      }`}
                    rel="features-img-1"
                  >
                    <span>{item.subtitle}</span>
                    <h3 className="features__title-9">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 d-none d-md-block">
              <div>
                <div id="features-item-thumb" className={serviceActive}>
                  {feature_thumbs.map((item, i) => (
                    <div
                      key={i}
                      className={`features__thumb-9 transition-3 ${item.ref} ${serviceActive === item.ref ? "active" : ""
                        }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="row">
                {portfolioData.map((service, i) => (
                  <CreativeSingleFeature key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioFeature;

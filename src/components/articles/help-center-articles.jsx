import React from "react";
import Image from "next/image";
// internal
import article_1 from "/public/assets/img/articles/health-plan_01.jpg";
import article_2 from "/public/assets/img/articles/health-plan_02.jpg";
import article_3 from "/public/assets/img/articles/health-plan_03.jpg";
import { Extensions } from "@/svg";

// image style
const ImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

// single article item
function SingleArticleItem({ delay, img, title, article, desc, sm }) {
  return (
    <div
      className={`articles__item
      ${
        sm ? "articles__item-sm" : ""
      } purple-bg p-relative z-index-1 mb-30 wow fadeInUp`}
      data-wow-delay={delay}
      data-wow-duration="1s"
    >
      <div className="articles__thumb">
        <Image src={img} alt="image" style={ImageStyle} />
      </div>

      <div className="articles__content">
        <div className="articles__top d-flex align-items-center">
          <h3 className="articles__title">{title}</h3>
          <span className="articles__number">{article} Articles</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

const HelpCenterArticles = () => {
  return (
    <section className="articles__area pt-100 pb-20 grey-bg-2">
      <div className="container">
      <div
            className="tp-section-wrapper-3 mb-80 text-center wow fadeInUp"
            data-wow-delay=".7s"
            data-wow-duration="1s"
          >
            <h3 className="tp-section-title-3">
              Latest news and articles
            </h3>
          </div>
        <div className="row grid">
          {/* <div className="col-xl-4 col-lg-4">
            <SingleArticleItem
              delay=".3s"
              img={article_1}
              title="Themes"
              article="8"
              desc="Everything about themes: built-in features, technical guides, and formatting options."
            />
          </div> */}
          <div className="col-xl-12 col-lg-12">
            <div className="row">
            <div className="col-lg-4 col-md-4">
                <SingleArticleItem
                  delay=".3s"
                  img={article_1}
                  title="Healthy living"
                  article="8"
                  sm={true}
                  desc="7 medical tests you may need before turning 40"
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <SingleArticleItem
                  delay=".5s"
                  img={article_2}
                  title="Community"
                  article="8"
                  sm={true}
                  desc="Expanding value-based care in southeast Wisconsin."
                />
              </div>
              <div className="col-lg-4 col-md-4">
                <SingleArticleItem
                  delay=".7s"
                  img={article_3}
                  title="Benefits & coverage"
                  article="6"
                  sm={true}
                  desc="Beyond basic coverage: ACA plan benefits to keep you healthy"
                />
              </div>
              {/* <div className="col-lg-12">
                <div
                  className="articles__item articles__style-2 khaki-bg-2 p-relative z-index-1 mb-30 wow fadeInUp"
                  data-wow-delay=".9s"
                  data-wow-duration="1s"
                >
                  <div className="articles__icon">
                    <span>
                      <Extensions />
                    </span>
                  </div>

                  <div className="articles__content">
                    <div className="articles__top d-flex align-items-center">
                      <h3 className="articles__title">Extensions</h3>
                      <span className="articles__number">6 Articles</span>
                    </div>
                    <p>
                      Everything about themes: built-in features, technical
                      guides, and formatting options.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterArticles;

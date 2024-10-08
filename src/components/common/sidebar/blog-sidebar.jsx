"use client"
import Image from "next/image";
import Link from "next/link";
// internal
import author from "/public/assets/img/blog/sidebar/sidebar-author.jpg";
import {Search} from "@/svg";
import rc_img_1 from "/public/assets/img/blog/sidebar/blog-sm-1.jpg";
import rc_img_2 from "/public/assets/img/blog/sidebar/blog-sm-2.jpg";
import rc_img_3 from "/public/assets/img/blog/sidebar/blog-sm-3.jpg";
import SingleRecentPost from "@/components/blogs/single-blog/single-recent-post";

// tags
const tags = [
  "Technology",
  "Food",
  "Personality",
  "Life Style",
  "Travel",
  "Nature",
];
// categories
const categories = [
  { title: "Business", total: "10" },
  { title: "Cleaning", total: "12" },
  { title: "Consultant", total: "18" },
  { title: "Creative", total: "37" },
  { title: "Technology", total: "45" },
];

const BlogSidebar = ({style_2=false}) => {
  return (
    <div className={`sidebar__wrapper ${style_2?'sidebar__widget-style-2':''} pl-40`}>
      <div className="sidebar__widget mb-20">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={e => e.preventDefault()}>
              <div className="sidebar__search-input">
                <input type="text" placeholder="Enter your keywords..." />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-45">
        <div className="sidebar__widget-content">
          <div className="sidebar__author">
            <div className="sidebar__author-thumb">
              <Image src={author} alt="author img" />
            </div>
            <div className="sidebar__author-content">
              <h3 className="sidebar__author-title">Colene Landin</h3>
              <p>
                Lorem ipsum dolor ametare elit consectetur adipiscing Aenean
                pellentesque.
              </p>
              <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-45">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {categories.map((item, i) => (
              <li key={i}>
                <Link href="/blog">
                  {item.title} <span>{item.total}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-45">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post">
            <SingleRecentPost
              img={rc_img_1}
              title="Business meeting 2021 in San Francisco"
              date="July 21, 2022"
            />
            <SingleRecentPost
              img={rc_img_2}
              title="Developing privacy user-centric apps"
              date="July 25, 2022"
            />
            <SingleRecentPost
              img={rc_img_3}
              title="Starting and Growing  Web Design in 2022"
              date="July 18, 2022"
            />
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags.map((t, i) => (
              <a key={i} href="#">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;

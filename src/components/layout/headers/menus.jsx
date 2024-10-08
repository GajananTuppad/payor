import Link from "next/link";
import React from "react";
// internal
import menu_data from "@/data/menu-data";

const Menus = () => {
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`has-dropdown ${menu.megaMenu ? "has-mega-menu" : ""}`}
        >
          <Link href={menu.link}>{menu.title}</Link>
          {menu.hasDropdown && (
            <ul className="submenu">
              {menu.submenus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
          {menu.mega_menus && (
            <ul className="mega-menu">
              <li className="li-bg">
                <div className="li-ti">
                  {" "}
                  {menu.title}
                  <p> {menu.titleDesc} </p>
                  <Link href={menu.link} className="view_all">
                    {" "}
                    All {
                      menu.title
                    } <i class="fa-light fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </li>
              {menu.mega_menus.map((mega, i) => (
                <li key={i}>
                  <Link href={mega.link} className="mega-menu-title">
                    {mega.title}
                  </Link>
                  <ul>
                    {mega.submenus.map((sub_mega, i) => (
                      <li key={i}>
                        <Link href={sub_mega.link}>{sub_mega.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;

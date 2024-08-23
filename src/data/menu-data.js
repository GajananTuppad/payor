
const menu_data = [
  {
    id: 1,
    title: "Medicare",
    titleDesc:
      "Medicare is a federal health insurance program in the United States for people age 65 or older and younger people with disabilities, including those with end stage renal disease and amyotrophic lateral sclerosis.",
    megaMenu: false,
    link: "/medicare",
    mega_menus: [
      /* {
        //title: "IT services",
        link: "#",
        submenus: [
          { title: "IT Consulting ", link: "/services/it-consulting" },
          { title: "Web Development", link: "/services/web-development" },
          { title: "Mobile Development", link: "/services/mobile-development" },
          {
            title: "Custom Software Development",
            link: "/services/custom-software-development",
          },
          {
            title: "Database Administration",
            link: "/services/database-administration",
          },
        ],
      },
      {
        //title: "Digital transformation",
        link: "#",
        submenus: [
          { title: "Security Testing", link: "/services/security-testing" },
          { title: "UI/UX Design", link: "/services/ux-ui-design" },
          {
            title: "Quality Assurance & Testing",
            link: "/services/software-testing",
          },
          { title: "Business Analysis", link: "/services/business-analysis" },
          { title: "Dedicated Team", link: "/services/dedicated-team" },
          { title: "Staff Augmentation", link: "/services/staff-augmentation" },
        ],
      },
      {
        //title: "Industry-specific software",
        link: "#",
        submenus: [
          { title: "DevOps", link: "/services/devops" },
          {
            title: "Maintenance & Support",
            link: "/services/maintenance-support",
          },
          {
            title: "Internet of Things (IOT)",
            link: "/services/internet-of-things",
          },
        ],
      }, */
    ],
  },
  {
    id: 2,
    title: "Individual and family",
    titleDesc:
      "With individual and family plans from Emids, you'll find health insurance coverage with benefits designed with your unique needs in mind.",
    megaMenu: true,
    link: "/Individualandfamily",
    mega_menus: [
      /* {
        //title: "Industries",
        link: "#",
        submenus: [
          { title: "Healthcare", link: "/industries/healthcare" },
          { title: "Finance", link: "/industries/finance" },
          { title: "Banking", link: "/industries/banking" },
          { title: "Insurance", link: "/industries/insurance" },
          { title: "eCommerce", link: "/industries/eCommerce" },
          { title: "Education", link: "/industries/education" },
        ],
      },
      {
        //title: "Extensive domain expertise",
        link: "#",
        submenus: [
          {
            title: "Telecommunications",
            link: "/industries/telecommunications",
          },
          { title: "Transportation", link: "/industries/transportation" },
          {
            title: "Media & Entertainment",
            link: "/industries/media-entertainment",
          },
          { title: "Construction", link: "/industries/construction" },
          { title: "Agriculture", link: "/industries/agriculture" },
          { title: "Retail", link: "/industries/retail" },
        ],
      },
      {
        //title: "Related cases",
        link: "#",
        submenus: [
          { title: "Manufacturing", link: "/industries/manufacturing" },
          { title: "Automotive", link: "/industries/automotive" },
          { title: "Real Estate", link: "/industries/real-estate" },
          { title: "Travel", link: "/industries/travel-tourism" },
          {
            title: "Energy & Utilities",
            link: "/industries/energy-and-utilities",
          },
        ],
      }, */
    ],
  },
  {
    id: 3,
    megaMenu: true,
    title: "Medicaid",
    titleDesc:
      "Dive into our arsenal of modern technologies, where we combine cutting-edge tools and proven frameworks to build scalable, robust, and innovative applications.",
    link: "/Medicaid",
    mega_menus: [
     /*  {
        //title: "Front-end",
        link: "#",
        submenus: [
          { title: "React", link: "/technologies/react" },
          { title: "Angular", link: "/technologies/angular" },
          { title: "Vue.js", link: "/technologies/vue-js" },
          { title: "JavaScript", link: "/technologies/javaScript" },
        ],
      },
      {
       // title: "Back-end",
        link: "#",
        submenus: [
          { title: ".NET", link: "/technologies/dot-net" },
          { title: "Java", link: "/technologies/java" },
          { title: "Node.js", link: "/technologies/node" },
          { title: "C/C++", link: "/technologies/c-plus-plus" },
          { title: "Python", link: "/technologies/python" },
          { title: "Ruby on Rails", link: "/technologies/ruby-rails" },
        ],
      },
      {
        //title: "Mobile",
        link: "#",
        submenus: [
          { title: "iOS", link: "/technologies/ios" },
          { title: "Android", link: "/technologies/android" },
          { title: "Flutter", link: "/technologies/flutter" },
          { title: "React Native", link: "/technologies/react-native" },
          { title: "Xamarin", link: "/technologies/xamarin" },
          { title: ".NET MAUI", link: "/technologies/net-maui" },
        ],
      },
      {
        //title: "Platforms",
        link: "#",
        submenus: [
          { title: "AWS", link: "/technologies/aws-services" },
          { title: "Azure", link: "/technologies/azure-services" },
          { title: "GCP", link: "/technologies/gcp-services" },
          { title: "SAP", link: "/technologies/sap-services" },
          { title: "Salesforce", link: "/technologies/salesforce-services" },
          { title: "Power BI", link: "/technologies/power-bi-services" },
        ],
      }, */
    ],
  },

  {
    id: 4,
    megaMenu: true,
    hasDropdown: false,
    title: "About Us",
    link: "/about",
  /*   mega_menus: [], */
    // submenus: [
    //   { title: "Blog Standard", link: "/blog" },
    //   { title: "Blog Grid", link: "/blog-grid" },
    //   { title: "Blog Grid Boxed", link: "/blog-grid-2" },
    //   { title: "Blog Grid Sidebar", link: "/blog-grid-sidebar" },
    //   { title: "Blog List Sidebar", link: "/blog-list-sidebar" },
    //   { title: "Blog Masonry", link: "/blog-masonry" },
    //   { title: "Blog Details", link: "/blog-details" },
    //   { title: "Blog Details 2", link: "/blog-details-2" },
    // ],
  },
  // {
  //   id: 5,
  //   title: "Our Thinking",
  //   hasDropdown: false,
  //   link: "#",
  //    mega_menus: [
  //     {
  //       title: 'Page Layout 1', link: '#',
  //       submenus: [
  //         {title:'About Us',link:'/about'},
  //         {title:'About Me',link:'/about-me'},
  //         {title:'Service Creative',link:'/services'},
  //         {title:'Service Standard',link:'/services-2'},
  //         {title:'Service Basic',link:'/services-3'},
  //         {title:'Service Details',link:'/service-details'},
  //         {title:'Help Center',link:'/help'},
  //       ]
  //     },
  //     {
  //       title: 'Page Layout 2', link: '#',
  //       submenus: [
  //         {title:'Team Classic',link:'/team'},
  //         {title:'Team Details',link:'/team-details'},
  //         {title:'Event Details',link:'/event-details'},
  //         {title:'Job List',link:'/job'},
  //         {title:'Job Details',link:'/job-details'},
  //         {title:'Pricing Table',link:'/pricing'},
  //         {title:'Coming soon',link:'/coming-soon'},
  //       ]
  //     },
  //     {
  //       title: 'Page Layout 3', link: '#',
  //       submenus: [
  //         {title:'Shop',link:'/shop'},
  //         {title:'Shop Right Sidebar',link:'/shop-right-sidebar'},
  //         {title:'Shop Details',link:'/product-details'},
  //         {title:'FAQs',link:'/faq'},
  //         {title:'Search Result',link:'/search'},
  //         {title:'Privacy & Policy',link:'/policy'},
  //         {title:'Terms & Conditions',link:'/terms'},
  //       ]
  //     },
  //     {
  //       title: 'Page Layout 4', link: '#',
  //       submenus: [
  //         {title:'Error 404',link:'/404'},
  //         {title:'Login',link:'/login'},
  //         {title:'Register',link:'/register'},
  //         {title:'Forgot Password',link:'/forgot'},
  //         {title:'My Cart',link:'/cart'},
  //         {title:'My Wishlist',link:'/wishlist'},
  //         {title:'Checkout',link:'/checkout'},
  //       ]
  //     },
  //   ]
  // },
  {
    id: 6,
    hasDropdown: false,
    link: "/contact",
  },
];

export default menu_data;

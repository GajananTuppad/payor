// bg images lawyer
import bg_law_1 from "/public/assets/img/services/4/services-1.jpg";
import bg_law_2 from "/public/assets/img/services/4/services-2.jpg";
import bg_law_3 from "/public/assets/img/services/4/services-3.jpg";
import bg_law_4 from "/public/assets/img/services/4/services-4.jpg";
import bg_law_5 from "/public/assets/img/services/4/services-5.jpg";
import bg_law_6 from "/public/assets/img/services/4/services-6.jpg";
// agency service image
import agn_ser_1 from "/public/assets/img/services/5/services-1.png";
import agn_ser_2 from "/public/assets/img/services/5/services-2.png";
import agn_ser_3 from "/public/assets/img/services/5/services-3.png";

// svg icons
import {
  CreativeFeatureIconFour,
  CreativeFeatureIconOne,
  CreativeFeatureIconThree,
  CreativeFeatureIconTwo,
  SerIconLawFive,
  SerIconLawFour,
  SerIconLawOne,
  SerIconLawSix,
  SerIconLawThree,
  SerIconLawTwo,
  ServiceIconFour,
  ServiceIconOne,
  ServiceIconThree,
  ServiceIconTwo,
  StartUpServiceFive,
  StartUpServiceFour,
  StartUpServiceOne,
  StartUpServiceSix,
  StartUpServiceThree,
  StartUpServiceTwo,
  PortfolioSerIconOne,
  PortfolioSerIconThree,
  PortfolioSerIconTwo,
  Android,
  Vueicons,
} from "../svg";

const service_data = [
  // home services data
  {
    id: 1,
    icon: <ServiceIconOne />,
    title: "UX/UI Design",
    subtitle:
      "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    home: true,
  },
  {
    id: 2,
    icon: <ServiceIconTwo />,
    title: "Development",
    subtitle:
      "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    home: true,
  },
  {
    id: 3,
    icon: <ServiceIconThree />,
    title: "Construction",
    subtitle:
      "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    home: true,
  },
  {
    id: 4,
    icon: <ServiceIconFour />,
    title: "Appointments",
    subtitle:
      "Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.",
    home: true,
  },
  // home lawyer service data
  {
    id: 5,
    delay: ".3s",
    bg: bg_law_1,
    icon: <SerIconLawOne />,
    title: "This is war, and in war the only crime is to lose",
    subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was.",
    home_lawyer: true,
  },
  {
    id: 6,
    delay: ".5s",
    bg: bg_law_2,
    icon: <SerIconLawTwo />,
    title: "Is your business ready for Integration",
    subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was.",
    home_lawyer: true,
  },
  {
    id: 7,
    delay: ".7s",
    bg: bg_law_3,
    icon: <SerIconLawThree />,
    title: "Do injured workers have to be treated",
    subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was.",
    home_lawyer: true,
  },
  {
    id: 8,
    delay: ".9s",
    bg: bg_law_4,
    icon: <SerIconLawFour />,
    title: "Nobis occaecati nobis Repudiamus andaeum.",
    subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was.",
    home_lawyer: true,
  },
  {
    id: 9,
    delay: "1.1s",
    bg: bg_law_5,
    icon: <SerIconLawFive />,
    title: "How Is equity determined in a divorce",
    subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was.",
    home_lawyer: true,
  },
  {
    id: 10,
    delay: "1.3s",
    bg: bg_law_6,
    icon: <SerIconLawSix />,
    title: "Amet massa vel dolor deleni recusand",
    subtitle: "Quis autem iure qui voluptate velit ess quam molestiae was.",
    home_lawyer: true,
  },
  // home agency service
  {
    id: 11,
    delay: ".3s",
    img: agn_ser_1,
    title: "Strategy & Research.",
    subtitle: "Our design services starts and ends best in class experience.",
    home_agency: true,
  },
  {
    id: 12,
    delay: ".5s",
    img: agn_ser_2,
    title: "UI/UX Analysis",
    subtitle: "Our design services starts and ends best in class experience.",
    home_agency: true,
  },
  {
    id: 13,
    delay: ".7s",
    img: agn_ser_3,
    title: "Search Optimization",
    subtitle: "Our design services starts and ends best in class experience.",
    home_agency: true,
  },

  // home startup service
  {
    id: 14,
    delay: ".3s",
    icon: <StartUpServiceOne />,
    title: "Beautiful Pages",
    subtitle:
      "Understand the business model of your product. Know your customers, value propositions.",
    home_startup: true,
  },
  {
    id: 15,
    delay: ".5s",
    icon: <StartUpServiceTwo />,
    title: "Easy Invoicing",
    subtitle:
      "Understand the business model of your product. Know your customers, value propositions.",
    home_startup: true,
  },
  {
    id: 16,
    delay: ".7s",
    icon: <StartUpServiceThree />,
    title: "CMS & Style Guide",
    subtitle:
      "Understand the business model of your product. Know your customers, value propositions.",
    home_startup: true,
  },
  {
    id: 17,
    delay: ".9s",
    icon: <StartUpServiceFour />,
    title: "Manage Expenses",
    subtitle:
      "Understand the business model of your product. Know your customers, value propositions.",
    home_startup: true,
  },
  {
    id: 18,
    delay: "1.1s",
    icon: <StartUpServiceFive />,
    title: "Powerful Blog",
    subtitle:
      "Understand the business model of your product. Know your customers, value propositions.",
    home_startup: true,
  },
  {
    id: 19,
    delay: "1.3s",
    icon: <StartUpServiceSix />,
    title: "Expert Support",
    subtitle:
      "Understand the business model of your product. Know your customers, value propositions.",
    home_startup: true,
  },
  // home creative
  {
    id: 20,
    delay: ".3s",
    icon: <CreativeFeatureIconOne />,
    title: "Collect Website Leads With Embedded",
    subtitle: "Lorem Ipsum is that it more less normal distribution.",
    color: "",
    home_creative: true,
  },
  {
    id: 21,
    delay: ".5s",
    icon: <CreativeFeatureIconTwo />,
    title: "Product Design Event Development",
    subtitle: "Lorem Ipsum is that it more less normal distribution.",
    color: "has-green",
    home_creative: true,
  },
  {
    id: 22,
    delay: ".7s",
    icon: <CreativeFeatureIconThree />,
    title: "Website Leads Hire in Fixed Contracting",
    subtitle: "Lorem Ipsum is that it more less normal distribution.",
    color: "has-pink",
    home_creative: true,
  },
  {
    id: 23,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "General are Consulting Process Embedded",
    subtitle: "Lorem Ipsum is that it more less normal distribution.",
    color: "has-purple",
    home_creative: true,
  },
  //Dedicated team
  {
    id: 24,
    delay: ".3s",
    icon: <CreativeFeatureIconOne />,
    title: "Medicare Advantage plans",
    subtitle:
      "Combines Part A (hospital insurance) and Part B (medical insurance) into one plan. These plans may include additional benefits beyond Original Medicare.",
    color: "",
    dedicated_team: true,
    link: "/services/dedicated-team",
  },
  {
    id: 25,
    delay: ".3s",
    icon: <CreativeFeatureIconTwo />,
    title: "Medicare Supplement insurance plans",
    subtitle:
      "Also called Medigap, these plans help cover some out-of-pocket costs not paid by Original Medicare. Like prescription drug coverage, dental. ",
    color: "has-green",
    dedicated_team: true,
    link: "/services/dedicated-team",
  },
  {
    id: 26,
    delay: ".5s",
    icon: <CreativeFeatureIconThree />,
    title: "Dual Special Needs plans (D-SNPs)",
    subtitle:
      "Insurance coverage for people who qualify for both Medicaid and Medicare. Most dual plans give you more benefits than you get with Original Medicare. ",
    color: "has-pink",
    dedicated_team: true,
    link: "/services/dedicated-team",
  },
  {
    id: 27,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Medicare Part D prescription drug plans",
    subtitle: "These plans help pay for prescription drugs and can be used with Original Medicare or Medicare Supplement plans.",
    color: "has-purple",
    dedicated_team: true,
    link: "/services/dedicated-team",
  },
  // {
  //   id: 28,
  //   delay: ".7s",
  //   icon: <CreativeFeatureIconOne />,
  //   title: "3D designers",
  //   subtitle:
  //     "Visualize and animate your ideas in 3D with the help of our creative team",
  //   color: "",
  //   dedicated_team: true,
  // },
  {
    id: 29,
    delay: ".7s",
    icon: <CreativeFeatureIconTwo />,
    title: "Medicare Part E prescription drug plans",
    subtitle:
      "These plans help pay for prescription drugs and can be used with Original Medicare or Medicare Supplement plans.",
    color: "has-green",
    dedicated_team: true,
    link: "/services/dedicated-team",
  },
  {
    id: 30,
    delay: ".9s",
    icon: <CreativeFeatureIconThree />,
    title: "Medicare Part G prescription drug plans",
    subtitle: "These plans help pay for prescription drugs and can be used with Original Medicare or Medicare Supplement plans.",
    color: "has-pink",
    dedicated_team: true,
    link: "/services/dedicated-team",
  },
  // {
  //   id: 31,
  //   delay: ".9s",
  //   icon: <CreativeFeatureIconFour />,
  //   title: "Business analysts",
  //   subtitle:
  //     "Our BAs ensure smooth project workflows, identifying optimal technical solutions",
  //   color: "has-purple",
  //   dedicated_team: true,
  // },
  // Custom software development
  {
    id: 32,
    delay: ".3s",
    icon: <CreativeFeatureIconOne />,
    title: "ACA Marketplace plans",
    subtitle:
      "With UnitedHealthcare, you’ll find ACA plans that put you first.",
    color: "",
    custom_software_development: true,
    link: "/services/web-development",
  },
  {
    id: 33,
    delay: ".5s",
    icon: <CreativeFeatureIconTwo />,
    title: "Short term plans",
    subtitle:
      "Short term plans may help you get benefits in times where you may have a gap in coverage.",
    color: "has-green",
    custom_software_development: true,
    link: "/services/web-development",
  },
  {
    id: 34,
    delay: ".7s",
    icon: <CreativeFeatureIconThree />,
    title: "Self-employed plans",
    subtitle:
      "Find coverage options if you're self-employed and have no employees with no coverage.",
    color: "has-pink",
    custom_software_development: true,
    link: "/services/web-development",
  },
  {
    id: 35,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "Student plans",
    subtitle:
      "Get coverage that's designed for students while they're in school.",
    color: "has-purple",
    custom_software_development: true,
    link: "/services/web-development",
  },
  {
    id: 36,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "Plans through work",
    subtitle:
      "Learn the benefits of UnitedHealthcare plans offered by employers.",
    color: "has-purple",
    custom_software_development: true,
    link: "/services/web-development",
  },
  {
    id: 36,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "Current members",
    subtitle:
      "Sign in, see your health plan details and more.Same information shared in emails",
    color: "has-purple",
    custom_software_development: true,
    link: "/services/web-development",
  },
  // IT consulting & support
  {
    id: 37,
    delay: ".3s",
    icon: <CreativeFeatureIconOne />,
    title: "Medicaid only",
    subtitle:
      "Medicaid provides health insurance for some low-income people, children, pregnant women, the elderly.",
    color: "",
    consulting_support: true,
    link: "/services/it-consulting",
  },
  {
    id: 38,
    delay: ".5s",
    icon: <CreativeFeatureIconTwo />,
    title: "D-SNP",
    subtitle:
      "If you're eligible for both Medicare and Medicaid, a Dual Special Needs plan (D-SNP) might be right for you.",
    color: "has-green",
    consulting_support: true,
    link: "/services/it-consulting",
  },
  {
    id: 39,
    delay: ".7s",
    icon: <CreativeFeatureIconThree />,
    title: "ACA Marketplace plans",
    subtitle:
      "If you buy your own health insurance for you and your family, the health care Marketplace is for you.",
    color: "has-pink",
    consulting_support: true,
    link: "/services/it-consulting",
  },
  {
    id: 40,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "CHIP",
    subtitle:
      "Every child deserves to grow up healthy and happy. To help them get there, kids need regular checkups and medical care.",
    color: "has-purple",
    consulting_support: true,
    link: "/services/it-consulting",
  },
  /* {
    id: 41,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "Prototyping",
    subtitle: "We deliver highly detailed prototypes under tight deadlines",
    color: "has-purple",
    consulting_support: true,
    link: "/services/it-consulting",
  },
  {
    id: 42,
    delay: ".9s",
    icon: <CreativeFeatureIconFour />,
    title: "Maintenance",
    subtitle:
      "Software maintenance services to ensure its robust security and high performance",
    color: "has-purple",
    consulting_support: true,
    link: "/services/it-consulting",
  }, */
  // Digital transformation
  {
    id: 43,
    delay: ".3s",
    icon: <CreativeFeatureIconOne />,
    title: "Enterprise resource planning (ERP)",
    subtitle:
      "Custom ERP systems, ensuring robust security and fast user adoption",
    color: "",
    digital_transformation: true,
    link: "/services/database-administration",
  },
  {
    id: 44,
    delay: ".3s",
    icon: <CreativeFeatureIconTwo />,
    title: "Customer relationship management (CRM)",
    subtitle:
      "CRM development services to open up game-changing sales and marketing opportunities",
    color: "has-green",
    digital_transformation: true,
    link: "/services/database-administration",
  },
  {
    id: 45,
    delay: ".3s",
    icon: <CreativeFeatureIconThree />,
    title: "Business process management (BPM)",
    subtitle:
      "Custom BPM systems to streamline and automate internal operations",
    color: "has-pink",
    digital_transformation: true,
    link: "/services/database-administration"
  },
  {
    id: 46,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Content management (CMS)",
    subtitle:
      "Custom software platforms for document workflow enhancement and content management",
    color: "has-purple",
    digital_transformation: true,
    link: "/services/database-administration"
  },
  {
    id: 47,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Data analytics and visualization",
    subtitle:
      "We facilitate uncovering business insights, making the best use of the available data",
    color: "has-purple",
    digital_transformation: true,
    link: "/services/database-administration"
  },
  {
    id: 48,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Human resource management (HRM)",
    subtitle:
      "Electronic systems to facilitate HR department’s daily operations",
    color: "has-purple",
    digital_transformation: true,
    link: "/services/database-administration"
  },
  // UI/UX design
  {
    id: 49,
    delay: ".3s",
    icon: <CreativeFeatureIconOne />,
    title: "User Experience Design (UX)",
    subtitle:
      "Creating unique designs that are centred around the mindset of your target segment and ensuring seamless flow",
    color: "",
    ui_ux_design: true,
    link: "/services/ux-ui-design"
  },
  {
    id: 50,
    delay: ".3s",
    icon: <CreativeFeatureIconTwo />,
    title: "User Interface Design (UI)",
    subtitle:
      " Our UI design process is aimed at creating functional digital interfaces that attract and retain users",
    color: "has-green",
    ui_ux_design: true,
    link: "/services/ux-ui-design"
  },
  {
    id: 51,
    delay: ".3s",
    icon: <CreativeFeatureIconThree />,
    title: "Cross-platform Experience Design",
    subtitle:
      "We make sure that the design is aligned across all the platforms to ensure uniformity in the customer experience",
    color: "has-pink",
    ui_ux_design: true,
    link: "/services/ux-ui-design"
  },
  {
    id: 52,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Interaction Design",
    subtitle:
      "Designing interactive digital products, environments, systems, and services according to user behaviour",
    color: "has-purple",
    ui_ux_design: true,
    link: "/services/ux-ui-design"
  },
  {
    id: 53,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "UI/UX Auditing",
    subtitle:
      " Get the best consulting on UI/UX design services to improve the design and usability of your digital products",
    color: "has-purple",
    ui_ux_design: true,
    link: "/services/ux-ui-design"
  },
  {
    id: 54,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Design System",
    subtitle:
      "Systematic approach to design and ensure consistency, efficiency, and scalability across different platforms",
    color: "has-purple",
    ui_ux_design: true,
    link: "/services/ux-ui-design"
  },
  //Front-end
  {
    id: 55,
    delay: ".3s",
    icon: <Android />,
    title: "React",
    subtitle:
      "React, Redux, Redux-Saga, RxJS, React-Native, Three.JS, NextJS react",
    color: "has-pink",
    front_end: true,
    link: "/technologies/react"
  },
  {
    id: 56,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "Angular",
    subtitle: "Angular, NgRx, NGXS, MobX, Formly, Ionic angular",
    color: "has-purple",
    front_end: true,
    link: "/technologies/angular"
  },
  {
    id: 57,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "Vue.js",
    subtitle: "Vue.js, Vuex, Vue Router, NuxtJS, Vue CLI, Vue Meta",
    color: "has-purple",
    front_end: true,
    link: "/technologies/vue-js"
  },
  {
    id: 58,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "JavaScript",
    subtitle:
      "Material, Ant Design, Apollo GraphQL, Protractor, Jasmine, Jest, Enzyme, Mocha, Electron, SSR, Lodash, Date-FNS, CSS, SASS/SCSS, LESS, Lerna, TypeScript",
    color: "has-purple",
    front_end: true,
    link: "/technologies/javascript"
  },
  //Back-end
  {
    id: 59,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "Java",
    subtitle:
      "Java, Spring Framework (Core, Data, Boot, Batch, Cloud, Security, Retry, MVC, AOP, Reactor), MapStruct, Lombok, WebFlux, Hibernate, JPA2, Kafka, Flyway, Microservices Architecture, Docker, Kubernetes, PostgreSQL, MongoDB, Redis",
    color: "has-pink",
    back_end: true,
  },
  {
    id: 60,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: ".NET",
    subtitle:
      ".NET Core, ASP.NET Core MVC, ASP.NET Web API, ASP.NET MVC, Xamarin.Forms, WPF, UWP, Stateless Architecture, Microservices, Azure Cloud (App Service, IoT Hub, Event Hub)",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 61,
    delay: ".5s",
    icon: <PortfolioSerIconTwo />,
    title: "Python",
    subtitle:
      "Django, Django Rest Framework, Flask, FastAPI, AsyncIo, AioHttp, Tornado, Celery, Microservices Architecture, Docker/Kubernetes, PostgreSQL, MySQL, MongoDB, Redis, DynamoDB",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 62,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "PHP",
    subtitle:
      "DUKPT, Laravel, Symfony, Yii2, WordPress, Drupal, MySQL, MongoDB, PostgreSQL, REST/SOAP/GraphQL API, OAuth, HTML, Twig, Swagger, Redis, ElasticSearch, Docker, Stripe, PayPal",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 63,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "Node.js",
    subtitle: "NestJS, Koa, MongoDB, PostgreSQL, AWS",
    color: "has-pink",
    back_end: true,
  },
  {
    id: 64,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "Unity",
    subtitle:
      "Unity, Godot, Blender, Krita, Amplify Shader Editor, MapBox SDK, Unity IAP; Firebase SDK; ARCore, AR Foundation, ARKit, Vuforia; Google VR SDK, Steam VR SDK; Unity XR Platform SDK",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 65,
    delay: ".5s",
    icon: <PortfolioSerIconTwo />,
    title: "Ruby",
    subtitle:
      "Ruby on Rails, Sinatra, Hanami, Padrino, Volt, EventMachine, Rack, Sidekiq, GraphQL, Web Socket, Swagger, JWT, OAuth",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 66,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Go",
    subtitle:
      "Go, gORM, Gin, protobuf, gRPC, AWS, GCP, Docker, Redis, Mongo DB, PostgreSQL",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 67,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "Rust",
    subtitle:
      "Rust, Rustup, Cargo, clap, structopt, argh, actix-web, gotham, nickel, rocket, axum, tide, warp, yew, wasm-bindgen, js-sys, web-sys, gloo. Games: amethyst, bevy, fyrox, piston, nannou, ggez, godot, raylib, SFML",
    color: "has-pink",
    back_end: true,
  },
  {
    id: 68,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "C/C++",
    subtitle:
      "STL/C++11/14/17/20, GCC, CLang, MSVC++, WinDBG, GDB, Visual Studio, QTCreator, VIM, VSCode, CMake, Makefile, Ninja, Conan, Vcpkg, Boost, opencv, poco, protobuf, gRPC, fmt, pybindll, spdlog, ranges_v3, tensorflow, opencl, Asio++, gtest/gmock, cppunit, QT, catch2, google profiler, pytorch c++, chromium",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 69,
    delay: ".5s",
    icon: <PortfolioSerIconTwo />,
    title: "Unreal Engine",
    subtitle:
      "Unreal Engine, C++, C, C#, Blueprints, UAT, UE4 Shader Graph, Unity URP HLSL, OpenGL ES",
    color: "has-purple",
    back_end: true,
  },
  {
    id: 70,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Cobol",
    subtitle:
      "Cobol, GnuCOBOL, VSAM, JCL, TSO/ISPF, XPEDITER, FileAid, Changeman, CICS, Hostbridge, SQL/DB2, Endevor, Visual Studio, TACL, FTP, SFTP, SCOBOL, DDL, ENFORM, eInspect, Batchcom",
    color: "has-purple",
    back_end: true,
  },
  //Mobile
  {
    id: 71,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "iOS",
    subtitle:
      "Objective-C/Swift, MVP, MVVM, Clean Swift, SnapKit, GCD, Alamofire, URLSession, MapKit, CoreLocation, XCTest, CoreData",
    color: "has-pink",
    mobile_tech: true,
  },
  {
    id: 72,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "Android",
    subtitle:
      "Java/Kotlin, MVP, MVVM, Clean Architecture, AAC (ViewModel, LiveData, Lifecycle, Navigation Component, Paging), Dagger2, Hilt, RxJava 2, Coroutines, Retrofit, ViewBinding, JUnit, Mockito, Robolectric, detekt, SQLite + Room",
    color: "has-purple",
    mobile_tech: true,
  },
  {
    id: 73,
    delay: ".5s",
    icon: <PortfolioSerIconTwo />,
    title: "Flutter",
    subtitle:
      "Bloc, Clean Architecture, Flutter, Dart async, RxDart, Dart Streams, Navigator 2.0, GetIt, Mocktail, SQFlite",
    color: "has-purple",
    mobile_tech: true,
  },
  {
    id: 74,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "React Native",
    subtitle:
      "React-Native, React-Navigation, Redux, Redux-Saga, TypeScript, StyleSheet, Firebase, Styled-Components",
    color: "has-purple",
    mobile_tech: true,
  },
  {
    id: 75,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "Xamarin",
    subtitle:
      "Xamarin.Native (Xamarin.iOS, Xamarin.Android, Xamarin.Mac), Xamarin.Forms, Xamarin.UWP, Visual Studio, Electron, .NET Core, REST API backend",
    color: "has-pink",
    mobile_tech: true,
  },
  {
    id: 76,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: ".NET MAUI",
    subtitle:
      ".NET MAUI, .NET MAUI Blazor, Visual Studio, .NET Core, REST/SOAP API backend, SQLite, XAML, Autofac",
    color: "has-purple",
    mobile_tech: true,
  },
  //Cloud & platforms
  {
    id: 77,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "AWS",
    subtitle:
      "Amazon Elastic Compute Cloud (EC2), Amazon Simple Storage Service (S3), Amazon Elastic Container Service (Amazon ECS), DynamoDB, Relational Database Service (RDS), AWS Lambda, ElastiCache, CloudSearch",
    color: "has-pink",
    cloud_platforms: true,
  },
  {
    id: 78,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "Azure",
    subtitle:
      "Azure Virtual Machines, Azure Web Apps, Azure Functions, Azure Blob Storage, Azure Notification Hub, Azure AI, Azure IoT Hub, Azure Event Hub, Azure Tables, Azure Queue, Azure DevOps Pipelines, Azure Content Delivery Network, Azure Application Insights, Azure Kubernetes, Azure SQL",
    color: "has-purple",
    cloud_platforms: true,
  },
  {
    id: 79,
    delay: ".5s",
    icon: <PortfolioSerIconTwo />,
    title: "GCP",
    subtitle:
      "Google Compute Engine, Google App Engine, Google Kubernetes Engine, Google Cloud Functions, Google Cloud SQL, Google Cloud Storage, Google Cloud Datastore, Google Cloud Bigtable",
    color: "has-purple",
    cloud_platforms: true,
  },
  {
    id: 80,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "SAP",
    subtitle:
      "SAP ABAP 7.5+, SAP UI5, SAP Fiori, JavaScript, HTML, XML, JSON, SAP S/4Hana(HANA DB, AMDP, CDS-extractors), SAP S/4Hana Cloud Public, SAP FI, SAP SD, SAP RE, SAP SCM, SAP HCM, SAP BTP ,SAP RAP and CAP,ADT Eclipse, SOAP, OData APIs, ABAP Proxy, FTP, SFTP, IDOC, DBOC,PBF Adobe form, XSTL, MWB, S/4Hana migration, ALV Grid, ALV Tree",
    color: "has-purple",
    cloud_platforms: true,
  },
  {
    id: 81,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "Salesforce",
    subtitle:
      "Salesforce, Apex code, Visualforce, Site.com, Customer 360 Platform, Lightning Web Components, REST/SOAP API",
    color: "has-pink",
    cloud_platforms: true,
  },
  //UI and UX
  {
    id: 82,
    delay: ".5s",
    icon: <PortfolioSerIconThree />,
    title: "Voice User Interface (VUI)",
    subtitle:
      "With the rise of virtual assistants and smart speakers, voice user interfaces have gained significant popularity. VUI technology allows users to interact with devices and applications using voice commands. As a UI/UX designer, understanding how to design intuitive and conversational voice interfaces will be essential.",
    color: "has-purple",
    ui_ux_tech: true,
  },
  {
    id: 83,
    delay: ".5s",
    icon: <PortfolioSerIconTwo />,
    title: "Augmented Reality (AR) and Virtual Reality (VR)",
    subtitle:
      "AR and VR technologies have revolutionised the way users interact with digital content. As these technologies become more accessible, UI/UX designers must adapt to designing immersive and engaging experiences.",
    color: "has-purple",
    ui_ux_tech: true,
  },
  {
    id: 84,
    delay: ".5s",
    icon: <CreativeFeatureIconFour />,
    title: "Motion Design and Microinteractions",
    subtitle:
      "Motion design and microinteractions play a crucial role in creating delightful user experiences. Motion design involves using animations and transitions to guide users and provide visual feedback.",
    color: "has-purple",
    ui_ux_tech: true,
  },
  {
    id: 85,
    delay: ".3s",
    icon: <PortfolioSerIconOne />,
    title: "Responsive Design and Adaptive Layouts",
    subtitle:
      "In today's multi-device world, UI/UX designers must ensure that their designs are responsive and adapt to various screen sizes and resolutions. Responsive design focuses on creating flexible layouts that adjust seamlessly across different devices.",
    color: "has-pink",
    ui_ux_tech: true,
  },
];

export default service_data;

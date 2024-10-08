// home main
import img_1 from '/public/assets/img/portfolio/portfolio-1.jpg';
import img_2 from '/public/assets/img/portfolio/portfolio-2.jpg';
import img_3 from '/public/assets/img/portfolio/portfolio-3.jpg';
// home lowyer
import case_1 from '/public/assets/img/case/case-1.jpg';
import case_2 from '/public/assets/img/case/case-2.jpg';

// home freelancer
// shapes 
import shape_freelancer_1 from '/public/assets/img/portfolio/2/shape/portfolio-shape-1.png';
import shape_freelancer_2 from '/public/assets/img/portfolio/2/shape/portfolio-shape-2.png';
import shape_freelancer_3 from '/public/assets/img/portfolio/2/shape/portfolio-shape-3.png';
import shape_freelancer_4 from '/public/assets/img/portfolio/2/shape/portfolio-shape-4.png';
// portfolio images
import portfolio_freelancer_1 from '/public/assets/img/portfolio/2/portfolio-1.jpg';
import portfolio_freelancer_2 from '/public/assets/img/portfolio/2/portfolio-2.jpg';
import portfolio_freelancer_3 from '/public/assets/img/portfolio/2/portfolio-3.jpg';
import portfolio_freelancer_4 from '/public/assets/img/portfolio/2/portfolio-4.jpg';
import portfolio_freelancer_5 from '/public/assets/img/portfolio/2/portfolio-5.jpg';
import portfolio_freelancer_6 from '/public/assets/img/portfolio/2/portfolio-6.png';
// home agency 
import agency_port_1 from '/public/assets/img/portfolio/5/portfolio-1.jpg';
import agency_port_2 from '/public/assets/img/portfolio/5/portfolio-2.jpg';
import agency_port_3 from '/public/assets/img/portfolio/5/portfolio-3.jpg';
import agency_port_4 from '/public/assets/img/portfolio/5/portfolio-4.jpg';
import agency_port_5 from '/public/assets/img/portfolio/5/portfolio-5.jpg';
import agency_port_6 from '/public/assets/img/portfolio/5/portfolio-6.jpg';

// IT-Consulting
import photography_1 from '/public/assets/img/banner/sliders/Healthcare.jpg';
import photography_2 from '/public/assets/img/banner/sliders/Education.jpg';
import photography_3 from '/public/assets/img/banner/sliders/Finance.jpg';
import photography_4 from '/public/assets/img/banner/sliders/Manufacturing.jpg';
import photography_5 from '/public/assets/img/banner/sliders/Automotive.jpg';
import photography_6 from '/public/assets/img/banner/sliders/eCommerce.jpg';

// home portfolio
import portfolio_img_1 from '/public/assets/img/portfolio/9/portfolio-1.jpg';
import portfolio_img_2 from '/public/assets/img/portfolio/9/portfolio-2.jpg';
import portfolio_img_3 from '/public/assets/img/portfolio/9/portfolio-3.jpg';
import portfolio_img_4 from '/public/assets/img/portfolio/9/portfolio-4.jpg';
import portfolio_img_5 from '/public/assets/img/portfolio/9/portfolio-5.jpg';
import portfolio_img_6 from '/public/assets/img/portfolio/9/portfolio-6.jpg';
// svg
import { FreelancerPortOne, FreelancerPortThree, FreelancerPortTwo } from '../svg';

const portfolio_data = [
  // home portfolio data
  {
    id:1,
    bg:img_1,
    tag:'Business Consulting',
    title:'12 best blogs to follow about food design',
    text:'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
    delay:'.3s',
    home:true,
  },
  {
    id:2,
    bg:img_2,
    tag:'Lost Saints',
    title:'Purpose-driven employers succeed',
    text:'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
    delay:'.5s',
    home:true,
  },
  {
    id:3,
    bg:img_3,
    tag:'UI wireframe',
    title:'The 4 most effective incentives',
    text:'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
    delay:'.7s',
    home:true,
  },

  // home lawyer cases
  {
    id:4,
    bg:case_1,
    price:'247.00',
    title:'Personal Injury Claims and Gun What You Need to Know',
    text:'If you are looking for a random city or town name to spark a location for a book, game, or a script millions.',
    delay:'.3s',
    home_lower:true,
  },
  {
    id:5,
    bg:case_2,
    price:'176.00',
    title:'Do Injured Workers Have to Be Treated the Same?',
    text:'If you are looking for a random city or town name to spark a location for a book, game, or a script millions.',
    delay:'.5s',
    home_lower:true,
  },

  // home freelancer portfolio
  {
    id:6,
    shapes:[{id:1,shape:shape_freelancer_1}],
    icon:<FreelancerPortOne/>,
    tags:['User Research','UX Design'],
    title:<>HC Payor website for <br /> Unique start-up brands.</>,
    image:[
      {id:1,img:portfolio_freelancer_1},
      {id:2,img:portfolio_freelancer_2},
    ],
    bg_color:'green',
    home_freelancer:true,
  },
  {
    id:7,
    shapes:[{id:2,shape:shape_freelancer_2},{id:3,shape:shape_freelancer_3}],
    icon:<FreelancerPortTwo/>,
    tags:['User Research','UX Design'],
    title:<>Re-design for the app <br /> Made easy.</>,
    image:[
      {id:3,img:portfolio_freelancer_3},
      {id:4,img:portfolio_freelancer_4},
      {id:5,img:portfolio_freelancer_5},
    ],
    bg_color:'purple',
    diff:true,
    home_freelancer:true,
  },
  {
    id:8,
    shapes:[{id:4,shape:shape_freelancer_4}],
    icon:<FreelancerPortThree/>,
    tags:['User Research','UX Design'],
    title:'A collaboration tool for brainstorming ideas',
    image:[
      {id:6,img:portfolio_freelancer_6},
    ],
    bg_color:'pink',
    home_freelancer:true,
  },

  // home agency portfolio
  {
    id:9,
    img:agency_port_1,
    tag:'Sports',
    title:'Stadium Sports Cards',
    delay:'.3s',
    home_agency:true,
  },
  {
    id:10,
    img:agency_port_2,
    tag:'Branding & Digital Platforms',
    title:'Aliens do 3D Automobile',
    delay:'.5s',
    home_agency:true,
  },
  {
    id:11,
    img:agency_port_3,
    tag:'Branding & Identity',
    title:'Gallery Portfolio',
    delay:'.7s',
    home_agency:true,
  },
  {
    id:12,
    img:agency_port_4,
    tag:'Custom Print',
    title:'Artboard Studio',
    delay:'.9s',
    home_agency:true,
  },
  {
    id:13,
    img:agency_port_5,
    tag:'Custom Print',
    title:'Artboard Studio',
    delay:'.9s',
    home_agency:true,
  },
  {
    id:14,
    img:agency_port_6,
    tag:'Branding & Identity',
    title:'Gallery Portfolio',
    delay:'.9s',
    home_agency:true,
  },

  // home photography
  {
    id:15,
    img:photography_1, 
    title:'Healthcare', 
    text:'Electronic health record systems (EHR)',
    text1:'Remote patient monitoring',
    text2:'Practice management software (PMS)',
    home_photographer:true,
  },
  {
    id:16,
    img:photography_2,
    title:'Education',
    text:'Learning management systems (LMS)',
    text1:'School management software',
    text2:'Assessment learning platforms', 
    home_photographer:true,
  },
  {
    id:17,
    img:photography_3, 
    title:'Finance',
    text:'Digital wallets',
    text1:'KYC solutions',
    text2:'Trading platforms',
    home_photographer:true,
  },
  {
    id:18,
    img:photography_4, 
    title:'Manufacturing',
    text:'ERP systems',
    text1:'IoT applications',
    text2:'Data processing software',
    home_photographer:true,
  },
  {
    id:19,
    img:photography_5, 
    title:'Automotive',
    text:'Fleet management systems',
    text1:'Remote vehicle control',
    text2:'Connected vehicles',
    home_photographer:true,
  },
  {
    id:20,
    img:photography_6, 
    title:'eCommerce', 
    text:'eCommerce Solutions',
    text1:'Inventory Management',
    text2:'Mobile App Development',
    home_photographer:true,
  },
  // home portfolio
  {
    id:21,
    img:portfolio_img_1,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:22,
    img:portfolio_img_2,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:23,
    img:portfolio_img_3,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:24,
    img:portfolio_img_4,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:25,
    img:portfolio_img_5,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:26,
    img:portfolio_img_6,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },  
  {
    id:27,
    img:portfolio_img_1,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:28,
    img:portfolio_img_2,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:29,
    img:portfolio_img_3,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:30,
    img:portfolio_img_4,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:31,
    img:portfolio_img_5,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:32,
    img:portfolio_img_6,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  }, 
]

export default portfolio_data;
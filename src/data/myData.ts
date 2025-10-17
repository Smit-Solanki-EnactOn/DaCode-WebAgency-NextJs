// Service Section

export const servicesData = [
  {
    id: 1,
    icon: "/images/wordpress-website.png",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    link: "#",
  },
  {
    id: 2,
    icon: "/images/wordpress-plugin.png",
    title: "WordPress Plugin",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    link: "#",
  },
  {
    id: 3,
    icon: "/images/website-redesign.png",
    title: "Website Redesign",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    link: "#",
  },
  {
    id: 4,
    icon: "/images/wordpress-site-optimization.png",
    title: "WordPress Site Optimization",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    link: "#",
  },
  {
    id: 5,
    icon: "/images/seo.png",
    title: "Search Engine Optimization",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    link: "#",
  },
  {
    id: 6,
    icon: "/images/cross-platform.png",
    title: "Cross Platform Mobile App",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    link: "#",
  },
];

// Our Work
export const tabOptions = [
  {
    id: 1,
    label: "All",
    value: "All",
  },
  {
    id: 2,
    label: "Website Optimization",
    value: "Website Optimization",
  },
  {
    id: 3,
    label: "Website Redesign",
    value: "Website Redesign",
  },
  {
    id: 4,
    label: "Search Engine Optimization",
    value: "Search Engine Optimization",
  },
];

export const ourWorkSwiperData = [
  {
    id: 1,
    image: "/images/work1.png",
    alt: "work1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    value: "Website Optimization",
  },
  {
    id: 2,
    image: "/images/work2.png",
    alt: "work2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    value: "Website Redesign",
  },
  {
    id: 3,
    image: "/images/work3.png",
    alt: "work3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    value: "Search Engine Optimization",
  },
  {
    id: 4,
    image: "/images/work1.png",
    alt: "work4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    value: "Search Engine Optimization",
  },
  {
    id: 5,
    image: "/images/work2.png",
    alt: "work5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    value: "Website Optimization",
  },
  {
    id: 6,
    image: "/images/work3.png",
    alt: "work6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum.",
    value: "Website Redesign",
  },
];

// Our Strategy
export const strategyData = [
  {
    id: 1,
    title: "Your Idea",
    description:
      "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
  },
  {
    id: 2,
    title: "Strategy meeting",
    description:
      "This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.",
  },
  {
    id: 3,
    title: "Agile and Scrum framework",
    description:
      "In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.",
  },
  {
    id: 4,
    title: "Your website goes live",
    description:
      "The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.",
  },
];

// Testimonials Section
export interface Testimonial {
  rating: number;
  text: string;
  author: string;
  position: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    text: "We tried several agencies before we found doCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    author: "Paulus Haverinen",
    position: "Owner, Ikirakenne Ltd",
    image: "/images/testimonial-user-1.png",
  },
  {
    rating: 3.5,
    text: "We tried several agencies before we found doCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    author: "Paulus Haverinen",
    position: "Owner, Ikirakenne Ltd",
    image: "/images/testimonial-user-2.png",
  },
  {
    rating: 5.0,
    text: "We tried several agencies before we found doCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    author: "Paulus Haverinen",
    position: "Owner, Ikirakenne Ltd",
    image: "/images/testimonial-user-3.png",
  },
  {
    rating: 4.0,
    text: "We tried several agencies before we found doCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    author: "Paulus Haverinen",
    position: "Owner, Ikirakenne Ltd",
    image: "/images/testimonial-user-1.png",
  },
  {
    rating: 4.9,
    text: "We tried several agencies before we found doCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
    author: "Paulus Haverinen",
    position: "Owner, Ikirakenne Ltd",
    image: "/images/testimonial-user-2.png",
  },
];

// Blog Section
export interface BlogPost {
  title: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why Your SaaS Business should use WordPress",
    description:
      "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort",
  },
  {
    title: "Building Scalable Web Applications",
    description:
      "Learn the best practices for creating web applications that can handle growth and provide excellent user experience at scale",
  },
  {
    title: "Modern Frontend Development Trends",
    description:
      "Discover the latest trends in frontend development and how they can improve your development workflow and user experience",
  },
  {
    title: "API Design Best Practices",
    description:
      "Creating robust and scalable APIs is crucial for modern applications. Learn the essential principles and patterns",
  },
  {
    title: "Security in Web Development",
    description:
      "Protect your applications and users with these essential security practices every developer should know and implement",
  },
];

// Our Team Section
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedinUrl: string;
  mail: string;
}

export const userData = [
  {
    id: 1,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-1.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 2,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-2.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 3,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-3.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 4,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-2.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 5,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-1.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 6,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-2.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 7,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-3.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 8,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-1.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 9,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-1.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 10,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-2.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 11,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-2.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
  {
    id: 12,
    name: "Kevin Jeppesen",
    position: "Web Project Manager",
    image: "/images/testimonial-user-3.png",
    linkedinUrl: "https://www.linkedin.com/",
    mail: "kevin@dacode.se",
  },
];

// Blog Card data

export interface blogInformation {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  url: string;
}

export const blogData: blogInformation[] = [
  {
    id: 1,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article1.png",
    url: "https://www.google.com",
  },
  {
    id: 2,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article2.png",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article3.png",
    url: "https://www.google.com",
  },
  {
    id: 4,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article4.png",
    url: "https://www.google.com",
  },
  {
    id: 5,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article5.png",
    url: "https://www.google.com",
  },
  {
    id: 6,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article6.png",
    url: "https://www.google.com",
  },
  {
    id: 7,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article7.png",
    url: "https://www.google.com",
  },
  {
    id: 8,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article8.png",
    url: "https://www.google.com",
  },
  {
    id: 9,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 16",
    image: "/images/article9.png",
    url: "https://www.google.com",
  },
  {
    id: 10,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article10.png",
    url: "https://www.google.com",
  },
  {
    id: 11,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article11.png",
    url: "https://www.google.com",
  },
  {
    id: 12,
    title: "Do millennials care about saving?",
    description:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    date: "July 15",
    image: "/images/article12.png",
    url: "https://www.google.com",
  },
];

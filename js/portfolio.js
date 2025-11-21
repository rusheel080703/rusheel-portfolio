/*
==================================================
PORTFOLIO DATA
==================================================
This file contains all the personal content for your portfolio.
Update the values here to change the content on your site.
*/

const portfolioData = {

  // === ABOUT SECTION ===
  about: {
    imageUrl: "assets/my_image.png",
    bio1: "I'm Rusheel, a Data Scientist and Full-Stack Developer currently pursuing my Master’s in Computer Science at the University of Southern California (USC). With hands-on experience in deep learning, machine learning, data engineering, and full-stack development, I thrive at the intersection of data and scalable software.",
    bio2: "<>", // You had an empty paragraph here, you can add more text or leave it.
    bio3: "Outside technology, I love running, trekking, traveling, playing Casio, and exploring creative ideas through content creation.",
    name: "Rusheel Vijay Sable",
    email: "rusheelsable@gmail.com",
    location: "Los Angeles, California",
    availability: "Open to Internship"
  },

  // === PROJECTS SECTION ===
  // Add as many projects as you want here.
  // The layout will alternate automatically.
  projects: [
    {
      subtitle: "Omacha Project",
      title: "OMACHA SHOP<br>E-COMMERCE",
      features: [
        "Full-stack e-commerce platform built with PHP & MySQL.",
        "Robust admin panel for product, order, and user management.",
        "Responsive design ensuring a seamless experience on all devices."
      ],
      images: [
        "assets/omacha/Home1.jpg",
        "assets/omacha/product_detail.jpg"
      ],
      category: "Web, E-commerce, Full-stack",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      description: "A comprehensive toy e-commerce platform designed for a fun shopping experience and powerful admin tools.",
      githubUrl: "https://github.com/TranHuuDat2004/Omacha_Shop",
      liveUrl: "https://tranhuudat2004.github.io/Omacha-Shop-Demo/"
    },
    {
      subtitle: "BrickShop Project",
      title: "BRICKSHOP<br>E-COMMERCE",
      features: [
        "Modern e-commerce hub developed with Node.js and Express.js.",
        "Sleek and efficient admin UI built with Tailwind CSS.",
        "Focus on modern JavaScript stack and non-relational databases."
      ],
      images: [
        "assets/brickshop/homepage.png",
        "assets/brickshop/admin_dashboard.png"
      ],
      category: "Web, E-commerce, Node.js",
      tags: ["Node.js", "Express.js", "TailwindCSS"],
      description: "A modern e-commerce hub for building block fans, developed with Node.js and a Tailwind CSS admin UI.",
      githubUrl: "https://github.com/TranHuuDat2004/BrickShop",
      liveUrl: "brickshop.html" // Can link to another HTML page or live site
    },
    {
      subtitle: "ANIME.TV Project",
      title: "ANIME.TV<br>STREAMING SITE",
      features: [
        "Personal project inspired by Crunchyroll, built with pure JavaScript.",
        "Dynamic user experience for browsing and discovering anime.",
        "Demonstrates strong front-end skills with vanilla JS, HTML, and CSS."
      ],
      images: [
        "assets/anime.tv/main-page-spy.PNG",
        "assets/anime.tv/anime-detail.PNG"
      ],
      category: "Web, Streaming, Front-end",
      tags: ["JavaScript", "HTML5", "CSS3"],
      description: "A personal project inspired by Crunchyroll, built with pure JavaScript for a dynamic user experience.",
      githubUrl: "https://github.com/TranHuuDat2004/anime.tv",
      liveUrl: "https://tranhuudat2004.github.io/anime.tv/"
    }
  ],

  // === AWARDS SECTION ===
  awards: {
    date: "April 2023",
    title: "Consolation Prize",
    competition: "'Class Website Design Competition 2023'",
    issuer: "Faculty of Information Technology, Ton Duc Thang University",
    description: [
      "Achieved prize in a university-wide competition with over 20 participating teams, as part of the \"Youth Pioneering Digital Transformation\" initiative.",
      "Developed a class website on WordPress aimed at fostering academic exchange, contributing significantly to UI/UX design and theme customization.",
      "Demonstrated strong teamwork, creativity, and the practical application of web development skills in a competitive environment."
    ],
    imageUrl: "assets/achive.jpg",
    imageCaption: "Receiving the design award at Ton Duc Thang University, 2023."
  },

  // === EXPERIENCE SECTION ===
  experience: [
    {
      title: "Bachelor of Software Engineering",
      meta: "Ton Duc Thang University | 2022 - 2026",
      description: "Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10."
    },
    {
      title: "Invigilator (Part-time)",
      meta: "Ton Duc Thang University | 2024 - Present",
      description: "Ensured the integrity of university examinations, developing strong discipline, attention to detail, and the ability to perform under pressure."
    },
    {
      title: "Personal Project Development",
      meta: "GitHub | 2022 - Present",
      description: "Continuously developing full-stack applications and interactive tools to sharpen my skills and explore new technologies."
    }
  ],

  // === BLOG SECTION ===
  // (Keeping this simple for now, you can expand this later)
  blog: {
    post1: {
      url: "post-mixamo-unity.html",
      imageUrl: "assets/placeholder-600x400.png",
      alt: "A 3D character in Unity editor",
      tags: ["Unity", "Game Dev"],
      title: "Guide: Using Mixamo Assets in Unity",
      description: "A standard workflow to correctly download and implement 3D characters and animations from Mixamo into your Unity projects."
    },
    post2: {
        url: "post-unity-githubpages.html",
        imageUrl: "assets/placeholder-600x400.png",
        alt: "Unity logo and GitHub logo",
        tags: ["Unity", "Game Dev", "GitHub"],
        title: "Hướng Dẫn: Deploy Game Unity Lên GitHub Pages",
        description: "Quy trình chi tiết để chia sẻ game Unity của bạn lên web miễn phí và cách khắc phục lỗi không tải được game phổ biến nhất."
    },
    post3: {
        url: "#", // A placeholder link
        imageUrl: "assets/placeholder-600x400.png",
        alt: "Docker container logos",
        tags: ["Docker", "DevOps"],
        title: "Getting Started with Docker for Web Devs",
        description: "Learn how containerization with Docker can streamline your development workflow, ensuring consistency across environments."
    }
  },

  // === CONTACT SECTION ===
  contact: {
    email: "rusheelsable@gmail.com",
    linkedinUser: "rusheel-sable",
    githubUser: "rusheel080703",
    formspreeUrl: "https://formspree.io/f/xpwozknb" // Replace with YOUR Formspree URL
  },
  
  // === FOOTER SECTION ===
  footer: {
      githubUrl: "https://github.com/rusheel080703",
      linkedinUrl: "https://www.linkedin.com/in/rusheel-sable/",
      email: "rusheelsable@gmail.com",
      copyrightYear: new Date().getFullYear(),
      name: "Rusheel Sable",
      lastUpdated: "November 13th 2025" // You can update this manually
  }

};
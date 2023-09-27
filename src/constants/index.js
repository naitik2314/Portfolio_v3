import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    firebase,
    azure,
    aws,
    gcp,
    c,
    git,
    figma,
    docker,
    python,
    flutter,
    adobe,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    vns,
    lw,
    wayne,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Google Cloud Platform",
      icon: gcp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Adobe creative suite",
      icon: adobe,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Business Analyst Intern",
      company_name: "VNS Switchgear PVT LTD",
      icon: vns,
      iconBg: "#383E56",
      date: "Jul 2019 - Dec 2019",
      points: [
        "Conducted comprehensive data analysis & market research to identify market trends, customer preferences & business opportunities, contributing to successful product development & launches.",
        "Led process improvements & automation initiatives, reducing operational costs by 30% & enhancing productivity across departments.Revamped company processes, driving a 20% increase in profitability & improved user experience.",
      ],
    },
    {
      title: "Python Developer Intern",
      company_name: "LW Informatics",
      icon: lw,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Dec 2020",
      points: [
        "Developed & maintained Python applications, resulting in a 20% boost in software functionality & improved user satisfaction. Collaborated on 3 major releases with a team of 5, consistently meeting deadlines & quality standards. ",
        "Implemented performance enhancements, reducing response times by 15%, & resolved over 100 bugs, ensuring software reliability &stability. Conducted code reviews, enhancing code quality & adherence to standards.",
        "Automated time consuming tasks with Python-scripts saving the team an average of 10 hours per week. Integrated third-party APIs toExpand functionality & enhance data accuracy.",
        "Assisted in codebase & API documentation, improving team collaboration & onboarding of new developers.",
      ],
    },
    {
      title: "Flutter App Developer Internr",
      company_name: "LW Informatics",
      icon: lw,
      iconBg: "#383E56",
      date: "Jan 2021 - Dec 2021",
      points: [
        "Developed & deployed cross-platform mobile applications using Flutter framework, resulting in a 30% reduction in development time compared to native app development.. Collaborated with a team to implement new features & UI elements, achieving a 20% increase in user satisfaction & positive app store reviews.",
        " Utilized Flutter’s widget library to build responsive & visually appealing user interfaces, resulting in a 15% decrease in app abandonment & improved user retention. Conducted rigorous testing & debugging for enhanced app stability & performance, leading to a 25% decrease in crash instances. Integrated backend services & APIs, including Firebase & RESTful APIs, to provide real-time data updates. ",
      ],
    },
    {
      title: "Student Assistant",
      company_name: "Wayne State University",
      icon: wayne,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Sep 2023",
      points: [
        "Assisted Director of Housing & Residential life in administrative tasks, including email responses, phone calls, & contractor coordination.Managing inventory tracking & facilitated invoice processing for seamless financial operations. ",
        "Collaborated with other department directors, providing valuable support to enhance overall organizational efficiency. ",
      ],
    },
    {
      title: "Student Assistant Computing & Information Technology",
      company_name: "Wayne State University",
      icon: wayne,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Provide comprehensive technical support to faculty & staff, including assembling & configuring computers, resolving hardware & software issues with a 95% resolution rate, & conducting routine maintenance for optimal system performance. ",
        "Successfully debug & optimize code for programming projects, contributing to improved code quality & project outcomes.",
        "Collaborate with university IT teams to enhance security measures, data backups, & technical documentation, ensuring reliable computing environment for the university community.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Naitik excelled in my Design and Analysis of Algorithms course, demonstrating exceptional problem-solving skills and a deep understanding of complex concepts. He actively contributed to class discussions, consistently producing high-quality work. I highly recommend [Your Name] for any role requiring top-tier algorithmic expertise.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
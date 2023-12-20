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
      title: "Flutter App Developer Intern",
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
        "Naitik excelled in my Algorithms course, consistently producing high-quality work. I highly recommend Naitik for roles requiring top-tier algorithmic expertise.",
      name: "Dr Abusayeed Saifullah",
      designation: "Professor",
      company: "Wayne State University",
      image: "https://people.wayne.edu/profile/gi8674/2155/abu.jpg",
    },
    {
      testimonial:
        "Naitik was an invaluable asset to our team, demonstrating exceptional organizational skills in administrative tasks. He also played a pivotal role in fostering interdepartmental collaboration, significantly improving our organizational efficiency.",
      name: "Brian Fitzgerald",
      designation: "Director of Housing",
      company: "Wayne State Uiversity",
      image: "https://media.licdn.com/dms/image/C4E03AQHowv6mP5tz1g/profile-displayphoto-shrink_200_200/0/1548592039946?e=1701302400&v=beta&t=M54dNDNuVcUAOKfmyn1P-BvecOeJK7mjS3nrpkh4H_k",
    },
    {
      testimonial:
        "Naitik made impactful contributions to our software development team at LW Informatics, enhancing app stability and reducing development time.",
      name: "Vimal Daga",
      designation: "Founder",
      company: "LW Informatics",
      image: "https://media.licdn.com/dms/image/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_800_800/0/1684676553726?e=1701302400&v=beta&t=Apns5w9QhCNq0wzIS-muJVZai81lhHxczZas3YodA_E",
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
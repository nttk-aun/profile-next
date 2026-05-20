export const EMAIL = "nonthawat.kham@gmail.com";

export const profile = {
  name: "Nonthawat Thongkham",
  role: "Full Stack Developer",
  location: "Bangkok, Thailand",
  professionalProfile:
    "Full Stack Developer with 1 year of experience. Familiar with front-end development using Angular and React, as well as back-end development using Java Spring Boot, C# and Node.js. Experienced in collaborating on team projects and providing technical support. Capable of creating API documentation, implementing fundamental security measures, and contributing to system performance improvements. Additionally, skilled in delivering clear and structured training sessions.",
  skills: [
    "Angular / React / Next.js",
    "RESTful API Development",
    "TypeScript / JavaScript",
    "C# .NET Core",
    "Java Spring Boot / Java Spring Roo",
    "Jasper Reports / BIRT Reports",
    "PostgreSQL / Oracle DB",
    "Figma / UI Design",
  ],
  languages: [
    { name: "Thai", level: "Native" },
    {
      name: "English",
      level: "Limited Working Proficiency (read & write)",
    },
  ],
  contact: {
    phone: "062-292-3432",
    phoneHref: "tel:+66622923432",
    email: EMAIL,
    github: {
      label: "github.com/nttk-aun",
      href: "https://github.com/nttk-aun",
    },
    linkedin: {
      label: "nonthawat-thongkham",
      href: "https://www.linkedin.com/in/nonthawat-thongkham-34b909350/",
    },
  },
  employer: {
    name: "Soft Square International Co., Ltd.",
    role: "Full Stack Developer",
    period: "2025 – Present",
    periodDatetime: "2025",
    summary:
      "Full Stack Developer working on enterprise-scale projects across ERP, financial, and content management domains. Responsible for front-end and back-end development, API integration, and report generation.",
    projects: [
      {
        name: "ECT ERP-HRMS — Human Resources Management System",
        period: "Apr 2025 – Present",
        periodDatetime: "2025-04",
        technologies: ["Angular", "C#", "Jasper Report"],
        duties: [
          "Developed health care benefits module and funeral welfare",
          "Created reports using Jasper Reports following functional specifications",
          "Coordinated, responded to questions, and assisted the team in resolving issues",
          "Performed UAT with stakeholders",
        ],
      },
      {
        name: "New TJE — Cash Reconcile System",
        period: "Feb 2026 – Present",
        periodDatetime: "2026-02",
        technologies: [
          "Vite.js",
          "Tailwind CSS",
          "Ant Design",
          "Java Spring Boot",
          "Apache POI",
        ],
        duties: [
          "Built the entire frontend foundation from scratch including layout, routing, route guards, dynamic menu based on user roles, translation system, and user validation via SAML",
          "Defined frontend coding standards using React and standardised API response formats",
          "Developed shell scripts to generate API clients from Java Spring Boot using OpenAPI, eliminating manual API code writing in the frontend",
          "Created various reports using Apache POI",
        ],
      },
      {
        name: "MCOT — Broadcast Content Management System",
        period: "Nov 2024 – Feb 2025",
        periodDatetime: "2024-11/2025-02",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
        duties: [
          "Designed UI/UX on Figma and implemented responsive frontend components",
          "Built content publishing workflows and media management interfaces",
          "Collaborated with backend team to integrate REST APIs end-to-end",
        ],
      },
      {
        name: "Big C — Internal Management System",
        period: "Apr 2025 - Jun 2025",
        periodDatetime: "2025-04/2025-06",
        technologies: [
          "jQuery",
          "Java Spring Roo",
          "Java 8",
          "PostgreSQL",
          "BIRT Reports",
        ],
        duties: [
          "Developed frontend UI and backend services end-to-end including background jobs & API services",
          "Designed and maintained reporting modules using BIRT Reports",
          "Built and optimised database schemas and queries on PostgreSQL",
        ],
      },
    ],
  },
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Rajamangala University of Technology Isan",
    gpa: "GPA 3.03",
    period: "2021 – 2025",
    periodDatetime: "2021/2025",
    coursework:
      "Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web & Mobile Application Development",
  },
} as const;

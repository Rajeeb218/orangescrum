import {
  ArrowRight2,
  Cloud,
  AnotherIcon,
  Bezier,
  BrifecaseTimer,
  YetAnotherIcon,
  Bluetooth,
  ArrowSquare,
} from "iconsax-react";

export const iconComponents = {
  Cloud: Cloud,
  ArrowRight2: ArrowRight2,
  AnotherIcon: AnotherIcon,
  Bezier: Bezier,
  BrifecaseTimer: BrifecaseTimer,
  YetAnotherIcon: YetAnotherIcon,
  Bluetooth: Bluetooth,
  ArrowSquare: ArrowSquare,
};

export const menuItems = [
  {
    text: "Product",
    link: "#",
    icon: "ArrowRight2",
    cardWidth: "200px",
    cardContent: [
      {
        icon: "Cloud",
        linkText: "Orangescrum Cloud",
        sublink: "/product/orangescrum-cloud",
      },
      {
        icon: "Bluetooth",
        linkText: "Self-Hosted Edition",
        sublink: "/",
      },
      {
        icon: "ArrowSquare",
        linkText: "Data-Center Edition",
        sublink: "/product/orangescrum-cloud",
      },
      {
        icon: "Bezier",
        linkText: "Open-source Edition",
        sublink: "/product/orangescrum-cloud",
      },
      {
        icon: "BrifecaseTimer",
        linkText: "Orangescrum CRM",
        sublink: "/product/orangescrum-cloud",
      },
    ],
    cardDesign: {
      display: "flex",
      gap: 4,
      alignItems: "center",
      marginBottom: "5px",
      fontSize: "10px",
    },
  },
  {
    text: "Solutions",
    link: "#",
    icon: "ArrowRight2",
    cardWidth: "500px",
    footerLinks: [
      { text: "Link 1", link: "/link1" },
      { text: "Link 2", link: "/link2" },
      { text: "Link 3", link: "/link3" },
      { text: "Link 4", link: "/link4" },
    ],
    cardContents: [
      {
        icon: "Cloud",
        linkText: "Product Management",
      },
      {
        icon: "Cloud",
        linkText: "Work Management",
      },
      {
        icon: "Cloud",
        linkText: "Project Management",
      },
      {
        icon: "Cloud",
        linkText: "Client Management",
      },
      {
        icon: "Cloud",
        linkText: "Program Management",
      },
      {
        icon: "Cloud",
        linkText: "Business Operations",
      },
      {
        icon: "Cloud",
        linkText: "Banking & Finance Industry",
      },
      {
        icon: "Cloud",
        linkText: "Non Profit Organization",
      },

      {
        icon: "Cloud",
        linkText: "Professional Services",
      },
      {
        icon: "Cloud",
        linkText: "IT Teams",
      },
      {
        icon: "Cloud",
        linkText: "Marketing Teams",
      },
      {
        icon: "Cloud",
        linkText: "Remote Teams",
      },
      {
        icon: "Cloud",
        linkText: "Creative Teams",
      },
      {
        icon: "Cloud",
        linkText: "All-in-one Project Dashboard",
      },
      {
        icon: "Cloud",
        linkText: "Pharmaceutical Industry",
      },
      {
        icon: "Cloud",
        linkText: "Government Industry",
      },
    ],
    cardDesign: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      marginBottom: "5px",
      padding: "20px",
      backgroundColor: "#f8f8f8",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    contentSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    },
    footerSection1: {
      display: "flex",
      justifyContent: "space-evenly",
      gap: 4,
      alignItems: "center",
      height: "50px",
      backgroundColor: "#e6f9f9",
      fontSize: "10px",
    },
  },
  {
    text: "Features",
    link: "#",
    icon: "ArrowRight2",
    cardWidth: "800px",
    cardContent3: [
      {
        icon: "Cloud",
        linkText: "Agile Project Management",
      },
      {
        icon: "Cloud",
        linkText: "Task Management",
      },
      {
        icon: "Cloud",
        linkText: "Kanban View",
      },
      {
        icon: "Cloud",
        linkText: "Time Tracking",
      },
      {
        icon: "Cloud",
        linkText: "Timesheet",
      },
      {
        icon: "Cloud",
        linkText: "Resource Management",
      },
      {
        icon: "Cloud",
        linkText: "Reports & Analytics",
      },
      {
        icon: "Cloud",
        linkText: "Project Calendar",
      },

      {
        icon: "Cloud",
        linkText: "Bug and Issue Tracking",
      },
      {
        icon: "Cloud",
        linkText: "Wiki Management",
      },
      {
        icon: "Cloud",
        linkText: "Workload Management",
      },
      {
        icon: "Cloud",
        linkText: "Custom Task Status",
      },
      {
        icon: "Cloud",
        linkText: "User Role Management",
      },
      {
        icon: "Cloud",
        linkText: "Project Templates",
      },
      {
        icon: "Cloud",
        linkText: "Gantt Chart",
      },
      {
        icon: "Cloud",
        linkText: "@mention",
      },
      {
        icon: "Cloud",
        linkText: "Custom Fields",
      },
      {
        icon: "Cloud",
        linkText: "Integrations",
      },
      {
        icon: "Cloud",
        linkText: "Budget and Cost",
      },
      {
        icon: "Cloud",
        linkText: "Ticket Management",
      },
    ],
    cardDesign: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      marginBottom: "5px",
      padding: "20px",
      backgroundColor: "#f8f8f8",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    contentSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    },
    footerSection2: {
      display: "flex",
      justifyContent: "space-evenly",
      gap: 4,
      alignItems: "center",
      height: "50px",
      backgroundColor: "#e6f9f9",
      fontSize: "10px",
    },
  },
  {
    text: "Resources",
    link: "#",
    icon: "ArrowRight2",
    cardWidth: "200px",
    cardContent: [
      {
        icon: "Cloud",
        linkText: "Blog",
        sublink: "/product/orangescrum-cloud",
      },
      {
        icon: "Cloud",
        linkText: "templates",
        sublink: "/product/orangescrum-cloud",
      },
      {
        icon: "Cloud",
        linkText: "videos",
        sublink: "/product/orangescrum-cloud",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "Tutorial",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "eBook",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "News Room",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "Support",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "Success Story",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "Customers",
      },
      {
        icon: "Cloud",
        sublink: "/product/orangescrum-cloud",
        linkText: "Build vs Buy",
      },
    ],
    cardDesign: {
      display: "flex",
      gap: 4,
      alignItems: "center",
      marginBottom: "5px",
    },
  },
  { text: "Self-Hosted", link: "/self-hosted" },
  { text: "Pricing", link: "/pricing" },
];

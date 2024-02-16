import {
  'basislogo',
  'coherelogo',
  'hxouselogo',
  'lokafylogo',
  'paperstacklogo',
  'stackadaptlogo',
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kirill Borisov",
  initials: "KB",
  location: "Toronto, Ontario, CA",
  locationLink: "https://www.google.com/maps/place/Toronto",
  about:
    "Programming/Database: Python, MySQL, AWS Redshift, Hadoop, Snowflake. Libraries/Tools: Pandas, Streamlit, Matplotlib, Tensorflow, Numpy, Scikit-learn. Data Visualization: Tableau, Power BI, Google Data Studio.",
  summary:
    "Data Solutions Expert with extra attention to detail. Experienced in prompt engineering, code review, audit, A/B testing, optimizing data processing, and collaborating with cross-functional teams to ensure data accuracy and consistency.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4", // Replace with your avatar URL if desired
  personalWebsiteUrl: "https://jarocki.me", // Replace with your personal website URL if desired
  contact: {
    email: "kiborisov@gmail.com",
    tel: "+16479165739",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kiborisov",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/borisovkirill2807/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kiborisov",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Cohere",
      link: "https://cohere.com",
      badges: ["Part-time"],
      title: "Data Quality Analyst",
      logo: coherelogo,
      start: "May 2023",
      end: "Present",
      description:
        "Prompt engineering, code review, audit, A/B testing, optimizing data processing, boosting accuracy by 15%. Collaborating with cross-functional teams, including ML engineering, to ensure data accuracy, completeness, and consistency, achieving a 98% accuracy rate and facilitating LLM model refinement and reliability.",
    },
    {
      company: "Basis Technologies",
      link: "https://basis.net",
      badges: ["Full-time"],
      title: "Product Operations Analyst",
      logo: basislogo,
      start: "February 2022",
      end: "November 2023",
      description:
        "Analyzed 300m+ daily ad bidding events and made data-driven decisions using statistical techniques to address fraudulent activities, tracked and resolved data cost discrepancies resulting in $650-700k in saved operational costs, and solved complex technical problems boosting customer satisfaction and resulting in 8.7% YoY revenue growth.",
    },
    {
      company: "Paperstack",
      link: "https://www.paperstack.ai",
      badges: ["Full-time"],
      title: "Data Analytics Consultant – Product",
      logo: paperstacklogo,
      start: "November 2021",
      end: "February 2022",
      description:
        "Ensured quality assurance of reports, organized KPI metrics, and implemented financial formulas. Contributed to a startup's growth, helping secure $9m in capital investment funds from an initial $150k.",
    },
    {
      company: "StackAdapt",
      link: "https://www.stackadapt.com",
      badges: ["Full-time"],
      title: "Reporting Specialist",
      logo: stackadaptlogo,
      start: "August 2021",
      end: "November 2021",
      description:
        "Worked within the Reporting & Programmatic Analytics team on providing high-level data analytical solutions to clients in North America and Europe. Worked closely with Account Managers on custom reports for clients with media spend of over $100k+.",
    },
    {
      company: "Lokafy",
      link: "https://lokafy.com",
      badges: ["Internship"],
      title: "Product Marketing Intern",
      logo: lokafylogo,
      start: "December 2018",
      end: "June 2019",
      description:
        "Monitored and evaluated web analytics to recommend proactive adjustments to strategies in Google Ads, Facebook Ads, and Bing Ads campaign management platforms. Surveyed 500+ customers to understand product satisfaction and improvement strategies.",
    },
  ],
  projects: [
    {
      title: "NBA Players Stats Explorer",
      techStack: ["Python", "Pandas", "Streamlit"],
      description: "Designed and deployed a data scraping app to easily retrieve and visualize NBA players’ stats.",
      logo: NBAPlayersStatsExplorerLogo,
      link: {
        label: "GitHub repo or live project link", // Replace with actual link
        href: "#", // Replace with actual link
      },
    },
    {
      title: "Penguin Classifier",
      techStack: ["Python", "Pandas", "Streamlit", "Numpy", "Scikit-learn"],
      description: "This web app predicts the species of penguins based on their input parameters.",
      logo: PenguinClassifierLogo,
      link: {
        label: "GitHub repo or live project link", // Replace with actual link
        href: "#", // Replace with actual link
      },
    },
  ],
  education: [
    {
      institution: "Athabasca University",
      degree: "Bachelor of Commerce, Business Technology Management",
      start: "Present",
      end: "2025",
    },
    {
      institution: "Humber College",
      degree: "Associate degree, Business",
      start: "June 2019",
      scholarship: "Academic Scholarship - $15,000",
    },
    {
      institution: "Stanford University",
      certificate: "Certificate, Machine Learning",
      received: "August 2020",
    },
    {
      institution: "Google",
      certificate: "Data Analytics Certificate",
      received: "August 2021",
    },
  ],
} as const;

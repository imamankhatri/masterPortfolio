/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mrunal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable technical systems to create direct impact on revenue and/or users.",
  og: {
    title: "Mrunal Khatri",
    type: "website",
    url: "https://imamankhatri.github.io/#/",
  },
};

//Home Page
const greeting = {
  title: "Mrunal Khatri",
  logo_name: "MrunalKhatri",
  nickname: "imamankhatri",
  subTitle:
    "A passionate Full Stack Software Developer having an experience of building end to end technical systems/products which are sustainable, scalable and impactful towards revenue and/or users.",
  resumeLink:
    "https://drive.google.com/file/d/14xL72oWiakWZGuQBqGJOIiMmfh8u9BTy/view?usp=drivesdk",
  portfolio_repository: "https://github.com/imamankhatri/imamankhatri.github.io/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/imamankhatri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mrunal-khatri-572020145/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:imamankhatri@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/AmanKhatri2003",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imamankhatri/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience of working with high scale complex products in Ad Tech.",
        "⚡ Developing internal applications for Campaign management & orchestration.",
        "⚡ Complex quantitative solutions for dynamic forecasting and time series analysis of Ad Campaigns.",
        "⚡ Setting-up reporting dashboards with underlying E2E ETL pipelines.",
        "⚡ Devised and implemented IAM using Spring Security with OAuth (using JWT) for in-house tenants from ground up.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos-spring",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "logos:hibernate",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "logos:grafana",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "logos:prometheus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms.",
        "⚡ Hosting and maintaining E2E applications on virtual machine instances along with integration of databases.",
        "⚡ Setting up ETL pipelines for offline jobs.",
        "⚡ Developing custom adapters for low latency high throughput systems.",
        "⚡ Developing custom MR jobs with falcon, oozie & spark."
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "ELK",
          fontAwesomeClassname: "simple-icons:elasticstack",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
          style: {
            color: "#326CE5",
          },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sir M. Visvesvaraya Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in CSE",
      logo_path: "sir-mvit.jpeg",
      alt_name: "Sir MVIT",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have graduated with distinction and studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Java, Spring and Hibernate."
      ],
    },
    {
      title: "Kendriya Vidyalaya No. 2, Hubli",
      subtitle: "Higher Secondary",
      logo_path: "kvs-logo.jpeg",
      alt_name: "KVS",
      duration: "2012-2014",
      descriptions: [
        "⚡ Completed my higher secondary schooling in KVS and passed with 91% having Computer Science as a core subject.",
      ],
    },
    {
      title: "Kendriya Vidyalaya No. 2, Mangalore",
      subtitle: "Secondary",
      logo_path: "kvs-logo.jpeg",
      alt_name: "KVS",
      duration: "2010-2012",
      descriptions: [
        "⚡ Completed my secondary schooling in KVS and passed with 9.8 CGPA.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
//    {
//      title: "Machine Learning",
//      subtitle: "- Andrew Ng",
//      logo_path: "stanford_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//      alt_name: "Stanford University",
//      color_code: "#8C151599",
//    },
//    {
//      title: "Deep Learning",
//      subtitle: "- Andrew Ng",
//      logo_path: "deeplearning_ai_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//      alt_name: "deeplearning.ai",
//      color_code: "#00000099",
//    },
//    {
//      title: "ML on GCP",
//      subtitle: "- GCP Training",
//      logo_path: "google_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//      alt_name: "Google",
//      color_code: "#0C9D5899",
//    },
//    {
//      title: "Data Science",
//      subtitle: "- Alex Aklson",
//      logo_path: "ibm_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//      alt_name: "IBM",
//      color_code: "#1F70C199",
//    },
//    {
//      title: "Big Data",
//      subtitle: "- Kim Akers",
//      logo_path: "microsoft_logo.png",
//      certificate_link:
//        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//      alt_name: "Microsoft",
//      color_code: "#D83B0199",
//    },
//    {
//      title: "Advanced Data Science",
//      subtitle: "- Romeo Kienzler",
//      logo_path: "ibm_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//      alt_name: "IBM",
//      color_code: "#1F70C199",
//    },
//    {
//      title: "Advanced ML on GCP",
//      subtitle: "- GCP Training",
//      logo_path: "google_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//      alt_name: "Google",
//      color_code: "#0C9D5899",
//    },
//    {
//      title: "DL on Tensorflow",
//      subtitle: "- Laurence Moroney",
//      logo_path: "deeplearning_ai_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//      alt_name: "deeplearning.ai",
//      color_code: "#00000099",
//    },
//    {
//      title: "Fullstack Development",
//      subtitle: "- Jogesh Muppala",
//      logo_path: "coursera_logo.png",
//      certificate_link:
//        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//      alt_name: "Coursera",
//      color_code: "#2A73CC",
//    },
//    {
//      title: "Kuberenetes on GCP",
//      subtitle: "- Qwiklabs",
//      logo_path: "gcp_logo.png",
//      certificate_link:
//        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//      alt_name: "GCP","⚡ Developed reporting dashboard with underlying E2E ETL pipelines.",
//      color_code: "#4285F499",
//    },
//    {
//      title: "Cryptography",
//      subtitle: "- Saurabh Mukhopadhyay",
//      logo_path: "nptel_logo.png",
//      certificate_link:
//        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//      alt_name: "NPTEL",
//      color_code: "#FFBB0099",
//    },
//    {
//      title: "Cloud Architecture",
//      subtitle: "- Qwiklabs",
//      logo_path: "gcp_logo.png",
//      certificate_link:
//        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//      alt_name: "GCP",
//      color_code: "#4285F499",
//    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with Aricent as Software Developer Intern, then interned in InMobi as Software Developer Intern for an extended period before eventually starting my thrilling full time journey as a Software Development Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
                  title: "Sr. Software Development Engineer (SDE-II)",
                  company: "InMobi",
                  company_url: "https://www.inmobi.com/",
                  logo_path: "inmobi.svg",
                  duration: "July 2021 - Present",
                  location: "Bangalore, Karnataka",
                  description:
                    ["Engineered and devised a scalable reporting platform from the accumulate all the revenue numbers flowing across the company in central data repository.",
                    "Enabled and implemented, concurrency and idempotency as an exercise to elevate coding practices and standards to make services fault tolerate.",
                    "Devised ETL pipelines from the ground up using Astronomer & Apache Airflow which consumed lesser resources.",
                    "Orchestrated pipelines to spawn infra on demand rather than the legacy always-up-time infra to optimize cost aspects in cloud world.",
                    "Parallelized the DAGs and the task executions to cut down the execution and operation times by 8 folds by implementing xcom with group tasks.",
                    "Employed spark jobs in Python and Scala on Databricks to power centralized revenue reporting across the company."],
                  color: "#ee3c26",
        },
        {
          title: "Software Development Engineer",
          company: "InMobi",
          company_url: "https://www.inmobi.com/",
          logo_path: "inmobi.svg",
          duration: "August 2019 - June 2021",
          location: "Bangalore, Karnataka",
          description:
            ["Designed and developed reporting dashboard from the ground up to accumulate all the revenue numbers flowing across the company in a central data store.",
            "Deployed a feature to forecast campaign KPIs for easier campaign management which helped the Campaign managers elevate their campaign performances.",
            "Implemented ETL pipelines from the ground up using Apache Airflow which impacted in lesser resources consumption and lesser failures compared to legacy orchestration.",
            "Orchestrated and constructed dsp.dashboard.inmobi.com from scratch which resulted in better visibility for external DSPs and subsequently larger campaigns.",
            "Devised and implemented IAM framework using Spring Security over OAuth (using JWT) from ground up for internal tenants."],
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "InMobi",
          company_url: "https://www.inmobi.com/",
          logo_path: "inmobi.svg",
          duration: "October 2018 - July 2019",
          location: "Bangalore, Karnataka",
          description:
            ["Majorly worked on InMobi Exchange and have done custom RTBD integrations of other Ad Networks with InMobi Exchange.",
            "Designed & developed ETL Pipelines for daily reporting needs using Apache Spark, Apache Falcon & Apache Oozie.",
            "Developed reporting jobs which sent consolidated reports as mails which helped the Campaign Managers to better manage and pace their Ad Campaigns.",
            "Developed features on Android & iOS Apps to simulate Ad Exchange behavior for QA purposes."],
          color: "#ee3c26",
        },
        {
          title: "Software Developer Intern",
          company: "Aricent, Capgemini",
          company_url:
            "https://www.capgemini.com/in-en/",
          logo_path: "aricent.jpeg",
          duration: "Aug 2018 - Sept 2018",
          location: "Bangalore, Karnataka",
          description:
            ["Developed features for internal tools that helped in better versioning of the artifacts in DevOps team. Aricent got acquired by Capgemini in June 2019."],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
         {
          title: "Developer Students Club Member",
          company: "DSC, Sir M. Visvesvaraya Institute of Technology",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "August 2017 - May 2019",
          location: "Bangalore, Karnataka",
          description:
            ["We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development."],
          color: "#0C9D58",
        },
        {
          title: "GLUG MVIT",
          company: "Open Source Community, Sir M. Visvesvaraya Institute of Technology",
          company_url: "https://www.glugmvit.com/",
          logo_path: "glug_mvit.png",
          duration: "August 2016 - May 2019",
          location: "Bangalore, Karnataka",
          description:
            ["A community of open source enthusiasts from Sir M. Visvesvaraya Institute of Technology, Bangalore"],
          color: "#4285F4",
        },
        {
          title: "Mozilla Campus Club Member",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "August 2016 - May 2019",
          location: "Bangalore, Karnataka",
          description:
            ["My responsibility for this program was to create opensource environment in the college. We have organised multiple hackathons on the problems collected by ordinary people. We have built opensource community of our own college."],
          color: "#000000",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "August 2017 - May 2019",
          location: "Bangalore, Karnataka",
          description:
            ["Active collaborator in college clubs website developments."],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have explored different technology stacks in some form of hobby projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpeg",
    description:
      "You can reach out to me here..",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bengaluru - 560043",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/WfmmVyBcrcBTfBeA7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7829280611",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

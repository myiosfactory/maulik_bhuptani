/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import udemySupabase from "./assets/images/udemy_supabase.jpg";
import udemyClaude from "./assets/images/udemy_claude.jpg";
import udemyFlutter from "./assets/images/udemy_flutter.jpg";
import udemyiOSMasterClass from "./assets/images/udemy_ios_masterclass.jpg";
import udemyReactNative from "./assets/images/udemy_reactnative.jpg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Maulik Bhuptani",
  title: "Hi, I'm Maulik",
  subHeader:
    "I’m a Top Rated Plus (Top 3%) Mobile App Developer with 100% Job Success Score and 78% long-term clients on Upwork.",
  subTitle: emoji(
    "A passionate Mobile App Developer With 10+ years of hands-on experience building high-quality mobile apps, I bring a wealth of expertise in creating reliable, scalable, and beautiful mobile applications. I specialize in iOS, Android, Flutter, and React Native development helping startups and businesses turn their ideas into powerful, production-ready apps."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/myiosfactory",
  upwork: "https://www.upwork.com/freelancers/maulikbhuptani?mp_source=share",
  linkedin: "https://www.linkedin.com/in/maulik-bhuptani-56552960",
  gmail: "maulikios123@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/4395489/maulik-bhuptani",
  slack: "",
  teams: "",
  discord: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY MOBILE APP DEVELOPER DELIVERING HANDS-ON EXPERTISE ACROSS MULTIPLE TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Mobile Apps / User Interfaces for your mobile applications"
    ),
    emoji(
      "⚡ From native iOS to cloud integrations with Firebase and AWS—I enjoy the full stack"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase / Supabase / AWS & SDK integrations"
    ),
    emoji(
      "⚡ I don't just write code. I craft experiences that feel native, perform smoothly, and solve real problems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Supabase",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "AI Tools",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile App Development (iOS/ Android/ React Native/ Flutter)",
      progressPercentage: "96%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Quality Assurance",
      progressPercentage: "96%"
    },
    {
      Stack: "App Maintenance and Support",
      progressPercentage: "96%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Founder",
      company: "Syncly",
      companylogo: require("./assets/images/synclyLogo.png"),
      date: "Nov 2023 – Present",
      desc: "Founded Syncly with a vision to build meaningful, high-quality mobile products, not just applications.",
      descBullets: [
        "Worked with global clients across the US, UK, and African markets to design, develop, and maintain high-quality mobile applications.",
        "Translated client requirements into clean, scalable, and maintainable Swift code."
      ]
    },
    {
      role: "Freelance iOS Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upworkLogo.jpeg"),
      date: "Mar 2022 – Present",
      desc: "Lead iOS Engineer with 10+ years of experience in mobile app development. Founder of Syncly where i focused on building innovative, AI-powered, scalable, and modular mobile solutions.",
      descBullets: [
        "I have the expertise to turn your vision into reality",
        "Passionate about delivering robust, feature-rich apps tailored to real-world needs."
      ]
    },
    {
      role: "Mobile Application Developer",
      company: "Various Organizations",
      companylogo: require("./assets/images/appleLogo.png"),
      date: "2014 – 2022",
      desc: "Built a solid foundation in software architecture, team collaboration, and performance optimization.",
      descBullets: [
        "Spent 8 years working with three different organizations as a mobile app developer.",
        "Gained hands-on experience in Objective-C, Swift, Java, and cross-platform tools, developing and maintaining a range of enterprise and consumer apps."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio Projects",
  subtitle: "High-impact products crafted for startups and growing companies",
  projects: [
    {
      image: require("./assets/images/work_projects/LuluMoney.jpeg"),
      projectName: "Lulu Money - Money Transfer App",
      projectDesc:
        "Lulu Money is a global payment app designed for fast, secure, and reliable international money transfers. It allows users to send money worldwide with real-time tracking and transparent exchange rates. Multiple payment options and easy recipient management make transfers simple and flexible.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/in/app/lulu-money-money-transfer-app/id1163514668"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/DragonAI.jpeg"),
      projectName: "DragonAI: AI Image & Video",
      projectDesc:
        "Built an all-in-one AI platform combining chat, image generation, and video creation. Delivers high-quality AI outputs with a unified experience, advanced tools, and a creator-focused ecosystem.",
      video: require("./assets/videos/DragonAI.mp4"),
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/dragonai-ai-image-video/id6737343474"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/work_projects/Notezy.jpeg"),
      projectName: "Notezy: AI Meeting Note Taker",
      projectDesc:
        "Developed a meeting assistant leveraging AI for real-time transcription and automated summarization. Features multi-language support, audio ingestion, and notebook-style organization for efficient workflows.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/notezy-ai-meeting-note-taker/id6535696830"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/FluidFocus.jpeg"),
      projectName: "Fluid Focus",
      projectDesc:
        "Built a productivity app to help users reduce screen time and stay focused. Includes focus sessions, app blocking, and usage tracking. Encourages healthier digital habits through simple rewards.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/vn/app/fluid-focus-app/id6477136445"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/GolfAI.jpg"),
      projectName: "Golf AI",
      projectDesc:
        "Developed a camera-based golf swing analysis system leveraging AI and motion analysis. Provides instant feedback, customized action plans, and performance tracking—no external sensors required.",
      video: require("./assets/videos/GolfAI.mp4"),
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/golf-ai/id1442971815"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/DamageID.jpeg"),
      projectName: "Damage iD",
      projectDesc:
        "Damage iD enables vehicle-sharing businesses to capture before-and-after photo and video proof of vehicle condition and fuel levels. It prevents disputes, protects drivers and agents and boosting trust and profitability.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/golf-ai/id1442971815"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/BedTime.jpeg"),
      projectName: "DreamTime Stories & Sounds",
      projectDesc:
        "An App for child for peaceful sleep. It helps children fall asleep faster and enjoy a night of restful sleep, DreamTime offers calming sleep stories, adventurous tales, and soothing meditation sounds.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/dreamtime-stories-sounds/id6504247314"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/Agent37.jpeg"),
      projectName: "Agent37",
      projectDesc:
        "Agent37 is an all-in-one client management app designed for real estate professionals. It simplifies buyers, sellers, teams, tasks, documents, and transactions through a fast, intuitive mobile experience."
    },
    {
      image: require("./assets/images/work_projects/Junote.jpeg"),
      projectName: "Junote Workout Tracker",
      projectDesc:
        "Junote Gym Log combines strength training and running into a single, balanced fitness experience. It offers customizable workouts, flexible plans, and routines for every fitness level. With built-in progress tracking, it helps users stay consistent and achieve their goals efficiently.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/junote-workout-tracker/id1620836213"
        }
      ]
    },
    {
      image: require("./assets/images/work_projects/Lebenskompass.jpeg"),
      projectName: "Lebenskompass",
      projectDesc:
        "Lebenskompass Quotes is a daily inspiration app offering motivational quotes, affirmations, and positive thoughts. It helps users stay mindful and focused with reminders, widgets, and personalized content. Designed to fit everyday life, it delivers the right words at the right moment to inspire clarity and positivity.",
      video: require("./assets/videos/Lebenskompass.mp4"),
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/lv/app/reminder-t%C3%A4gliche-spr%C3%BCche/id1531266738"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "iOS Development Masterclass",
      subtitle:
        "Completed iOS masterclass using SwiftUI, SwiftData, and Apple AI, with a strong focus on clean architecture.",
      image: udemyiOSMasterClass,
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-cc636d48-a983-4147-9193-688c3be5760b.jpg"
        }
      ]
    },
    {
      title: "Flutter & Dart - The Complete Guide",
      subtitle:
        "Flutter SDK & Flutter Framework for building native iOS and Android apps.",
      image: udemyFlutter,
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-76e30265-27de-49b1-a985-772f8d41cff9.jpg"
        }
      ]
    },
    {
      title: " The Complete React Native + Hooks Course",
      subtitle:
        "Hands-on experience with React Native core concepts, Hooks, navigation, and performance optimization.",
      image: udemyReactNative,
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-4690b33d-35a3-45ac-8b52-02f24b7a6221.jpg"
        }
      ]
    },
    {
      title: "Backend Development with Supabase",
      subtitle:
        "Mastering Backend Development with Supabase and Swift for Seamless iOS Integration.",
      image: udemySupabase,
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-e7815340-d303-47da-8311-b12a75fb2e84.jpg"
        }
      ]
    },
    {
      title: "Master In Claude AI – Top 1 AI Tool",
      subtitle:
        "Mastering Claude AI in Most Benchmarks for Real-World Business, Problem-Solving, and Coding",
      image: udemyClaude,
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://udemy-certificate.s3.amazonaws.com/image/UC-85a59731-a772-4985-a246-89c4b8b85010.jpg"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 🤝"),
  subtitle:
    // "𝗗𝗶𝘀𝗰𝘂𝘀𝘀 𝗮 𝗽𝗿𝗼𝗷𝗲𝗰𝘁 or just want to say hi? My Inbox is open for all. Just 𝗱𝗿𝗼𝗽 𝗺𝗲 𝗮 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 and we can go from there.",
    "Discuss a project or just want to say hi? My inbox is open for all. Just drop me a message and we can go from there.",
  //number: "+91-94295 17216",
  email_address: "maulikios123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

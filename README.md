# Maulik Bhuptani – Developer Portfolio ⚡️

A clean, beautiful, and responsive portfolio template to showcase my skills, projects, achievements, and blogs. Fully customizable and built with React.

[GitHub](https://github.com/myiosfactory)

---

Hi! I'm **Maulik Bhuptani**, a passionate Full Stack Software Developer 🚀. I build responsive web apps, explore modern frameworks, and love creating interactive portfolios.  

- GitHub: [https://github.com/myiosfactory](https://github.com/myiosfactory)  
- Email: YOUR_EMAIL@gmail.com  
- LinkedIn: [https://www.linkedin.com/in/maulik-bhuptani-56552960](https://www.linkedin.com/in/maulik-bhuptani-56552960)  

---

## Portfolio Features
- Summary and About Me  
- Skills & Tech Stack  
- Education & Work Experience  
- Open Source Projects from GitHub  
- Big Projects  
- Achievements & Certifications 🏆  
- Blogs & Talks  
- Podcast  
- Contact Me  
- Twitter Timeline  
- GitHub Profile

Live demo: [Developer Portfolio](https://developerfolio.js.org/)

---

## Getting Started

### Requirements
- Node.js >= 10.16.0  
- npm >= 6.9.0  
- git >= 2.17.1  

### Clone and Run
```bash
git clone https://github.com/myiosfactory/developerFolio.git
cd developerFolio
cp env.example .env   # Linux / Mac
# or
copy env.example .env # Windows
npm install
npm start

Configure GitHub and Blogs
GitHub

Create a personal access token (no scopes required) and add to .env:

REACT_APP_GITHUB_TOKEN="YOUR_GITHUB_TOKEN"
GITHUB_USERNAME="myiosfactory"
USE_GITHUB_DATA="true"

Medium (Optional)

Add Medium username in .env:

MEDIUM_USERNAME="YOUR_MEDIUM_USERNAME"

Customize Portfolio

Edit src/portfolio.js:

const greeting = {
  title: "Hi, I'm Maulik",
  subTitle: "A passionate Full Stack Software Developer 🚀",
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_ID/view"
};

const socialMediaLinks = {
  github: "https://github.com/myiosfactory",
  linkedin: "https://www.linkedin.com/in/maulik-bhuptani-56552960",
  gmail: "YOUR_EMAIL@gmail.com"
};

// Customize skills, experience, projects, achievements, blog, contact info, and twitterDetails here


Other customizations:

Replace resume at src/containers/greeting/resume/resume.pdf

Replace Lottie JSON animations in src/assets/lottie

Deployment

GitHub Pages: Set homepage in package.json

Netlify: Connect your repo

GitHub Actions: Automate updates
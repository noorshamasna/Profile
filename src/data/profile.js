import samplePhoto from "../assets/avatar-placeholder.svg";

// Step 1: the data. The whole page is built from this one object.
// When a real API arrives, only this file changes, not the components.
export const profile = {
  header: {
    name: "Johan Doe",
    photo: samplePhoto, // URL of the photo found in the CV, or null when the CV has none
    status: "Needs Review",
    title: "Software Engineer",
    email: "johan.doe@gmail.com",
    location: "Dubai, United Arab Emirates",
    linkedin: "linkedin.com/in/johan",
    tags: ["Full Time", "React", "Python"],
  },
  stats: [
    { label: "Total Experience", value: "5 yrs 3 mos", note: "Based on non-overlapping roles" },
    { label: "Education", value: "B.Sc.", note: "Computer Science · 2021" },
    { label: "Skills", value: "8", note: "Normalized from 3 documents" },
    { label: "Sources", value: "3 documents", note: "PDF, DOCX & LinkedIn export" },
  ],
  summary:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  skills: [
    { name: "TypeScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "PostgreSQL" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Kubernetes", needsReview: true },
  ],
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "ABC Technologies",
      period: "January 2022 – March 2024",
      location: "Remote",
      description: "Built and maintained internal analytics services and customer-facing dashboards.",
      skills: ["Python", "React", "SQL"],
      status: { label: "Resolved", variant: "success" },
      source: "LinkedIn",
    },
    {
      id: 2,
      role: "Junior Developer",
      company: "Nova Labs",
      period: "June 2020 – December 2021",
      description: "Developed REST endpoints and automated test suites for a logistics product.",
      skills: ["JavaScript", "Node.js"],
      status: { label: "Needs review", variant: "warning" },
      source: "Resume.pdf",
    },
  ],
  education: [{ id: 1, title: "B.Sc. in Computer Science", meta: "B.Sc. · Computer Science · 2017 – 2021" }],
  projects: [{ id: 1, title: "B.Sc. in Computer Science", meta: "B.Sc. · Computer Science · 2017 – 2021" }],
  completeness: 80,
  quality: [
    { label: "Critical", count: 1, tone: "danger" },
    { label: "Review", count: 1, tone: "warning" },
    { label: "Missing", count: 1, tone: "info" },
  ],
  sources: [
    { name: "Resume.pdf", status: "Parsed", variant: "success" },
    { name: "LinkedIn", status: "Syncing", variant: "info" },
  ],
  activity: [
    { id: 1, text: "End data resolved from LinkedIn", time: "Today, 10:41" },
    { id: 2, text: "Resume.pdf parsed", time: "Yesterday" },
    { id: 3, text: "Resume.pdf parsed", time: "Yesterday" },
  ],
};

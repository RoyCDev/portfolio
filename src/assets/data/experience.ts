type Job = {
  title: string
  company: string,
  logo: string,
  start: string,
  end: string,
  location: string,
  description?: string,
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    title: "Frontend Developer Intern",
    company: "California Seismic",
    logo: "logos/seismic.jpg",
    start: "Jun",
    end: "Aug 2025",
    location: "Bekerley, CA",
    description: "California Seismic is an open source project that provides free resources to help civil engineers prepare for the California Seismic Exam. As an intern, I was tasked to redesign two of the existing pages and then implement using React.js and Tailwind CSS. Feel free to check my contribution on github.",
    responsibilities: [
      "Gained hands-on experience with AWS through deployment of my personal portfolio website.",
      "Created high-fidelity Figma prototypes to redesign the UI of existing features.",
      "Conducted user interview to identify new functional requirements and validate design concepts."
    ]
  },
  {
    title: "Computer Science Grader",
    company: "San Jose State University",
    logo: "logos/sjsu.jpg",
    start: "Aug 2023",
    end: "May 2025",
    location: "San Jose, CA",
    description: "I worked as a student grader while attending San Jose State University. In 4 semesters, I have graded a total of 7 classes across the CS department, including 46A Intro to Programming, 49J Programming in Java, and 154 Formal Language & Computability.",
    responsibilities: [
      "Graded coding assignments & provided written feedback to 80+ students weekly",
      "Reported common mistakes to professors to improve instructional clarity",
    ]
  },
  {
    title: "Math Tutor",
    company: "MyTutor Learning",
    logo: "logos/myTutor.jpg",
    start: "Jan",
    end: "Jun 2023",
    location: "Remote, US",
    responsibilities: [
      "Hosted hour-long 1:1 sessions with high school students to improve their understanding of Algebra and Trigonometry",
      "Designed lesson plans tailored to each student's needs and learning style",
      "Self-assessed after each meeting to enhance quality of future sessions and students' experiences"
    ]
  }
]

export default jobs;
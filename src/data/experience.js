import sjsu from "../assets/companyLogos/sjsu.jpg"
import myTutor from "../assets/companyLogos/myTutor.jpg"

const jobs = [
    {
        title: "CS Grader",
        company: "San Jose State University",
        companyLogo: sjsu,
        start: "Aug 2023",
        end: "May 2025",
        location: "Remote",
        responsibilities: [
            "Graded coding assignments & provided written feedback to 80+ students weekly",
            "Reported common mistakes to professors to improve instructional clarity",
            "Courses: CS46A Introduction to Programming, CS154 Formal Languages and Computability, CS49J Programming in Java"
        ]
    },
    {
        title: "Math Tutor",
        company: "MyTutor Learning",
        companyLogo: myTutor,
        start: "Jan 2023",
        end: "Jun 2023",
        location: "Remote",
        responsibilities: [
            "Hosted hour-long 1:1 sessions with high school students to improve their understanding of Algebra and Trigonometry",
            "Designed lesson plans tailored to each student's needs and learning style",
            "Self-assessed after each meeting to enhance quality of future sessions and students' experiences"
        ]
    }
]

export default jobs;
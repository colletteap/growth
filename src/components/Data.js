import BlogLanding1 from "../assets/bloglanding1.png";
import BlogLanding2 from "../assets/bloglanding2.png";
import BlogLanding3 from "../assets/bloglanding3.png";
import BlogLanding4 from "../assets/BlogLanding4.png";
import BlogLanding5 from "../assets/BlogLanding5.png";

const skillData = [
  { skill: "Technology", linkTo: "/SkillShell/Technology" },
  { skill: "Classroom Management", linkTo: "/SkillShell/Classroom-Management" },
  { skill: "Life Work Balance", linkTo: "/SkillShell/Life-Work-Balance" },
  { skill: "Boundary Setting", linkTo: "/SkillShell/Boundary-Setting" },
  { skill: "Time Management", linkTo: "/SkillShell/Time-Management" },
  { skill: "Organization", linkTo: "/SkillShell/Organization" },
  { skill: "Soft Skills", linkTo: "/SkillShell/Soft-Skills" },
  { skill: "Behaviour Management", linkTo: "/SkillShell/Behaviour-Management" },
  { skill: "Powerschool", linkTo: "/SkillShell/Powerschool" },
  { skill: "Critical Thinking", linkTo: "/SkillShell/Critical-Thinking" },
  { skill: "Leadership", linkTo: "/SkillShell/Leadership" },
  { skill: "More +", linkTo: "/SkillShell" },
];

const adviceData = [
  {
    type: "Question:",
    question: "How do I manage my workload?",
    comment: "Setting boundaries really helped me.",
  },
  {
    type: "Advice:",
    question: "Pro-tip: Turn your work notifications off after work",
    comment: "True! I keep an alarm on my phone to remind me.",
  },
  {
    type: "Question:",
    question: "Google Classroom confuses me. Help!",
    comment: "NewEd Tech on YouTube has been my game changer!",
  },
];

const blogData = [
  {
    title: "Google Classroom Tips",
    content:
      "NewEd Tech was a YouTube channel geared toward helping teachers learn tech is simple, quick & manageable bites. They then expanded into a website where, with a free plan, you can learn bite-sized, useful teacher skills.",
    linkTo: "/Blog",
    image: BlogLanding1,
  },
  {
    title: "Brene Brown's Leadership Tools",
    content:
      "Brene Brown has a Ph.D. in the social work field, has a very popular Ted talk, and has a Netflix special based around personal development so that you can bring your best self into every situation.",
    linkTo: "/Blog",
    image: BlogLanding2,
  },
  {
    title: "The Burned In Teacher",
    content:
      "The Burned In Teacher website is a collection of resources from a quiz, blogs, free webinars, community and podcasts to help teachers overcome their feelings of burnout.",
    linkTo: "/Blog",
    image: BlogLanding4,
  },
];

const skillShellData = [
  { skill: "Technology" },
  {
    skill: "Classroom Management",
  },
  {
    skill: "Life Work Balance",
  },
  {
    skill: "Home Economics",
  },
  {
    skill: "Boundary Setting",
  },
  {
    skill: "Time Management",
  },
  {
    skill: "Physical Education",
  },
  {
    skill: "Conflict Management",
  },
  {
    skill: "Behaviour Management",
  },
  {
    skill: "Resourcefulness",
  },
  {
    skill: "Critical Thinking",
  },
  { skill: "Leadership" },
  { skill: "Creativity" },
  { skill: "Art" },
  { skill: "Organization" },
  { skill: "Relationships" },
  { skill: "Soft Skills" },
];

const askAdviceCardData = [
  {
    type: "Question:",
    cardId: "1",
    question:
      "I am a substitute, how can I gain trust with a new group of students almost daily?",
  },
  {
    type: "Question:",
    cardId: "2",
    question: "How can I make extra money with teaching skills?",
  },
  {
    type: "Question:",
    cardId: "3",
    question: "What is your favorite way to relax on Friday evening?",
  },
  {
    type: "Question:",
    cardId: "4",
    question: "How do you keep everything organized?",
  },
  {
    type: "Question:",
    cardId: "5",
    question: "How many years did you substitute before becoming permanent?",
  },
  {
    type: "Question:",
    cardId: "6",
    question:
      "Who can I contact if I have an issue with my current administration?",
  },
];

const skillInfo = [
  {
    skill: "Technology",
    details: "Use YouTube tutorials, search with keywords",
  },
  {
    skill: "Technology",
    details:
      "Use a software that automates your emails (beginning of every week/end of every week)",
  },
  {
    skill: "Technology",
    details:
      "Make email lists of all parents emails, so you don't need to type them all out individually",
  },

  {
    skill: "Time Management",
    details:
      "Being able to prioritize tasks based on their importance and deadline helps teachers focus on what needs to be done first and avoid feeling overwhelmed by a long to-do list.",
  },
  {
    skill: "Time Management",
    details:
      "Staying organized with lesson plans, grading, and other classroom tasks helps teachers manage their time more efficiently and reduces the risk of forgetting important deadlines or responsibilities.",
  },
  {
    skill: "Time Management",
    details:
      "Allocating specific blocks of time for different tasks, such as lesson planning, grading, and administrative work, helps teachers stay focused and productive throughout the day.",
  },

  {
    skill: "Resourcefulness",
    details:
      "Using positive reinforcement, such as praise, rewards, and encouragement, to reinforce desired behaviors helps motivate students to continue behaving appropriately.",
  },
  {
    skill: "Resourcefulness",
    details:
      "Being consistent in enforcing rules and consequences helps establish a predictable and fair environment for students, which is key to effective behavior management.",
  },
  {
    skill: "Resourcefulness",
    details:
      "Setting clear expectations for behavior and communicating them effectively to students helps prevent misunderstandings and reduces the likelihood of disruptive behavior.",
  },

  {
    skill: "Physical Education",
    details:
      "Teaching students fundamental movement skills, such as running, jumping, throwing, and catching, helps build the foundation for more complex physical activities and sports.",
  },
  {
    skill: "Physical Education",
    details:
      " Engaging students in activities that require teamwork and cooperation helps develop their social skills and teaches them how to work effectively with others.",
  },
  {
    skill: "Physical Education",
    details:
      "Educating students about the importance of physical activity, nutrition, and overall health and fitness helps them make informed decisions about their health and well-being.",
  },
  {
    skill: "Behaviour Management",
    details:
      "Using positive reinforcement, such as praise, rewards, and encouragement, to reinforce desired behaviors helps motivate students to continue behaving appropriately.",
  },
  {
    skill: "Behaviour Management",
    details:
      "Being consistent in enforcing rules and consequences helps establish a predictable and fair environment for students, which is key to effective behavior management.",
  },
  {
    skill: "Behaviour Management",
    details:
      "Setting clear expectations for behavior and communicating them effectively to students helps prevent misunderstandings and reduces the likelihood of disruptive behavior.",
  },

  {
    skill: "Life Work Balance",
    details:
      "Effectively managing time is crucial for teachers to balance their workload with personal time. This includes setting priorities, creating schedules, and learning to delegate tasks when possible.",
  },
  {
    skill: "Life Work Balance",
    details:
      "Establishing clear boundaries between work and personal life helps teachers avoid burnout. This can include setting limits on work hours, not checking work emails during personal time, and prioritizing self-care activities.",
  },
  {
    skill: "Life Work Balance",
    details:
      "Teaching can be a stressful profession, so having effective stress management strategies is essential. This can include exercise, mindfulness practices, hobbies, or seeking support from colleagues or mental health professionals.",
  },

  {
    skill: "Leadership",
    details:
      "Effective communication skills are crucial for leaders to convey their vision, expectations, and feedback to their team or students. This includes both speaking clearly and listening actively.",
  },
  {
    skill: "Leadership",
    details:
      "Strong leaders are able to make informed and timely decisions, weighing the pros and cons and considering the impact on others. They are also able to take responsibility for their decisions.",
  },
  {
    skill: "Leadership",
    details:
      "Being empathetic allows leaders to understand and relate to the feelings and perspectives of others, which helps build trust and rapport. It also enables leaders to make decisions that consider the well-being of those they lead.",
  },

  {
    skill: "Home Economics",
    details:
      "Teaching students basic cooking skills, such as meal planning, food preparation, and cooking techniques, is essential for promoting healthy eating habits and independence in the kitchen.",
  },
  {
    skill: "Home Economics",
    details:
      "Educating students about budgeting, saving, and making informed financial decisions helps them develop important life skills for managing their finances effectively. Tip: check out the app Kiddie Kredit.",
  },
  {
    skill: "Home Economics",
    details:
      "Teaching students basic sewing skills, such as hemming, sewing on buttons, and repairing clothing, as well as clothing care techniques, helps promote sustainability and self-sufficiency in managing their wardrobe.",
  },

  {
    skill: "Critical Thinking",
    details:
      "Using positive reinforcement, such as praise, rewards, and encouragement, to reinforce desired behaviors helps motivate students to continue behaving appropriately.",
  },
  {
    skill: "Critical Thinking",
    details:
      "Being consistent in enforcing rules and consequences helps establish a predictable and fair environment for students, which is key to effective behavior management.",
  },
  {
    skill: "Critical Thinking",
    details:
      "Setting clear expectations for behavior and communicating them effectively to students helps prevent misunderstandings and reduces the likelihood of disruptive behavior.",
  },

  {
    skill: "Creativity",
    details:
      "Creativity often involves finding innovative solutions to challenges or problems. Teachers who encourage students to think creatively help them develop problem-solving skills that can be applied in various contexts.",
  },
  {
    skill: "Creativity",
    details:
      "Imagination is the ability to envision new ideas, concepts, or possibilities. Teachers who encourage students to use their imagination help them explore new ways of thinking and expressing themselves.",
  },
  {
    skill: "Creativity",
    details:
      "Creativity often requires the ability to adapt and change course when needed. Teachers who foster a flexible mindset in students help them approach problems and tasks with an open mind, leading to more creative outcomes.",
  },

  {
    skill: "Conflict Management",
    details:
      " Actively listening to the concerns and perspectives of all parties involved in a conflict helps teachers understand the root cause of the conflict and find a resolution that satisfies everyone.",
  },
  {
    skill: "Conflict Management",
    details:
      "Showing empathy towards the emotions and experiences of those involved in a conflict helps create a supportive and understanding environment, which can lead to more effective conflict resolution.",
  },
  {
    skill: "Conflict Management",
    details:
      "Teaching students problem-solving skills, such as brainstorming solutions, evaluating options, and making compromises, helps them resolve conflicts in a constructive and positive manner.",
  },

  {
    skill: "Classroom Management",
    details:
      "Being able to clearly convey instructions and expectations but also being able to listen actively to students' concerns and feedback.",
  },
  {
    skill: "Classroom Management",
    details:
      " Consistency in enforcing rules and consequences helps create a predictable and stable environment for students, which is crucial for effective classroom management.",
  },
  {
    skill: "Classroom Management",
    details:
      "Being organized helps teachers plan and execute lessons more efficiently, which can reduce disruptions and keep students engaged.",
  },

  {
    skill: "Boundary Setting",
    details:
      "Setting clear and consistent boundaries helps establish expectations and consequences for students' behavior. This clarity reduces confusion and allows students to understand what is expected of them.",
  },
  {
    skill: "Boundary Setting",
    details:
      "While consistency is important, teachers also need to be flexible in their approach to boundary setting. Being able to adapt boundaries to fit the situation and individual needs of students is key to effective classroom management.",
  },
  {
    skill: "Boundary Setting",
    details:
      "Setting boundaries with empathy and understanding helps build positive relationships with students. Teachers who are empathetic and understanding of students' backgrounds and circumstances can set boundaries that are fair and supportive.",
  },
  {
    skill: "Art",
    details:
      "Provide opportunities for students to explore and express their own ideas. Encouraging creativity can lead to unique and meaningful artworks.",
  },
  {
    skill: "Art",
    details:
      "Offer feedback that is specific, positive, and actionable. This can help students improve their skills and confidence in creating art.",
  },
  {
    skill: "Art",
    details:
      "Connect art lessons to historical and cultural contexts to help students understand the significance of artworks and broaden their perspectives.",
  },
  {
    skill: "Organization",
    details:
      "Keep track of important dates, deadlines, and events using a planner or digital calendar. ",
  },
  {
    skill: "Organization",
    details:
      "Develop a system for organizing paperwork, such as student assignments, assessments, and administrative documents.",
  },
  {
    skill: "Organization",
    details:
      "Establishing routines and procedures can help create a structured and organized classroom environment.",
  },
  {
    skill: "Relationships",
    details:
      "Take the time to get to know your students as individuals. Show genuine interest in their lives, hobbies, and interests outside of school. ",
  },
  {
    skill: "Relationships",
    details:
      "Create a welcoming and supportive atmosphere in your classroom. Be approachable and available to listen to your students' concerns, questions, and ideas. ",
  },
  {
    skill: "Relationships",
    details:
      "Establish clear and open lines of communication with your students. Be clear and consistent in your expectations, providing constructive feedback, and addressing any issues or concerns in a timely and respectful manner. ",
  },
  {
    skill: "Soft Skills",
    details:
      "Use a journal. Reflect on your teaching practice and experiences to identify areas where you can improve your soft skills.",
  },
  {
    skill: "Soft Skills",
    details:
      "Coursera, Udemy, EdX. Take advantage of professional development opportunities, such as workshops, courses, and conferences, to improve your soft skills.",
  },
  {
    skill: "Soft Skills",
    details:
      "Ask for feedback from colleagues, mentors, and students to gain insights into your soft skills.",
  },
];

const blogPageData = [
  {
    title: "Google Classroom Tips",
    content:
      "NewEd Tech was a YouTube channel geared toward helping teachers learn tech is simple, quick & manageable bites. They then expanded into a website where, with a free plan, you can learn bite sized, useful teacher skills.",
    linkTo: "https://newedtechclassroom.com/",
    image: BlogLanding1,
  },
  {
    title: "Brene Brown's Leadership Tools",
    content:
      "Brene Brown has a Ph. D in the social work field, has a very popular Ted talk and has a Netflix special based around personal development so that you can bring your best self into every situation.",
    linkTo: "https://brenebrown.com/hubs/dare-to-lead/",
    image: BlogLanding2,
  },
  {
    title: "The Happy Teacher Planner",
    content:
      "With this planner, you can use a personalized calendar to keep track of special events and your to do list; focus on your personal growth through using a reflective journal and core values list; has a substitute plan and has resources for the tough times. ",
    linkTo: "https://colletteap.github.io/gratitude-planner/",
    image: BlogLanding3,
  },
  {
    title: "The Burned In Teacher",
    content:
      "The Burned In Teacher website is a collection of resources from a quiz, blogs, free webinars, community and podcasts to help teachers overcome their feelings of burnout.",
    linkTo: "https://www.burnedinteacher.com/",
    image: BlogLanding4,
  },
  {
    title: "PowerSchool Training",
    content:
      "META PowerSchool Team has created a playlist of trainings that can help you understand how to use PowerSchool best.",
    linkTo:
      "https://www.youtube.com/playlist?list=PLc5YC3mQTEF7itz_FHGAbx3rt9pPkAWh_",
    image: BlogLanding5,
  },
];

const urls = [
  "https://www.burnedinteacher.com/",
  "https://teacherwellnesscenter.com/",
  "https://brenebrown.com/hubs/dare-to-lead/",
  "https://newedtechclassroom.com/",
  "https://www.teachstarter.com/resource-availability/free/",
  "https://www.refseek.com/directory/teacher_resources.html",
  "https://www.pbslearningmedia.org/",
  "https://www.carsondellosa.com/free-resources/",
  "https://sharemylesson.com/",
  "https://www.youtube.com/@LearnBright",
  "https://www.youtube.com/@SciShowKids",
  "https://www.youtube.com/@crashcoursekids",
  "https://artforkidshub.com/",
];

export {
  skillData,
  adviceData,
  blogData,
  skillShellData,
  askAdviceCardData,
  skillInfo,
  blogPageData,
  urls,
};

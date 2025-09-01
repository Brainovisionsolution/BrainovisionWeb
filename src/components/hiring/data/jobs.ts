import { Job } from "@/components/hiring/types/Job";

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-Time',
    experience: '3-5 years',
    salary: '₹15-25 LPA',
    description: 'We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for building user-facing features and ensuring excellent user experience across all our products.',
    responsibilities: [
      'Develop responsive web applications using React.js and TypeScript',
      'Collaborate with designers to implement pixel-perfect UI components',
      'Optimize applications for maximum speed and scalability',
      'Write clean, maintainable code following best practices',
      'Participate in code reviews and mentor junior developers',
      'Work closely with backend developers to integrate APIs'
    ],
    skills: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Git', 'REST APIs']
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-Time',
    experience: '2-4 years',
    salary: '₹12-18 LPA',
    description: 'Join our design team to create intuitive and beautiful user experiences. You will be responsible for the entire design process from research to final implementation.',
    responsibilities: [
      'Conduct user research and create user personas',
      'Design wireframes, prototypes, and high-fidelity mockups',
      'Create and maintain design systems and style guides',
      'Collaborate with developers to ensure design implementation',
      'Conduct usability testing and iterate on designs',
      'Present design concepts to stakeholders'
    ],
    skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
  },
  {
    id: '3',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Hyderabad',
    type: 'Full-Time',
    experience: '2-6 years',
    salary: '₹18-30 LPA',
    description: 'We need a talented Backend Developer to design and implement server-side logic, databases, and APIs that power our applications.',
    responsibilities: [
      'Design and develop scalable backend services and APIs',
      'Work with databases and optimize query performance',
      'Implement security best practices and authentication systems',
      'Deploy and maintain applications on cloud platforms',
      'Debug and resolve backend issues',
      'Collaborate with frontend developers on API integration'
    ],
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'REST APIs', 'GraphQL']
  },
  {
    id: '4',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Mumbai',
    type: 'Full-Time',
    experience: '1-3 years',
    salary: '₹8-15 LPA',
    description: 'Looking for a creative Digital Marketing Specialist to drive our online marketing efforts and help grow our brand presence.',
    responsibilities: [
      'Develop and execute digital marketing campaigns',
      'Manage social media accounts and content creation',
      'Analyze marketing metrics and prepare reports',
      'Optimize SEO and SEM strategies',
      'Create engaging content for various platforms',
      'Collaborate with design team on marketing materials'
    ],
    skills: ['Google Ads', 'Facebook Ads', 'SEO', 'Content Marketing', 'Analytics', 'Social Media Marketing']
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    experience: '3-7 years',
    salary: '₹20-35 LPA',
    description: 'Join our DevOps team to help streamline our development and deployment processes while ensuring high availability and security.',
    responsibilities: [
      'Design and maintain CI/CD pipelines',
      'Manage cloud infrastructure and deployment automation',
      'Monitor system performance and implement improvements',
      'Ensure security compliance and implement best practices',
      'Troubleshoot production issues and incidents',
      'Collaborate with development teams on deployment strategies'
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Linux', 'Monitoring Tools', 'CI/CD']
  },
  {
    id: '6',
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Bangalore',
    type: 'Full-Time',
    experience: '0-2 years',
    salary: '₹6-12 LPA',
    description: 'Looking for an enthusiastic Sales Development Representative to help generate leads and drive revenue growth.',
    responsibilities: [
      'Generate and qualify leads through various channels',
      'Conduct outbound prospecting via calls, emails, and social media',
      'Schedule meetings for senior sales team members',
      'Maintain accurate records in CRM system',
      'Research prospects and personalize outreach',
      'Meet and exceed monthly lead generation targets'
    ],
    skills: ['CRM Software', 'Lead Generation', 'Cold Calling', 'Email Marketing', 'LinkedIn Sales Navigator']
  },
  {
    id: '7',
    title: 'Frontend Developer Intern',
    department: 'Engineering',
    location: 'Hyderabad',
    type: 'Internship',
    experience: 'Entry Level',
    salary: '₹25,000-40,000/month',
    description: 'Great opportunity for students or recent graduates to gain hands-on experience in frontend development.',
    responsibilities: [
      'Assist in developing user interface components',
      'Learn and apply modern frontend technologies',
      'Participate in team meetings and code reviews',
      'Write clean, documented code',
      'Support senior developers with various tasks',
      'Contribute to internal projects and improvements'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git', 'Responsive Design']
  },
  {
    id: '8',
    title: 'HR Business Partner',
    department: 'HR',
    location: 'Mumbai',
    type: 'Full-Time',
    experience: '4-8 years',
    salary: '₹15-25 LPA',
    description: 'We need an experienced HR Business Partner to support our growing team and drive HR initiatives across the organization.',
    responsibilities: [
      'Partner with leadership on HR strategy and planning',
      'Lead recruitment and talent acquisition efforts',
      'Develop and implement employee engagement programs',
      'Handle employee relations and conflict resolution',
      'Manage performance review processes',
      'Ensure compliance with labor laws and policies'
    ],
    skills: ['Talent Acquisition', 'Employee Relations', 'Performance Management', 'HR Analytics', 'Labor Law']
  }
];
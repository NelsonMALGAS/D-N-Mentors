export interface Item {
  title: string;
  price: string;
  description: string;
}

export interface Category {
  category: string;
  items: Item[];
}

export const modules: Category[] = [
  {
    category: 'Services',
    items: [
      { title: 'KCQs', price: 'First Year: 200, Second Year: 250, Third Year: 350', description: 'Project Resource and Procurement Management' },
      { title: 'Exams', price: 'First Year: 200, Second Year: 250, Third Year: 350', description: 'Business Mathematics' },
      { title: 'Assignments', price: 'First Year: 200, Second Year: 250, Third Year: 350', description: 'Business Finance' },
      { title: 'Projects', price: 'First Year: 200, Second Year: 250, Third Year: 350', description: 'Financial Accounting' },
      { title: 'Private Classes (per hour)', price: 'Rates upon request', description: 'Financial Reporting and Analysis' },
      { title: 'Homework', price: 'Rates upon request', description: 'Economics 1A' }
    ]
  },
  {
    category: 'Courses',
    items: [
      { title: 'Economics 2B', price: 'Rates upon request', description: 'Microeconomics' },
      { title: 'Macroeconomics', price: 'Rates upon request', description: 'Public Sector Economics' },
      { title: 'End User Computing', price: 'Rates upon request', description: 'Business Communication' },
      { title: 'Public Administration 1A', price: 'Rates upon request', description: 'Public Administration 1B' },
      { title: 'Public Administration 2A', price: 'Rates upon request', description: 'Public Administration 2B' },
      { title: 'Local Government 1A', price: 'Rates upon request', description: 'Local Government 1B' },
      { title: 'Ethics in Public Sector', price: 'Rates upon request', description: 'Contemporary South African Politics' },
      { title: 'Administrative Law', price: 'Rates upon request', description: 'Evolution of Public Administration' },
      { title: 'Global Perspectives to Local Economic Development', price: 'Rates upon request', description: 'Improving Public Administration' },
      { title: 'Policy and Public Service Delivery', price: 'Rates upon request', description: 'Public Sector Budgeting' },
      { title: 'Public Sector Reform', price: 'Rates upon request', description: 'Research in the Public Sector' },
      { title: 'Sustainable Government', price: 'Rates upon request', description: 'Ethical Business Management' },
      { title: 'Information Management', price: 'Rates upon request', description: 'Project Management' },
      { title: 'Statistical Techniques in Business', price: 'Rates upon request', description: 'Advanced Management Principles' },
      { title: 'Business Finance', price: 'Rates upon request', description: 'Understanding Marketing Approaches' },
      { title: 'Marketing Management', price: 'Rates upon request', description: 'Project Scope and Scheduling' },
      { title: 'Advance Project Management', price: 'Rates upon request', description: 'Managing Project Risk' }
    ]
  },
  {
    category: 'Software Engineering Courses',
    items: [
      { title: 'HTML', price: 'Rates upon request', description: 'Introduction to HTML' },
      { title: 'CSS', price: 'Rates upon request', description: 'Introduction to CSS' },
      { title: 'JavaScript', price: 'Rates upon request', description: 'Introduction to JavaScript' },
      { title: 'TypeScript', price: 'Rates upon request', description: 'Introduction to TypeScript' },
      { title: 'React.js', price: 'Rates upon request', description: 'Introduction to React.js' },
      { title: 'Next.js', price: 'Rates upon request', description: 'Introduction to Next.js' },
      { title: 'Tailwind CSS', price: 'Rates upon request', description: 'Introduction to Tailwind CSS' },
      { title: 'Bootstrap', price: 'Rates upon request', description: 'Introduction to Bootstrap' },
      { title: 'Material UI', price: 'Rates upon request', description: 'Introduction to Material UI' },
      { title: 'Next UI', price: 'Rates upon request', description: 'Introduction to Next UI' },
      { title: 'Firebase', price: 'Rates upon request', description: 'Introduction to Firebase' },
      { title: 'MongoDB', price: 'Rates upon request', description: 'Introduction to MongoDB' }
    ]
  }
];

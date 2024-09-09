const PRICE = "R500"

export const PRICES = {
  HTML: 'R500',
  CSS: 'R500',
  JavaScript: 'R1200',
  TypeScript: 'R1200',
  'React.js': 'R1500',
  'Next.js': 'R1500',
  'Tailwind CSS': 'R700',
  Bootstrap: 'R700',
  'Material UI': 'R700',
  'Next UI': 'R700',
  Firebase: 'R1500',
  MongoDB: 'R1500',
  Supabase : "R1500"
};


export interface Item {
  title: string;
  price: string;
  description?: string;
}

export interface Category {
  category: string;
  items: Item[];
}

export const modules: Category[] = [
  {
    category: 'Services',
    items: [
      { title: 'KCQs', price: PRICE },
      { title: 'Exams', price: PRICE },
      { title: 'Assignments', price: PRICE },
      { title: 'Projects', price: PRICE},
      { title: 'Private Classes (per hour)', price: PRICE },
      { title: 'Homework', price: PRICE }
    ]
  },
  {
    category: 'Modules',
     items : [
      { title: 'Economics 2B', price: PRICE, description: 'Advanced concepts in microeconomics, focusing on market structures and consumer behavior.' },
      { title: 'Macroeconomics', price: PRICE, description: 'Study of national and global economic trends, including inflation, unemployment, and fiscal policy.' },
      { title: 'End User Computing', price: PRICE, description: 'Introduction to computing skills and business communication tools for effective information management.' },
      { title: 'Public Administration 1A', price: PRICE, description: 'Foundational concepts in public administration, including organizational structures and public policy.' },
      { title: 'Public Administration 2A', price: PRICE, description: 'In-depth study of public administration theories and practices, focusing on government operations and reforms.' },
      { title: 'Local Government 1A', price: PRICE, description: 'Overview of local government systems, including their roles, functions, and challenges.' },
      { title: 'Ethics in Public Sector', price: PRICE, description: 'Exploration of ethical issues and practices in public sector management and governance.' },
      { title: 'Administrative Law', price: PRICE, description: 'Legal principles governing administrative actions and decisions within public administration.' },
      { title: 'Global Perspectives to Local Economic Development', price: PRICE, description: 'Analysis of global economic trends and their impact on local economic development strategies.' },
      { title: 'Policy and Public Service Delivery', price: PRICE, description: 'Examination of public policy formulation and the delivery of public services to communities.' },
      { title: 'Public Sector Reform', price: PRICE, description: 'Study of reform initiatives aimed at improving the efficiency and effectiveness of the public sector.' },
      { title: 'Sustainable Government', price: PRICE, description: 'Strategies and practices for achieving sustainability in government operations and public services.' },
      { title: 'Information Management', price: PRICE, description: 'Management of information systems and processes to support business operations and decision-making.' },
      { title: 'Statistical Techniques in Business', price: PRICE, description: 'Application of statistical methods for business analysis, including data interpretation and decision-making.' },
      { title: 'Business Finance', price: PRICE, description: 'Principles of financial management in business, including budgeting, investment analysis, and financial planning.' },
      { title: 'Marketing Management', price: PRICE, description: 'Strategies and practices for managing marketing activities and campaigns to achieve business objectives.' },
      { title: 'Advance Project Management', price: PRICE, description: 'Advanced techniques in project management, including risk management and complex project execution.' },
      { title: 'Project Resource and Procurement Management', price: PRICE, description: 'Management of resources and procurement processes for successful project delivery.' },
      { title: 'Business Mathematics', price: PRICE, description: 'Mathematical techniques and applications for solving business problems and making financial decisions.' },
      { title: 'Financial Accounting', price: PRICE, description: 'Recording, summarizing, and analyzing financial transactions to produce financial statements.' },
      { title: 'Financial Reporting and Analysis', price: PRICE, description: 'Preparation and interpretation of financial reports to assess business performance and financial health.' },
      { title: 'Economics 1A', price: PRICE, description: 'Introduction to economic principles, including supply and demand, market equilibrium, and basic economic theories.' },
      { title: 'Microeconomics', price: PRICE, description: 'Detailed study of economic principles related to individual markets and consumer choices.' },
      { title: 'Public Sector Economics', price: PRICE, description: 'Economic analysis focused on the public sector’s role in the economy and its impact on public welfare.' },
      { title: 'Business Communication', price: PRICE, description: 'Effective communication strategies and tools for business professionals, including writing and presentation skills.' },
      { title: 'Public Administration 1B', price: PRICE, description: 'Advanced exploration of public administration practices, including policy analysis and organizational behavior.' },
      { title: 'Public Administration 2B', price: PRICE, description: 'Further study of public administration theories, focusing on implementation and evaluation of public programs.' },
      { title: 'Local Government 1B', price: PRICE, description: 'Continuation of local government studies, with emphasis on practical issues and case studies in local governance.' },
      { title: 'Contemporary South African Politics', price: PRICE, description: 'Analysis of current political dynamics and challenges in South Africa, including governance and policy issues.' },
      { title: 'Evolution of Public Administration', price: PRICE, description: 'Historical development and changes in public administration practices and theories over time.' },
      { title: 'Improving Public Administration', price: PRICE, description: 'Strategies for enhancing the effectiveness and efficiency of public administration systems.' },
      { title: 'Public Sector Budgeting', price: PRICE, description: 'In-depth study of budgeting processes and financial management within the public sector.' },
      { title: 'Research in the Public Sector', price: PRICE, description: 'Methods and techniques for conducting research related to public sector policies and programs.' },
      { title: 'Ethical Business Management', price: PRICE, description: 'Principles and practices of ethical decision-making and management in business settings.' },
      { title: 'Project Management', price: PRICE, description: 'Fundamentals of managing projects, including planning, execution, and control of project activities.' },
      { title: 'Advanced Management Principles', price: PRICE, description: 'Complex management theories and practices for high-level organizational leadership.' },
      { title: 'Understanding Marketing Approaches', price: PRICE, description: 'Overview of various marketing strategies and their application to different business contexts.' },
      { title: 'Project Scope and Scheduling', price: PRICE, description: 'Defining project scope and creating schedules to ensure timely project completion.' },
      { title: 'Managing Project Risk', price: PRICE, description: 'Identifying, analyzing, and mitigating risks associated with project management.' },
      { title: 'Procurement Management', price: PRICE, description: 'Strategies and processes for acquiring goods and services for projects and organizations.' },
    ],
    
  },
  {
    category: 'Software Engineering Courses',
    items: [
      { title: 'HTML', price: PRICES.HTML, description: 'Introduction to HTML' },
      { title: 'CSS', price: PRICES.CSS, description: 'Introduction to CSS' },
      { title: 'JavaScript', price: PRICES.JavaScript, description: 'Introduction to JavaScript' },
      { title: 'TypeScript', price: PRICES.TypeScript, description: 'Introduction to TypeScript' },
      { title: 'React.js', price: PRICES['React.js'], description: 'Introduction to React.js' },
      { title: 'Next.js', price: PRICES['Next.js'], description: 'Introduction to Next.js' },
      { title: 'Tailwind CSS', price: PRICES['Tailwind CSS'], description: 'Introduction to Tailwind CSS' },
      { title: 'Bootstrap', price: PRICES.Bootstrap, description: 'Introduction to Bootstrap' },
      { title: 'Material UI', price: PRICES['Material UI'], description: 'Introduction to Material UI' },
      { title: 'Next UI', price: PRICES['Next UI'], description: 'Introduction to Next UI' },
      { title: 'Firebase', price: PRICES.Firebase, description: 'Introduction to Firebase' },
      { title: 'MongoDB', price: PRICES.MongoDB, description: 'Introduction to MongoDB' },
      { title: 'Supabase', price: PRICES.Supabase, description: 'Introduction to Supabase' },
    ]
  }
];

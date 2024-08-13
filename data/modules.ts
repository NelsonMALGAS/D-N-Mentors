
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
      category: 'Modules',
      items: [
        { title: 'KCQs', price: '200 250 300', description: 'Project Resource and Procurement Management' },
        { title: 'Exams', price: '250 300 350', description: 'Business Mathematics' },
        { title: 'Assignments', price: '250 300 350', description: 'Business Finance' },
        { title: 'Projects', price: '250 300 350', description: 'Financial Accounting' },
        { title: 'Private Classes (per hour)', price: '-', description: 'Financial Reporting and Analysis' },
        { title: 'Homework', price: '-', description: 'Economics 1A' }
      ]
    },
    {
      category: 'Additional Courses',
      items: [
        { title: 'Economics 2B', price: '-', description: 'Microeconomics' },
        { title: 'Macroeconomics', price: '-', description: 'Public Sector Economics' },
        { title: 'End User Computing', price: '-', description: 'Business Communication' },
        { title: 'Public Administration 1A', price: '-', description: 'Public Administration 1B' },
        { title: 'Public Administration 2A', price: '-', description: 'Public Administration 2B' },
        { title: 'Local Government 1A', price: '-', description: 'Local Government 1B' },
        { title: 'Ethics in Public Sector', price: '-', description: 'Contemporary South African Politics' },
        { title: 'Administrative Law', price: '-', description: 'Evolution of Public Administration' },
        { title: 'Global Perspectives to Local Economic Development', price: '-', description: 'Improving Public Administration' },
        { title: 'Policy and Public Service Delivery', price: '-', description: 'Public Sector Budgeting' },
        { title: 'Public Sector Reform', price: '-', description: 'Research in the Public Sector' },
        { title: 'Sustainable Government', price: '-', description: 'Ethical Business Management' },
        { title: 'Information Management', price: '-', description: 'Project Management' },
        { title: 'Statistical Techniques in Business', price: '-', description: 'Advanced Management Principles' },
        { title: 'Business Finance', price: '-', description: 'Understanding Marketing Approaches' },
        { title: 'Marketing Management', price: '-', description: 'Project Scope and Scheduling' },
        { title: 'Advance Project Management', price: '-', description: 'Managing Project Risk' }
      ]
    }
  ];
  
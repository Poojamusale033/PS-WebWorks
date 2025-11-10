import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'project' | 'landing-page' | 'template';
  technologies: string[];
  preview: string;
  price?: number;
  features: string[];
  image: string;
  rating: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  activeCategory: string = 'all';
  searchTerm: string = '';
  
  projects: Project[] = [
    // High Demand Projects
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin panel, and real-time inventory management.',
      category: 'project',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      preview: 'https://ecommerce-demo.example.com',
      features: ['Payment Gateway', 'Admin Dashboard', 'Inventory Management', 'User Authentication'],
      image: '../../assets/img/project img/E-Commerce_Platform.svg',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team collaboration features.',
      category: 'project',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Material UI'],
      preview: 'https://taskmanager.example.com',
      features: ['Real-time Updates', 'File Sharing', 'Team Collaboration', 'Progress Tracking'],
      image: '../../assets/img/project img/Task Management_App.svg',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with insights, scheduling, and performance metrics.',
      category: 'project',
      technologies: ['Angular', 'Chart.js', 'REST API', 'TypeScript'],
      preview: 'https://social-dashboard.example.com',
      features: ['Analytics', 'Content Scheduling', 'Performance Metrics', 'Multi-platform'],
      image: '../../assets/img/project img/Social Media_Dashboard.svg',
      rating: 4.7
    },

    // Landing Pages
    {
      id: 4,
      title: 'SaaS Product Landing',
      description: 'High-converting landing page for SaaS products with animated sections and lead capture forms.',
      category: 'landing-page',
      technologies: ['Angular', 'GSAP', 'Bootstrap', 'AOS'],
      preview: 'https://saas-landing.example.com',
      features: ['Animated Sections', 'Lead Capture', 'Responsive Design', 'SEO Optimized'],
      image: '../../assets/img/project img/SaaS Product_Landing.jpg',
      rating: 4.9
    },
    {
      id: 5,
      title: 'E-commerce Landing',
      description: 'Product-focused landing page with shopping cart integration and product showcases.',
      category: 'landing-page',
      technologies: ['Angular', 'SCSS', 'RxJS', 'Angular Material'],
      preview: 'https://ecommerce-landing.example.com',
      features: ['Product Showcase', 'Shopping Cart', 'Mobile First', 'Fast Loading'],
      image: '../../assets/img/project img/E-commerce Landing.png',
      rating: 4.5
    },

    // Website Templates
    {
      id: 6,
      title: 'Corporate Business Template',
      description: 'Professional corporate website template with multiple pages and modern design.',
      category: 'template',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      preview: 'https://corporate-template.example.com',
      features: ['Multiple Pages', 'Responsive', 'Customizable', 'Documentation'],
      image: '../../assets/img/project img/Corporate_Business Template.png',
      rating: 4.8
    },
    {
      id: 7,
      title: 'Portfolio Template',
      description: 'Creative portfolio template for designers and developers with smooth animations.',
      category: 'template',
      technologies: ['Angular', 'SCSS', 'GSAP', 'TypeScript'],
      preview: 'https://portfolio-template.example.com',
      features: ['Smooth Animations', 'Project Gallery', 'Contact Form', 'Blog Ready'],
      image: '../../assets/img/project img/Portfolio_Template.avif',
      rating: 4.7
    },
    {
      id: 8,
      title: 'Restaurant Template',
      description: 'Beautiful restaurant website template with menu management and reservation system.',
      category: 'template',
      technologies: ['Angular', 'Firebase', 'Material UI', 'RxJS'],
      preview: 'https://restaurant-template.example.com',
      features: ['Menu Management', 'Online Reservations', 'Gallery', 'Contact Forms'],
      image: '../../assets/img/project img/Restaurant_Template.jpg',
      rating: 4.9
    }
  ];

  get filteredProjects(): Project[] {
    return this.projects.filter(project => {
      const matchesCategory = this.activeCategory === 'all' || project.category === this.activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  get categories() {
    return [
      { key: 'all', label: 'All Projects' },
      { key: 'project', label: 'Projects' },
      { key: 'landing-page', label: 'Landing Pages' },
      { key: 'template', label: 'Website Templates' }
    ];
  }

  ngOnInit(): void {}

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  // Fixed search input handler
  onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}
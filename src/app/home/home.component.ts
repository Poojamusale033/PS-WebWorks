import { Component, OnInit, OnDestroy } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  tech: string[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface Stats {
  projects: number;
  clients: number;
  templates: number;
  rating: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  activeTestimonial: number = 0;
  testimonialInterval: any;
  statsInterval: any;
  
  stats: Stats = {
    projects: 0,
    clients: 0,
    templates: 0,
    rating: 0
  };

  services: Service[] = [
    {
      icon: '💻',
      title: "Custom Projects",
      description: "Full-stack web applications built with modern technologies tailored to your business needs.",
      features: ["E-commerce Platforms", "Task Management", "Social Dashboards"]
    },
    {
      icon: '🎨',
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive sales effectively.",
      features: ["SaaS Products", "E-commerce", "Lead Generation"]
    },
    {
      icon: '📱',
      title: "Website Templates",
      description: "Ready-to-use, professional templates that can be customized to match your brand identity.",
      features: ["Corporate", "Portfolio", "Restaurant"]
    }
  ];

  features: Feature[] = [
    {
      icon: '⚡',
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: '🛡️',
      title: "Secure & Reliable",
      description: "Built with best practices and security standards"
    },
    {
      icon: '🚀',
      title: "Performance Optimized",
      description: "Lightning-fast loading speeds for better user experience"
    },
    {
      icon: '👥',
      title: "Client Support",
      description: "Dedicated support to help you succeed"
    }
  ];

  portfolio: PortfolioItem[] = [
    {
      title: "E-Commerce Platform",
      category: "Custom Project",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["Angular", "Node.js", "MongoDB"]
    },
    {
      title: "SaaS Landing Page",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Angular", "GSAP", "Bootstrap"]
    },
    {
      title: "Corporate Template",
      category: "Website Template",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Solutions",
      content: "A PS Web Works delivered an exceptional e-commerce platform. The quality and attention to detail exceeded our expectations!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager, GrowthHub",
      content: "The landing page they created increased our conversion rate by 45%. Highly recommended for anyone serious about results!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Founder, StartupLaunch",
      content: "Professional, responsive, and creative. They transformed our vision into a stunning website that our clients love.",
      rating: 5
    }
  ];

  ngOnInit(): void {
    this.animateStats();
    this.startTestimonialRotation();
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
    }
  }

  animateStats(): void {
    const targets = { projects: 50, clients: 200, templates: 30, rating: 4.8 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    this.statsInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      this.stats = {
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        templates: Math.floor(targets.templates * progress),
        rating: parseFloat((targets.rating * progress).toFixed(1))
      };

      if (step >= steps) {
        clearInterval(this.statsInterval);
        this.stats = {
          projects: targets.projects,
          clients: targets.clients,
          templates: targets.templates,
          rating: targets.rating
        };
      }
    }, interval);
  }

  startTestimonialRotation(): void {
    this.testimonialInterval = setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }, 5000);
  }

  setActiveTestimonial(index: number): void {
    this.activeTestimonial = index;
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    this.startTestimonialRotation();
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface ProcessStep {
  icon: string;  
  title: string;
  description: string;
}

interface WhyChoose {
  icon: string;
  title: string;
  description: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface Stats {
  projects: number;
  clients: number;
  years: number;
  rating: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  
  statsInterval: any;
  
  stats: Stats = {
    projects: 0,
    clients: 0,
    years: 0,
    rating: 0
  };

  values: Value[] = [
    {
      icon: '💎',
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is crafted with meticulous attention to detail and highest standards.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing latest technologies and innovative approaches to web development.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'We build lasting relationships with our clients, working as partners to achieve their business goals.'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'We deliver projects on time without sacrificing quality, ensuring smooth and efficient workflows.'
    },
    {
      icon: '🎨',
      title: 'Creativity',
      description: 'We bring creative solutions to every challenge, making your digital presence stand out from the crowd.'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'We prioritize security in every aspect of development, protecting your data and your users.'
    }
  ];

  team: TeamMember[] = [
    {
      name: 'Amit Sharma',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in building scalable web applications.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Patel',
      role: 'UI/UX Designer',
      bio: 'Creative designer passionate about crafting beautiful and intuitive user experiences.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Rahul Kumar',
      role: 'Backend Developer',
      bio: 'Expert in Node.js and database optimization with focus on performance and scalability.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sneha Reddy',
      role: 'Frontend Developer',
      bio: 'Angular specialist with a keen eye for detail and passion for clean, maintainable code.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ];

// Update the process array with icons
process: ProcessStep[] = [
  {
    icon: '🔍',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.'
  },
  {
    icon: '🎨',
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes and prototypes, ensuring the user experience and interface align with your vision.'
  },
  {
    icon: '💻',
    title: 'Development',
    description: 'Our developers bring the designs to life using cutting-edge technologies and best practices for clean, efficient code.'
  },
  {
    icon: '🧪',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your project works flawlessly across all devices and browsers before launch.'
  },
  {
    icon: '🚀',
    title: 'Launch & Deployment',
    description: 'We handle the entire deployment process, ensuring a smooth launch with minimal downtime.'
  },
  {
    icon: '🛠️',
    title: 'Support & Maintenance',
    description: 'Our relationship doesn\'t end at launch. We provide ongoing support and maintenance to keep your project running smoothly.'
  }
];

  whyChooseUs: WhyChoose[] = [
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: '50+ successful projects delivered with 4.8/5 average client rating'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'High-quality solutions at prices that fit your budget'
    },
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: '98% of our projects delivered on or before deadline'
    },
    {
      icon: '🔧',
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs'
    },
    {
      icon: '📱',
      title: 'Responsive Support',
      description: 'Quick response times and dedicated support throughout the project'
    },
    {
      icon: '🌟',
      title: 'Latest Technologies',
      description: 'We use modern, cutting-edge technologies for future-proof solutions'
    }
  ];

  achievements: Achievement[] = [
    {
      icon: '🏅',
      title: 'Best Web Development Agency 2024',
      description: 'Recognized for excellence in web development and client satisfaction'
    },
    {
      icon: '⭐',
      title: '4.8/5 Client Rating',
      description: 'Consistently high ratings from satisfied clients across all platforms'
    },
    {
      icon: '🎯',
      title: '200+ Projects Delivered',
      description: 'Successfully completed projects ranging from startups to enterprises'
    },
    {
      icon: '🌍',
      title: 'Global Client Base',
      description: 'Serving clients from 15+ countries across the world'
    }
  ];

  ngOnInit(): void {
    this.animateStats();
  }

  ngOnDestroy(): void {
    if (this.statsInterval) {
      clearInterval(this.statsInterval);
    }
  }

  animateStats(): void {
    const targets = { 
      projects: 50, 
      clients: 200, 
      years: 5, 
      rating: 4.8 
    };
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    this.statsInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      this.stats = {
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        rating: parseFloat((targets.rating * progress).toFixed(1))
      };

      if (step >= steps) {
        clearInterval(this.statsInterval);
        // Set final values
        this.stats = {
          projects: targets.projects,
          clients: targets.clients,
          years: targets.years,
          rating: targets.rating
        };
      }
    }, interval);
  }
}
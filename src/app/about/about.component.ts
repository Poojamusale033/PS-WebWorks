// about.component.ts
import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: string;
  name: string;
  skills: Skill[];
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skillCategories: SkillCategory[] = [
    {
      icon: '🎨',
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 75 }
      ]
    },
    {
      icon: '⚙️',
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Express.js', level: 78 }
      ]
    },
    {
      icon: '🛠️',
      name: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Figma', level: 70 },
        { name: 'Agile/Scrum', level: 80 }
      ]
    }
  ];

  values: Value[] = [
    {
      icon: '🎯',
      title: 'Quality Focus',
      description: 'I believe in delivering exceptional quality in every project, paying attention to the smallest details that make the biggest difference.'
    },
    {
      icon: '🚀',
      title: 'Innovation Driven',
      description: 'Always exploring new technologies and methodologies to provide cutting-edge solutions that stand out in the market.'
    },
    {
      icon: '🤝',
      title: 'Client Collaboration',
      description: 'Working closely with clients to understand their vision and transform it into reality through transparent communication and partnership.'
    },
    {
      icon: '⚡',
      title: 'Efficiency First',
      description: 'Optimizing workflows and code for maximum performance, ensuring fast, reliable, and scalable applications.'
    }
  ];

  ngOnInit(): void {
    // Animation triggers can be added here
  }

  // Method to trigger skill animations when section comes into view
  onSkillsInView(): void {
    // You can implement intersection observer here
  }
}
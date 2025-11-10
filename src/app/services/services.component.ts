import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern technologies like Angular, React, and Vue.js.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Cross-browser Compatible']
    },
    {
      icon: '⚡',
      title: 'Angular Applications',
      description: 'High-performance single-page applications with robust architecture and best practices.',
      features: ['Component Architecture', 'State Management', 'RxJS Integration', 'Testing']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered designs that provide exceptional experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Websites that work perfectly on all devices from desktop to mobile phones.',
      features: ['Mobile First', 'Touch Friendly', 'Fast Loading', 'Progressive Web Apps']
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your website running smoothly and securely.',
      features: ['Regular Updates', 'Security Patches', 'Performance Monitoring', 'Backup Solutions']
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with secure payment integration.',
      features: ['Payment Gateway', 'Product Management', 'Order Tracking', 'Inventory Management']
    }
  ];
}
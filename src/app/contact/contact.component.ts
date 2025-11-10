// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

interface BudgetRange {
  value: string;
  label: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  
  budgetRanges: BudgetRange[] = [
    { value: '1k-5k', label: '$1K - $5K' },
    { value: '5k-15k', label: '$5K - $15K' },
    { value: '15k-30k', label: '$15K - $30K' },
    { value: '30k-plus', label: '$30K+' },
    { value: 'not-sure', label: 'Not Sure' }
  ];

  faqs: FAQ[] = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during our initial consultation.',
      isOpen: false
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients worldwide. I\'m experienced in remote collaboration and can accommodate different time zones for meetings and communication.',
      isOpen: false
    },
    {
      question: 'What is your development process?',
      answer: 'I follow an agile approach: Discovery & Planning → Design & Prototyping → Development → Testing & Quality Assurance → Deployment → Maintenance & Support.',
      isOpen: false
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, I offer maintenance packages that include updates, security monitoring, performance optimization, and technical support to keep your project running smoothly.',
      isOpen: false
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in Angular, TypeScript, Node.js, and modern web technologies. I also work with various databases, cloud platforms, and third-party integrations.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.createForm();
  }

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      projectType: ['', Validators.required],
      budgetRange: ['not-sure'],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.contactForm.reset({
          budgetRange: 'not-sure'
        });
        
        // Show success message (you can implement a toast/notification)
        alert('Thank you for your message! I will get back to you soon.');
      }, 2000);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  toggleFaq(faq: FAQ): void {
    faq.isOpen = !faq.isOpen;
  }
}
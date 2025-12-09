import { Component } from '@angular/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
  
@Component({  
  selector: 'app-contact',  
  templateUrl: './contact.component.html',  
  styleUrls: ['./contact.component.css']  
})  
export class ContactComponent {  
  contactForm: FormGroup;  
  submitted = false;  
  
  constructor(private fb: FormBuilder) {  
    this.contactForm = this.fb.group({  
      name: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      message: ['', Validators.required]  
    });  
  }  
  
  onSubmit() {  
    if (this.contactForm.valid) {  
      // Here you would typically send the form data to your backend  
      console.log('Form submitted:', this.contactForm.value);  
        
      // Reset form and show success message  
      this.submitted = true;  
      this.contactForm.reset();  
        
      // Reset submitted flag after 3 seconds  
      setTimeout(() => {  
        this.submitted = false;  
      }, 3000);  
    }  
  }  
}
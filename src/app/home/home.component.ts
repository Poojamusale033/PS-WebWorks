import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  typedText: string = '';
  fullText: string = 'Web Developer & Angular Specialist';
  currentIndex: number = 0;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 100);
    }
  }

  hireMe(): void {
    window.location.href = '/contact';
  }

  viewWork(): void {
    window.location.href = '/projects';
  }
}
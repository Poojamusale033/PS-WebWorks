import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialization if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  navigateToContact(): void {
    this.closeMenu();
    this.router.navigate(['/contact']);
  }

  // Close menu when clicking outside on mobile
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.isMenuOpen) {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-menu') && !target.closest('.hamburger')) {
        this.closeMenu();
      }
    }
  }
}
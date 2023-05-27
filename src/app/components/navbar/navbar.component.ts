import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isSportsDropDownOpen: boolean = false;
  isImportantLinksDropDownOpen: boolean = false;

  constructor(private router: Router) {}

  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  onLogoClicked() {
    this.router.navigate(['/home']);
    this.isMenuOpen = false;
  }

  onMenuButtinClicked(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  openAbout() {
    this.router.navigate(['/about']);
    this.isMenuOpen = false;
  }
  toggleDropDown(target: string): void {
    if (target === 'sports') {
      document;
      this.isSportsDropDownOpen = !this.isSportsDropDownOpen;
    } else if (target === 'importantLinks') {
      this.isImportantLinksDropDownOpen = !this.isImportantLinksDropDownOpen;
    }
  }
}

import { Component, HostListener } from '@angular/core';
import { faAngleDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // Icons
  icon = faAngleDown;
  plane = faPaperPlane;

  // State variables
  isNavbarOpen = false; // Tracks whether the sidebar menu is open
  isScrolled = false; // Tracks if the page has been scrolled
  isProductsDropdownOpen = false;
  isSolutionsDropdownOpen = false;
  isResourcesDropdownOpen = false;
  isCompanyDropdownOpen = false;

  // Toggles the sidebar menu
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Toggles specific dropdown menus
  toggleDropdown(menu: string, event: Event) {
    event.preventDefault(); // Prevent default link behavior

    // Reset all dropdown states
    this.isProductsDropdownOpen = false;
    this.isSolutionsDropdownOpen = false;
    this.isResourcesDropdownOpen = false;
    this.isCompanyDropdownOpen = false;

    // Toggle the selected menu
    if (menu === 'products')
      this.isProductsDropdownOpen = !this.isProductsDropdownOpen;
    if (menu === 'solutions')
      this.isSolutionsDropdownOpen = !this.isSolutionsDropdownOpen;
    if (menu === 'resources')
      this.isResourcesDropdownOpen = !this.isResourcesDropdownOpen;
    if (menu === 'company')
      this.isCompanyDropdownOpen = !this.isCompanyDropdownOpen;
  }

  // Detects if the user has scrolled and adds/removes the "scrolled" class
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Adds shadow when scrolled 50px or more
  }

  // Closes dropdown menus when clicking outside
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;

    // Close all dropdowns if clicking outside of them
    if (!target.closest('.dropdown')) {
      this.isProductsDropdownOpen = false;
      this.isSolutionsDropdownOpen = false;
      this.isResourcesDropdownOpen = false;
      this.isCompanyDropdownOpen = false;
    }
  }
}

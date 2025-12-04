import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  navLinks = [
    { title: 'Home', path: '/', isExternal: false },
    { title: 'Polyglot Stack', path: '/stack', isExternal: false }, // Focus on the breadth of technologies
    { title: 'Mastery Tracks', path: '/tracks', isExternal: false }, // Focus on the curated course knowledge
    { title: 'Projects', path: '/projects', isExternal: false },
    { title: 'About', path: '/about', isExternal: false },
  ];

  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

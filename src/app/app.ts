import { Component, signal } from '@angular/core';
import { Banner } from './layout/banner/banner';
import { Footer } from './layout/footer/footer';
import { Content } from './layout/content/content';

@Component({
  selector: 'app-root',
  imports: [Banner, Footer, Content],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('techthor-polyglot-portal');
}

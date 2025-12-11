import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECT_DATA, getGroupedProjects } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECT_DATA;
  groupedProjects = getGroupedProjects(this.projects);
}

export interface ProjectItem {
  name: string;
  description: string;
  iconPath: string;
  repoUrl?: string;
  category: 'Portal Documentation' | 'Proof of Work';
  repoLabel?: string;
}

// github-projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../service/github.service';
import { ProfileComponent } from "../../profile/profile.component";
import { GithubRepository } from '../interface/github.interface';

@Component({
  selector: 'app-github-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ProfileComponent],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubProjectsComponent implements OnInit {
  repositories: GithubRepository[] = [];
  filteredRepositories: GithubRepository[] = [];
  searchQuery: string = '';
  showForks: boolean = false;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.loadRepositories();
  }

  loadRepositories() {
    const username = 'JOINSIDER';
    this.githubService.getPublicRepositories(username)
      .subscribe((repos: GithubRepository[]) => {
        this.repositories = [...repos].sort((a, b) => {
          const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
          const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
          return dateB - dateA;
        });
        this.applyFilters();
      });
  }

  filterRepositories(query: string) {
    this.searchQuery = query;
    this.applyFilters();
  }

  toggleForks(event: Event) {
    event.preventDefault();
    this.showForks = !this.showForks;
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredRepositories = this.repositories.filter(repo => {
      const matchesSearch = !this.searchQuery ||
        repo.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(this.searchQuery.toLowerCase()));

      const showRepo = this.showForks || !repo.fork;

      return matchesSearch && showRepo;
    });
  }

    getLanguageColor(language: string): string {
        const colors: { [key: string]: string } = {
            'TypeScript': '#3178c6',
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'Java': '#b07219',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Vue': '#41b883',
            'Markdown': '#083fa1'
        };
        return colors[language] || '#858585';
    }

    getExternalLinkIcon(): string {
        return '↗';
    }

    getStarIcon(): string {
        return '⭐';
    }

    getForkIcon(): string {
        return '🔄';
    }
}

// github-projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../service/github.service';

@Component({
    selector: 'app-github-projects',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.css']
})
export class GithubProjectsComponent implements OnInit {
    repositories: any[] = [];
    filteredRepositories: any[] = [];
    searchQuery: string = '';
    isSearchExpanded: boolean = false;

    constructor(private githubService: GithubService) {}

    ngOnInit() {
        this.loadRepositories();
    }

    loadRepositories() {
        const username = 'JOINSIDER';
        this.githubService.getPublicRepositories(username)
            .subscribe(repos => {
                this.repositories = repos.sort((a, b) =>
                    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                );
                this.filteredRepositories = [...this.repositories];
            });
    }

    filterRepositories(query: string) {
        this.searchQuery = query;
        this.filteredRepositories = this.repositories.filter(repo =>
            repo.name.toLowerCase().includes(query.toLowerCase()) ||
            (repo.description && repo.description.toLowerCase().includes(query.toLowerCase()))
        );
    }

    toggleSearch() {
        this.isSearchExpanded = !this.isSearchExpanded;
        if (!this.isSearchExpanded) {
            this.searchQuery = '';
            this.filterRepositories('');
        }
    }

    getLanguageColor(language: string): string {
        const colors: { [key: string]: string } = {
            'TypeScript': '#3178c6',
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'Java': '#b07219',
            'HTML': '#e34c26',
            'CSS': '#563d7c'
        };
        return colors[language] || '#858585';
    }
}

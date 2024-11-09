export interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  fork: boolean;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  private: boolean;
}

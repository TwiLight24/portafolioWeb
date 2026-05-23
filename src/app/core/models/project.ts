export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
}
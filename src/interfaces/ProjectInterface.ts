export interface Project {
  id: string;
  date: string;
  name: string;
  tech: string;
  description: string;
  image: string;
  githubUrl?: string[];
  liveUrl?: string[];
  content: string;
}

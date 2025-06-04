export interface BlogPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  date: string; // ISO format date (e.g., "2025-06-04T12:00:00Z")
  authorName?: string; // Optional, for UI display only
  thumbnail?: string;  // Optional, for blog post preview
}

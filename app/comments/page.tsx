'use client';

import { useState } from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentsList';
import { Comment } from '../types/comment';
import { User } from '../types/user';
import { BlogPost } from '../types/blogPost';

// Mock data (you can replace this with fetch or server-side logic)
const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const posts: BlogPost[] = [
  { id: 1, title: 'First Post', content: '...', authorId: 1, date: '2025-06-01' },
  { id: 2, title: 'Second Post', content: '...', authorId: 2, date: '2025-06-02' },
];

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (comment: Comment) => {
    setComments((prev) => [comment, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Add a Comment</h1>
      <CommentForm users={users} posts={posts} onAddComment={handleAddComment} />
      <h2 className="text-xl font-semibold mt-8 mb-2">All Comments</h2>
      <CommentList comments={comments} users={users} posts={posts} />
    </div>
  );
}

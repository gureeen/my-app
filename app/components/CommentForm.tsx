'use client';

import { useState } from 'react';
import { Comment } from '../types/comment';
import { BlogPost } from '../types/blogPost';
import { User } from '../types/user';

interface CommentFormProps {
  users: User[];
  posts: BlogPost[];
  onAddComment: (comment: Comment) => void;
}

export default function CommentForm({ users, posts, onAddComment }: CommentFormProps) {
  const [userId, setUserId] = useState<number>(users[0]?.id ?? 0);
  const [postId, setPostId] = useState<number>(posts[0]?.id ?? 0);
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = {
      id: Date.now().toString(),
      userId: userId.toString(),   // ✅ fix here
      postId: postId.toString(),   // ✅ fix here
      body,
      createdAt: new Date(),
    };

    onAddComment(newComment);
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md shadow">
      <div>
        <label className="block mb-1 font-medium">User</label>
        <select
          value={userId.toString()}
          onChange={(e) => setUserId(parseInt(e.target.value, 10))}
          className="w-full border p-2 rounded"
        >
          {users.map((user) => (
            <option key={user.id} value={user.id.toString()}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Post</label>
        <select
          value={postId.toString()}
          onChange={(e) => setPostId(parseInt(e.target.value, 10))}
          className="w-full border p-2 rounded"
        >
          {posts.map((post) => (
            <option key={post.id} value={post.id.toString()}>
              {post.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Comment</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Comment
      </button>
    </form>
  );
}

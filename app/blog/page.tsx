// app/blog/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types/blogPost';
import Link from 'next/link';
import BlogPostCard from '../components/BlogPostCard';
import { User } from '../types/user';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [users, setUsers] = useState<User[]>([]); // Fetch users to get author names
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await fetch('/api/blog');
        if (!postsResponse.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postsData: BlogPost[] = await postsResponse.json();

        const usersResponse = await fetch('/api/users');
        if (!usersResponse.ok) {
          throw new Error('Failed to fetch users');
        }
        const usersData: User[] = await usersResponse.json();

        // Enrich posts with author names
        const enrichedPosts = postsData.map(post => {
          const author = usersData.find(user => user.id === post.authorId);
          return { ...post, authorName: author ? author.name : 'Unknown' };
        });

        setPosts(enrichedPosts);
        setUsers(usersData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading blog posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#333' }}>
        Blog Posts
      </h1>
      <Link
        href="/blog/add"
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '5px',
          textDecoration: 'none',
          marginBottom: '20px',
          display: 'inline-block',
        }}
      >
        Add Post
      </Link>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
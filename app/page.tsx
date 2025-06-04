// app/page.tsx
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'My App',
  description: 'Welcome to my Next.js application',
};

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#28a745' }}>
        Welcome Home!
      </h1>
      <p style={{ fontSize: '1.2em', color: '#555', marginBottom: '30px' }}>
        This is the homepage of our awesome application. Feel free to explore!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link
          href="/users"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '1.1em',
          }}
        >
          View Users
        </Link>
        <Link
          href="/blog"
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '1.1em',
          }}
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
}
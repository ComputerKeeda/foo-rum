"use client";

import { useState } from 'react';
import PostEditor from '../components/PostEditor';
import PostCard, { Post } from '../components/PostCard';
import Header from '@/components/Header';
import AuthModal from '@/components/AuthModal';

const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    author: {
      name: 'Theresa Webb',
      username: 'theresa_w',
      avatar: 'https://i.pravatar.cc/150?u=theresa',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: '5 mins ago',
    likes: 12,
    comments: 2,
  },
  {
    id: '2',
    author: {
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://i.pravatar.cc/150?u=johndoe',
    },
    content: '👋 Just joined this awesome community! Excited to share my thoughts here.\n\n#newhere #hello',
    createdAt: '25 mins ago',
    likes: 45,
    comments: 8,
  },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);

  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        name: 'Theresa Webb', // Mock current user
        username: 'theresa_w',
        avatar: 'https://i.pravatar.cc/150?u=theresa',
      },
      content,
      createdAt: 'Just now',
      likes: 0,
      comments: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-12 max-w-2xl mx-auto px-4">
        <div className="space-y-6">

          <PostEditor onPostCreate={handleCreatePost} />

          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <AuthModal />
    </>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const moveToPage = (page: number) => {
    setCurrentPage(page);
    router.push(`/page${page}`);
  };

  return (
    <header>
      <button
        style={currentPage === 1 ? { color: 'red' } : { color: 'blue' }}
        onClick={() => {
          moveToPage(1)
        }}
      >
        페이지1
      </button>
      <button
        style={currentPage === 2 ? { color: 'red' } : { color: 'blue' }}
        onClick={() => {
          moveToPage(2)
        }}
      >
        페이지2
      </button>
      <button
        style={currentPage === 3 ? { color: 'red' } : { color: 'blue' }}
        onClick={() => {
          moveToPage(3)
        }}
      >
        페이지3
      </button>
    </header>
  );
}
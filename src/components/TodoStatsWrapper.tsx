'use client';

import dynamic from 'next/dynamic';

// Import TodoStats with no SSR to avoid hydration issues with localStorage
const TodoStats = dynamic(() => import('./TodoStats').then(mod => ({ default: mod.TodoStats })), { ssr: false });

export function TodoStatsWrapper() {
  return <TodoStats />;
} 
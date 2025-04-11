'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 py-3 mb-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">Todo App</div>
        <div className="flex space-x-6">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} pb-1`}
          >
            Todo List
          </Link>
          <Link 
            href="/stats" 
            className={`${pathname === '/stats' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} pb-1`}
          >
            Statistics
          </Link>
        </div>
      </div>
    </nav>
  );
} 
import { TodoStatsWrapper } from '@/components/TodoStatsWrapper';

export default function StatsPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <TodoStatsWrapper />
      </div>
    </div>
  );
} 
import { TodoListWrapper } from '@/components/TodoListWrapper';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <TodoListWrapper />
      </div>
    </div>
  );
}

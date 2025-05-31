import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Settings, Plus, Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

const initialTasks: Task[] = [
  {
    id: '1',
    text: 'Review and make sure nothing slips through cracks',
    completed: false,
    date: '15 Sep, 2021',
  },
  {
    id: '2',
    text: 'Send meeting invites for sales upcampaign',
    completed: true,
    date: '20 Sep, 2021',
  },
  {
    id: '3',
    text: 'Weekly closed sales won checking with sales team',
    completed: false,
    date: '24 Sep, 2021',
  },
  {
    id: '4',
    text: 'Add notes that can be viewed from the individual view',
    completed: false,
    date: '27 Sep, 2021',
  },
    {
    id: '5',
    text: 'Move stuff to another page',
    completed: true,
    date: '27 Sep, 2021',
  },
    {
    id: '6',
    text: 'Prepare Q4 presentation slides',
    completed: false,
    date: '01 Oct, 2021',
  },
];

interface ToDoListProps {
  className?: string;
}

const ToDoList: React.FC<ToDoListProps> = ({ className }) => {
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [newTaskText, setNewTaskText] = React.useState<string>('');

  const remainingTasks = tasks.filter((task) => !task.completed).length;
  const totalTasks = tasks.length;

  const handleToggleComplete = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    const newTask: Task = {
      id: String(Date.now()),
      text: newTaskText.trim(),
      completed: false,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'}),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setNewTaskText('');
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  return (
    <Card className={cn('flex flex-col', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">My Tasks</CardTitle>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
          <Settings className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-2 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-muted-foreground">
            {remainingTasks} of {totalTasks} remaining
          </p>
          <Button size="sm" className="h-8 bg-velzon-accent-green hover:bg-velzon-accent-green/90 text-white" onClick={() => document.getElementById('new-task-input')?.focus() }>
            <Plus className="h-4 w-4 mr-1.5" /> Add Task
          </Button>
        </div>

        <div className="flex space-x-2 mb-4">
            <Input 
                id="new-task-input"
                type="text"
                placeholder="Enter new task..."
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                className="h-9"
            />
            <Button size="sm" variant="outline" onClick={handleAddTask} className="h-9">
                Save
            </Button>
        </div>

        <ScrollArea className="flex-1 pr-3 -mr-3 min-h-[200px]">
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between group">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onCheckedChange={() => handleToggleComplete(task.id)}
                    className="mt-0.5 shrink-0"
                  />
                  <label
                    htmlFor={`task-${task.id}`}
                    className={cn(
                      'text-sm',
                      task.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                    )}
                  >
                    {task.text}
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                    <span className={cn('text-xs', task.completed ? 'text-muted-foreground' : 'text-gray-500')}>{task.date}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handleDeleteTask(task.id)}>
                        <Trash2 className="h-3.5 w-3.5"/>
                    </Button>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ToDoList;

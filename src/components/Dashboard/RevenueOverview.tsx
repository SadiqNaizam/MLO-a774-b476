import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 30, expenses: 22 },
  { name: 'Feb', revenue: 45, expenses: 35 },
  { name: 'Mar', revenue: 40, expenses: 55 },
  { name: 'Apr', revenue: 60, expenses: 40 },
  { name: 'May', revenue: 55, expenses: 70 },
  { name: 'Jun', revenue: 80, expenses: 60 },
  { name: 'Jul', revenue: 70, expenses: 50 },
  { name: 'Aug', revenue: 90, expenses: 75 },
  { name: 'Sep', revenue: 110, expenses: 80 },
  { name: 'Oct', revenue: 130, expenses: 95 },
  { name: 'Nov', revenue: 120, expenses: 110 },
  { name: 'Dec', revenue: 150, expenses: 120 },
];

const totalRevenue = 584000;
const totalExpenses = 497000;
const profitRatio = ((totalRevenue - totalExpenses) / totalRevenue) * 100;

interface RevenueOverviewProps {
  className?: string;
}

const RevenueOverview: React.FC<RevenueOverviewProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <CardTitle className="text-base font-medium mb-2 sm:mb-0">Balance Overview</CardTitle>
          <Select defaultValue="current-year">
            <SelectTrigger className="w-full sm:w-[160px] h-8 text-xs">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-year">Current Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <p className="text-sm text-muted-foreground">
            <span className="text-2xl font-semibold text-blue-600">${(totalRevenue / 1000).toFixed(0)}k</span> Revenue
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-2xl font-semibold text-red-600">${(totalExpenses / 1000).toFixed(0)}k</span> Expenses
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="text-lg font-semibold text-green-600">{profitRatio.toFixed(1)}%</span> Profit Ratio
          </p>
        </div>
      </CardHeader>
      <CardContent className="h-[350px] pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
            <YAxis 
              tickFormatter={(value) => `$${value}k`} 
              domain={[0, 'dataMax + 20']} 
              tickLine={false} 
              axisLine={false}
              dx={-10}
            />
            <Tooltip formatter={(value: number, name: string) => [`$${value}k`, name.charAt(0).toUpperCase() + name.slice(1)]} />
            <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{paddingBottom: '20px'}}/>
            <Line type="monotone" dataKey="revenue" strokeWidth={2} stroke="hsl(var(--primary))" dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--primary))' }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="expenses" strokeWidth={2} stroke="hsl(var(--destructive))" dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--destructive))' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueOverview;

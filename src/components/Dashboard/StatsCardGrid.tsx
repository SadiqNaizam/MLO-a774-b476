import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Send,
  DollarSign,
  Activity,
  Briefcase,
  Heart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface StatCardData {
  id: string;
  title: string;
  value: string;
  icon: React.ElementType;
  iconBgColor: string;
  indicatorColor: 'green' | 'red';
  // Optional: percentageChange, changeType for more detail not shown in image but common
}

const statsData: StatCardData[] = [
  {
    id: 'campaignSent',
    title: 'CAMPAIGN SENT',
    value: '197',
    icon: Send,
    iconBgColor: 'bg-sky-100 text-sky-600',
    indicatorColor: 'green',
  },
  {
    id: 'annualProfit',
    title: 'ANNUAL PROFIT',
    value: '$489.4k',
    icon: DollarSign,
    iconBgColor: 'bg-green-100 text-green-600',
    indicatorColor: 'green',
  },
  {
    id: 'leadConversation',
    title: 'LEAD CONVERSATION',
    value: '32.89%',
    icon: Activity,
    iconBgColor: 'bg-red-100 text-red-600',
    indicatorColor: 'red',
  },
  {
    id: 'dailyAverageIncome',
    title: 'DAILY AVERAGE INCOME',
    value: '$1,596.5',
    icon: Briefcase,
    iconBgColor: 'bg-yellow-100 text-yellow-600',
    indicatorColor: 'green',
  },
  {
    id: 'annualDeals',
    title: 'ANNUAL DEALS',
    value: '2,659',
    icon: Heart,
    iconBgColor: 'bg-purple-100 text-purple-600',
    indicatorColor: 'red', // Assuming this is a target comparison, as more deals is usually good
  },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6',
        className
      )}
    >
      {statsData.map((stat) => (
        <Card key={stat.id} className="overflow-hidden">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.title}
              </p>
              <p className="text-2xl font-semibold text-foreground mt-1">
                {stat.value}
              </p>
            </div>
            <div className={cn('p-3 rounded-md flex items-center justify-center', stat.iconBgColor)}>
              <stat.icon className="h-6 w-6" />
            </div>
          </CardContent>
          {/* The small circle indicator, using a div for color and positioning */}
          {/* The image shows a very subtle circle, this is an interpretation */}
          <div className={cn('h-1 w-full', stat.indicatorColor === 'green' ? 'bg-green-500' : 'bg-red-500')}></div>
        </Card>
      ))}
    </div>
  );
};

export default StatsCardGrid;

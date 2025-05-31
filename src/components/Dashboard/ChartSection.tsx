import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

const salesForecastData = [
  { name: 'Goal', value: 37000, fill: 'hsl(var(--primary))' }, // Blue in image, using accentBlue (our 'accent')
  { name: 'Pending', value: 12000, fill: 'hsl(var(--accent))' }, // Green in image, using accent (our primaryGreen is 'primary')
  { name: 'Revenue', value: 18000, fill: 'hsl(var(--destructive))' }, // Orange/Yellow in image, using 'destructive' for variety
];
// For XAxis for BarChart
const salesForecastXAxisData = [{ name: 'Total Forecasted Value', Goal: 37, Pending: 12, Revenue: 18 }];

const dealTypeData = [
  { subject: '2016', Pending: 80, Loss: 30, Won: 90, fullMark: 100 },
  { subject: '2017', Pending: 60, Loss: 70, Won: 100, fullMark: 100 },
  { subject: '2018', Pending: 50, Loss: 40, Won: 75, fullMark: 100 },
  { subject: '2019', Pending: 70, Loss: 80, Won: 50, fullMark: 100 },
  { subject: '2020', Pending: 90, Loss: 20, Won: 60, fullMark: 100 },
  { subject: '2021', Pending: 40, Loss: 60, Won: 85, fullMark: 100 },
];

interface ChartSectionProps {
  className?: string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-medium">Sales Forecast</CardTitle>
          <Select defaultValue="nov-2021">
            <SelectTrigger className="w-[160px] h-8 text-xs">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nov-2021">Nov 2021</SelectItem>
              <SelectItem value="oct-2021">Oct 2021</SelectItem>
              <SelectItem value="q4-2021">Q4 2021</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="h-[350px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesForecastXAxisData} layout="vertical" barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 40]} tickFormatter={(value) => `$${value}k`} />
              <YAxis type="category" dataKey="name" hide />
              <Tooltip formatter={(value: number) => [`$${value}k`, 'Value']} />
              <Legend wrapperStyle={{paddingTop: '20px'}} payload={salesForecastData.map(item => ({ value: item.name, type: 'square', color: item.fill, id: item.name }))} />
              <Bar dataKey="Goal" fill="#299CDB" name="Goal" barSize={25}/>
              <Bar dataKey="Pending" fill="#0AB39C" name="Pending Forecast" barSize={25}/>
              <Bar dataKey="Revenue" fill="#F0AD4E" name="Revenue" barSize={25}/>{/* Using custom yellow/orange */}
            </BarChart>
          </ResponsiveContainer>
           <p className="text-center text-xs text-muted-foreground mt-2">Total Forecasted Value</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-medium">Deal Type</CardTitle>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[160px] h-8 text-xs">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="h-[350px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dealTypeData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Tooltip />
              <Legend wrapperStyle={{paddingTop: '20px'}}/>
              <Radar name="Pending" dataKey="Pending" stroke="#F0AD4E" fill="#F0AD4E" fillOpacity={0.6} />
              <Radar name="Loss" dataKey="Loss" stroke="#F06548" fill="#F06548" fillOpacity={0.6} />
              <Radar name="Won" dataKey="Won" stroke="#0AB39C" fill="#0AB39C" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartSection;

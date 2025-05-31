import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Deal {
  id: string;
  name: string;
  lastContacted: string;
  salesRep: {
    name: string;
    avatarUrl: string;
  };
  status: 'Deal Won' | 'Intro Call' | 'Stuck' | 'Negotiation';
  dealValue: string;
}

const dealsData: Deal[] = [
  {
    id: '1',
    name: 'Absternet LLC',
    lastContacted: 'Sep 20, 2021',
    salesRep: { name: 'Donald Risher', avatarUrl: 'https://i.pravatar.cc/32?u=donald' },
    status: 'Deal Won' as const,
    dealValue: '$100.1K',
  },
  {
    id: '2',
    name: 'Raitech Soft',
    lastContacted: 'Sep 23, 2021',
    salesRep: { name: 'Sofia Cunha', avatarUrl: 'https://i.pravatar.cc/32?u=sofia' },
    status: 'Intro Call' as const,
    dealValue: '$150K',
  },
  {
    id: '3',
    name: 'William PVT',
    lastContacted: 'Sep 27, 2021',
    salesRep: { name: 'Luis Rocha', avatarUrl: 'https://i.pravatar.cc/32?u=luis' },
    status: 'Stuck' as const,
    dealValue: '$78.18K',
  },
  {
    id: '4',
    name: 'Loiusee LLP',
    lastContacted: 'Sep 30, 2021',
    salesRep: { name: 'Vitoria Rodrigues', avatarUrl: 'https://i.pravatar.cc/32?u=vitoria' },
    status: 'Deal Won' as const,
    dealValue: '$180K',
  },
  {
    id: '5',
    name: 'Tech Solutions Inc.',
    lastContacted: 'Oct 05, 2021',
    salesRep: { name: 'Pedro Alves', avatarUrl: 'https://i.pravatar.cc/32?u=pedro' },
    status: 'Negotiation' as const,
    dealValue: '$220K',
  },
];

const getStatusBadgeClass = (status: Deal['status']): string => {
  switch (status) {
    case 'Deal Won':
      return 'bg-green-100 text-green-700 hover:bg-green-200';
    case 'Intro Call':
      return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
    case 'Stuck':
      return 'bg-red-100 text-red-700 hover:bg-red-200';
    case 'Negotiation':
      return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
    default:
      return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  }
};

interface TableSectionProps {
  className?: string;
}

const TableSection: React.FC<TableSectionProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <CardTitle className="text-base font-medium mb-2 sm:mb-0">Deals Status</CardTitle>
        <Select defaultValue="nov-dec-2021">
          <SelectTrigger className="w-full sm:w-[220px] h-8 text-xs">
            <SelectValue placeholder="Select Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nov-dec-2021">02 Nov 2021 to 31 Dec 2021</SelectItem>
            <SelectItem value="oct-2021">October 2021</SelectItem>
            <SelectItem value="q4-2021">Q4 2021</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs">Name</TableHead>
              <TableHead className="text-xs hidden md:table-cell">Last Contacted</TableHead>
              <TableHead className="text-xs">Sales Representative</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs text-right">Deal Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dealsData.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell className="font-medium text-sm py-3">{deal.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground hidden md:table-cell py-3">
                  {deal.lastContacted}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src={deal.salesRep.avatarUrl} alt={deal.salesRep.name} />
                      <AvatarFallback>{deal.salesRep.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground hidden lg:inline">{deal.salesRep.name}</span>
                  </div>
                </TableCell>
                <TableCell className="py-3">
                  <Badge variant="outline" className={cn('text-xs font-normal', getStatusBadgeClass(deal.status))}>
                    {deal.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-right font-medium py-3">{deal.dealValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TableSection;

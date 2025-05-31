import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import ChartSection from '../components/Dashboard/ChartSection';
import RevenueOverview from '../components/Dashboard/RevenueOverview';
import TableSection from '../components/Dashboard/TableSection';
import ToDoList from '../components/Dashboard/ToDoList';

const CrmPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Dashboards', href: '#' },
    { label: 'CRM' },
  ];

  return (
    <MainAppLayout>
      <PageHeader title="CRM" breadcrumbs={breadcrumbs} />
      <div className="space-y-6">
        <StatsCardGrid />
        <ChartSection />
        <RevenueOverview />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TableSection className="lg:col-span-2" />
          <ToDoList />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default CrmPage;

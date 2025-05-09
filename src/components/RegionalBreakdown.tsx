
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'North', population: 4000, area: 2400, resources: 2400 },
  { name: 'South', population: 3000, area: 1398, resources: 2210 },
  { name: 'East', population: 2000, area: 9800, resources: 2290 },
  { name: 'West', population: 2780, area: 3908, resources: 2000 },
  { name: 'Central', population: 1890, area: 4800, resources: 2181 },
];

const RegionalBreakdown = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle>Regional Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#1a73e8" name="Population" />
            <Bar dataKey="area" fill="#00acc1" name="Area (km²)" />
            <Bar dataKey="resources" fill="#26a69a" name="Resources" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RegionalBreakdown;

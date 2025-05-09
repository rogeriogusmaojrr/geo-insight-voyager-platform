
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Jan', population: 4000, density: 2400 },
  { name: 'Feb', population: 3000, density: 1398 },
  { name: 'Mar', population: 2000, density: 9800 },
  { name: 'Apr', population: 2780, density: 3908 },
  { name: 'May', population: 1890, density: 4800 },
  { name: 'Jun', population: 2390, density: 3800 },
  { name: 'Jul', population: 3490, density: 4300 },
];

const pieData = [
  { name: 'Urban', value: 400 },
  { name: 'Suburban', value: 300 },
  { name: 'Rural', value: 300 },
];

const COLORS = ['#1a73e8', '#00acc1', '#26a69a', '#7cb342'];

const Analytics = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">In-depth data analysis and insights</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Tabs defaultValue="demographics" className="w-full">
          <TabsList>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="economic">Economic</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="climate">Climate</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Select defaultValue="year">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Last Month</SelectItem>
            <SelectItem value="quarter">Last Quarter</SelectItem>
            <SelectItem value="year">Last Year</SelectItem>
            <SelectItem value="5year">5 Years</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Population Growth Trends</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="population" stroke="#1a73e8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="density" stroke="#00acc1" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Demographic Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Regional Economic Indicators</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="population" stackId="1" stroke="#1a73e8" fill="#1a73e8" fillOpacity={0.6} />
                <Area type="monotone" dataKey="density" stackId="2" stroke="#00acc1" fill="#00acc1" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Population Density</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-geo-blue">267/km²</div>
            <p className="text-sm text-muted-foreground">Up by 3.2% from previous year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Urban Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-geo-blue">4.5%</div>
            <p className="text-sm text-muted-foreground">Steady increase over last 5 years</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Resource Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-geo-blue">128 MT</div>
            <p className="text-sm text-muted-foreground">Down by 2.1% from previous year</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

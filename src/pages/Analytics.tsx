
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Jan', population: 4000, density: 2400 },
  { name: 'Fev', population: 3000, density: 1398 },
  { name: 'Mar', population: 2000, density: 9800 },
  { name: 'Abr', population: 2780, density: 3908 },
  { name: 'Mai', population: 1890, density: 4800 },
  { name: 'Jun', population: 2390, density: 3800 },
  { name: 'Jul', population: 3490, density: 4300 },
];

const pieData = [
  { name: 'Urbana', value: 400 },
  { name: 'Suburbana', value: 300 },
  { name: 'Rural', value: 300 },
];

const COLORS = ['#1a73e8', '#00acc1', '#26a69a', '#7cb342'];

const Analytics = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Análises</h1>
        <p className="text-gray-500 mt-1">Análise de dados aprofundada e insights</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Tabs defaultValue="demographics" className="w-full">
          <TabsList>
            <TabsTrigger value="demographics">Demografia</TabsTrigger>
            <TabsTrigger value="economic">Economia</TabsTrigger>
            <TabsTrigger value="resources">Recursos</TabsTrigger>
            <TabsTrigger value="climate">Clima</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Select defaultValue="year">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecionar Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Último Mês</SelectItem>
            <SelectItem value="quarter">Último Trimestre</SelectItem>
            <SelectItem value="year">Último Ano</SelectItem>
            <SelectItem value="5year">5 Anos</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tendências de Crescimento Populacional</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="population" stroke="#1a73e8" activeDot={{ r: 8 }} name="População" />
                <Line type="monotone" dataKey="density" stroke="#00acc1" name="Densidade" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Distribuição Demográfica</CardTitle>
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
            <CardTitle>Indicadores Econômicos Regionais</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="population" stackId="1" stroke="#1a73e8" fill="#1a73e8" fillOpacity={0.6} name="População" />
                <Area type="monotone" dataKey="density" stackId="2" stroke="#00acc1" fill="#00acc1" fillOpacity={0.6} name="Densidade" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Densidade Populacional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-geo-blue">267/km²</div>
            <p className="text-sm text-muted-foreground">Aumento de 3,2% em relação ao ano anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Taxa de Crescimento Urbano</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-geo-blue">4,5%</div>
            <p className="text-sm text-muted-foreground">Aumento constante nos últimos 5 anos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Consumo de Recursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-geo-blue">128 MT</div>
            <p className="text-sm text-muted-foreground">Redução de 2,1% em relação ao ano anterior</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

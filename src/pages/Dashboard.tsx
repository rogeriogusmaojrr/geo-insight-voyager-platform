
import React from 'react';
import { MapPin, TrendingUp, Users, BarChart3 } from 'lucide-react';
import MapComponent from '@/components/MapComponent';
import StatCard from '@/components/StatCard';
import RegionalBreakdown from '@/components/RegionalBreakdown';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">GeoInsights Dashboard</h1>
        <p className="text-gray-500 mt-1">Visualize and analyze geographical data</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Regions" 
          value="5" 
          icon={<MapPin className="h-5 w-5 text-geo-blue" />} 
        />
        <StatCard 
          title="Population Density" 
          value="267/km²" 
          icon={<Users className="h-5 w-5 text-geo-blue" />}
          trend={{ value: 3.2, label: "vs last year", positive: true }}
        />
        <StatCard 
          title="Economic Growth" 
          value="4.7%" 
          icon={<TrendingUp className="h-5 w-5 text-geo-blue" />}
          trend={{ value: 0.8, label: "vs previous quarter", positive: true }}
        />
        <StatCard 
          title="Data Points" 
          value="1,287" 
          icon={<BarChart3 className="h-5 w-5 text-geo-blue" />}
          trend={{ value: 12, label: "new this month", positive: true }}
        />
      </div>
      
      <MapComponent />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RegionalBreakdown />
        <Card className="w-full">
          <CardHeader className="pb-3">
            <CardTitle>Recent Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start space-x-4">
                  <div className="bg-geo-lightBlue p-2 rounded-md">
                    <BarChart3 className="h-5 w-5 text-geo-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Population shift detected in Eastern region</h4>
                    <p className="text-xs text-muted-foreground mt-1">3.5% increase in urban density over the last quarter</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs text-geo-blue">View Report</span>
                      <span className="text-xs text-muted-foreground ml-4">2 days ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

// Adding these imports to fix the build
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

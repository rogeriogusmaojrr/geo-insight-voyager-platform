
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FilePlus, Search, Download, FileText, Calendar, BarChart, MapPin } from "lucide-react";

const Reports = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1">Access and generate detailed geographic insights</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search reports..." 
            className="pl-10"
          />
        </div>
        
        <Button className="bg-geo-blue hover:bg-geo-darkBlue">
          <FilePlus className="h-4 w-4 mr-2" />
          New Report
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Annual Population Distribution",
            desc: "Comprehensive analysis of population changes across regions",
            date: "May 2, 2025",
            icon: <BarChart className="h-5 w-5" />,
            pages: 42
          },
          {
            title: "Economic Growth Report",
            desc: "Quarterly economic indicators by geographical zones",
            date: "April 28, 2025",
            icon: <BarChart className="h-5 w-5" />,
            pages: 36
          },
          {
            title: "Regional Resource Mapping",
            desc: "Detailed mapping of natural resources and extraction patterns",
            date: "April 15, 2025",
            icon: <MapPin className="h-5 w-5" />,
            pages: 29
          },
          {
            title: "Urban Centers Development",
            desc: "Analysis of urban expansion and population density changes",
            date: "April 10, 2025",
            icon: <MapPin className="h-5 w-5" />,
            pages: 53
          },
          {
            title: "Quarterly Data Summary",
            desc: "Key metrics and indicators from Q1 2025",
            date: "April 5, 2025",
            icon: <FileText className="h-5 w-5" />,
            pages: 18
          },
          {
            title: "Climate Impact Assessment",
            desc: "Geographic analysis of climate change effects",
            date: "March 22, 2025",
            icon: <FileText className="h-5 w-5" />,
            pages: 64
          }
        ].map((report, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="bg-geo-lightBlue p-2 w-fit rounded-md mb-2">
                {report.icon}
              </div>
              <CardTitle>{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{report.desc}</p>
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{report.date}</span>
                <span className="mx-2">•</span>
                <FileText className="h-4 w-4 mr-1" />
                <span>{report.pages} pages</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between">
              <Button variant="outline" size="sm">Preview</Button>
              <Button variant="default" size="sm" className="bg-geo-blue hover:bg-geo-darkBlue">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Schedule Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">Set up automated report generation for your team</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Weekly Summary</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">Every Monday at 8:00 AM</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Configure</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Monthly Report</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">1st day of month at 9:00 AM</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Configure</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quarterly Analysis</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">End of each quarter at 2:00 PM</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Configure</Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;

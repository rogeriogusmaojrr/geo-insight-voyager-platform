
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPinned, BarChart3, Settings, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPinned className="text-geo-blue h-6 w-6" />
          <Link to="/" className="text-xl font-bold text-geo-darkBlue">GeoInsights</Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Dashboard</Link>
          <Link to="/maps" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Maps</Link>
          <Link to="/analytics" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Analytics</Link>
          <Link to="/reports" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Reports</Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Settings size={20} />
          </Button>
          <Button className="bg-geo-blue hover:bg-geo-darkBlue">Log In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

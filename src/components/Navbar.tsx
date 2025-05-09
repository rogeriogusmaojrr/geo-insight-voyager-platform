
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
          <Link to="/" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Painel</Link>
          <Link to="/maps" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Mapas</Link>
          <Link to="/analytics" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Análises</Link>
          <Link to="/reports" className="text-gray-700 hover:text-geo-blue transition-colors font-medium">Relatórios</Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Settings size={20} />
          </Button>
          <Button className="bg-geo-blue hover:bg-geo-darkBlue">Entrar</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

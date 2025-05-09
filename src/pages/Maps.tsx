
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Layers, Search } from "lucide-react";
import MapComponent from '@/components/MapComponent';

const Maps = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mapas Interativos</h1>
        <p className="text-gray-500 mt-1">Explore dados geográficos e insights</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Buscar localizações..." 
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <Layers className="h-4 w-4 mr-2" />
            Camadas
          </Button>
          <Button className="bg-geo-blue hover:bg-geo-darkBlue">
            <MapPin className="h-4 w-4 mr-2" />
            Adicionar Local
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="standard" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="standard">Padrão</TabsTrigger>
          <TabsTrigger value="satellite">Satélite</TabsTrigger>
          <TabsTrigger value="terrain">Terreno</TabsTrigger>
        </TabsList>
        <TabsContent value="standard">
          <MapComponent />
        </TabsContent>
        <TabsContent value="satellite">
          <Card>
            <CardContent className="p-0">
              <MapComponent />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="terrain">
          <Card>
            <CardContent className="p-0">
              <MapComponent />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <Card key={item} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative bg-geo-lightBlue">
                {/* Minimap placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-geo-blue opacity-20" />
                </div>
                <div className="absolute bottom-3 left-3 bg-white p-2 rounded-md shadow-sm">
                  <h4 className="text-sm font-medium">Mapa da Região {item}</h4>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Análise Geográfica {item}</h3>
                <p className="text-sm text-gray-500 mt-1">Mapeamento de dados econômicos e populacionais</p>
                <Button variant="link" className="text-geo-blue p-0 h-auto mt-2">
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Maps;

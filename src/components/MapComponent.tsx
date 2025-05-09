
import React from 'react';
import { MapPin, Navigation, ZoomIn, ZoomOut, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MapComponent = () => {
  return (
    <Card className="relative w-full h-[60vh] overflow-hidden rounded-lg border border-gray-200">
      <div className="absolute inset-0 bg-geo-lightBlue bg-opacity-50">
        {/* Map placeholder - in a real app, this would be a real map library */}
        <div className="h-full w-full flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2Y4ZmFmYyIgZmlsbC1vcGFjaXR5PSIwLjQiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCAwTTEwIDRjMC0yLjItMS44LTQtNC00UzIgMS44IDIgNHMxLjggNCA0IDQgNC0xLjggNC00em0wIDBNMTAgNjBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCAwTTYwIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAgME02MCAxMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNHMxLjggNCA0IDQgNC0xLjggNC00em0wIDBtLTI2IDBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCAwTTEwIDM2YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAgME02MCAzNmMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNHMxLjggNCA0IDQgNC0xLjggNC00em0wIDBNMzQgMTBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCAwIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K')]">
          {/* Map markers */}
          <MapPin className="absolute text-geo-blue h-8 w-8 left-1/4 top-1/3 animate-bounce" />
          <MapPin className="absolute text-geo-teal h-8 w-8 right-1/3 bottom-1/4 animate-bounce" />
          <MapPin className="absolute text-geo-green h-8 w-8 right-1/4 top-1/2 animate-bounce" />
          
          <div className="text-center text-gray-500">
            <MapPin className="mx-auto h-20 w-20 text-geo-blue opacity-20" />
            <p className="mt-4 font-medium">Mapa Interativo</p>
            <p className="text-sm">Amplie, arraste e explore dados geográficos</p>
          </div>
        </div>
      </div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button variant="secondary" size="icon" className="bg-white shadow-md">
          <ZoomIn size={18} />
        </Button>
        <Button variant="secondary" size="icon" className="bg-white shadow-md">
          <ZoomOut size={18} />
        </Button>
        <Button variant="secondary" size="icon" className="bg-white shadow-md">
          <Layers size={18} />
        </Button>
        <Button variant="secondary" size="icon" className="bg-white shadow-md">
          <Navigation size={18} />
        </Button>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md">
        <div className="text-sm font-medium mb-2">Legenda</div>
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-geo-blue"></div>
          <span className="text-xs">Centros Populacionais</span>
        </div>
        <div className="flex items-center space-x-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-geo-teal"></div>
          <span className="text-xs">Zonas Econômicas</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-geo-green"></div>
          <span className="text-xs">Áreas de Recursos</span>
        </div>
      </div>
    </Card>
  );
};

export default MapComponent;

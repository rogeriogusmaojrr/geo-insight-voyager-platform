
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FilePlus, Search, Download, FileText, Calendar, BarChart, MapPin } from "lucide-react";

const Reports = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
        <p className="text-gray-500 mt-1">Acesse e gere insights geográficos detalhados</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Buscar relatórios..." 
            className="pl-10"
          />
        </div>
        
        <Button className="bg-geo-blue hover:bg-geo-darkBlue">
          <FilePlus className="h-4 w-4 mr-2" />
          Novo Relatório
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Distribuição Populacional Anual",
            desc: "Análise abrangente das mudanças populacionais entre regiões",
            date: "2 de Maio, 2025",
            icon: <BarChart className="h-5 w-5" />,
            pages: 42
          },
          {
            title: "Relatório de Crescimento Econômico",
            desc: "Indicadores econômicos trimestrais por zonas geográficas",
            date: "28 de Abril, 2025",
            icon: <BarChart className="h-5 w-5" />,
            pages: 36
          },
          {
            title: "Mapeamento de Recursos Regionais",
            desc: "Mapeamento detalhado de recursos naturais e padrões de extração",
            date: "15 de Abril, 2025",
            icon: <MapPin className="h-5 w-5" />,
            pages: 29
          },
          {
            title: "Desenvolvimento de Centros Urbanos",
            desc: "Análise da expansão urbana e mudanças na densidade populacional",
            date: "10 de Abril, 2025",
            icon: <MapPin className="h-5 w-5" />,
            pages: 53
          },
          {
            title: "Resumo Trimestral de Dados",
            desc: "Métricas-chave e indicadores do Q1 2025",
            date: "5 de Abril, 2025",
            icon: <FileText className="h-5 w-5" />,
            pages: 18
          },
          {
            title: "Avaliação de Impacto Climático",
            desc: "Análise geográfica dos efeitos das mudanças climáticas",
            date: "22 de Março, 2025",
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
                <span>{report.pages} páginas</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between">
              <Button variant="outline" size="sm">Visualizar</Button>
              <Button variant="default" size="sm" className="bg-geo-blue hover:bg-geo-darkBlue">
                <Download className="h-4 w-4 mr-2" />
                Baixar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Agendar Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">Configure a geração automática de relatórios para sua equipe</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Resumo Semanal</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">Toda Segunda-feira às 8:00</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Configurar</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Relatório Mensal</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">1º dia do mês às 9:00</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Configurar</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Análise Trimestral</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">Final de cada trimestre às 14:00</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Configurar</Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;

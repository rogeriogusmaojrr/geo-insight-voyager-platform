
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className }: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {trend && (
              <div className="flex items-center mt-1">
                <span className={cn(
                  "text-xs font-medium",
                  trend.positive ? "text-green-500" : "text-red-500"
                )}>
                  {trend.positive ? "+" : ""}{trend.value}%
                </span>
                <span className="text-xs text-muted-foreground ml-1">{trend.label}</span>
              </div>
            )}
          </div>
          <div className="p-2 rounded-full bg-geo-lightBlue">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

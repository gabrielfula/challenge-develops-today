'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState, useEffect } from "react"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

interface ICountryChart {
  value: number;
  year: number;
}

interface CountryChartProps {
  data: ICountryChart[];
}

export default function CountryChart({ data }: CountryChartProps) {

  const [chartData, setChartData] = useState<any>([]);

  useEffect(() => {
    const formattedData = data.map(item => ({
      year: item.year,
      population: item.value
    }));

    setChartData(formattedData);
  }, [data]);

  return (
    <div className="mt-24">
      <ChartContainer
        config={chartConfig} 
        className="min-h-[200px] w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            tickMargin={5}
            axisLine={false}
            orientation="left"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="population" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

// @ts-nocheck
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const colorPalette = [
  "#1746A2",
  "#5F9DF7",
  "#B73E3E",
  "#FF731D",
  "#D8D9CF",
  "#4E6C50",
  "#AA8B56",
  "#4649FF",
  "#00ABB3",
  "#FB2576",
];

export function createChart(chartData: number[][], iterations: number) {
  const config = {
    type: "line",
    data: {
      labels: new Array(iterations).fill(0).map((_, index) => index),
      datasets: chartData.map((d, index) => {
        return {
          label: index,
          backgroundColor: colorPalette[index],
          borderColor: colorPalette[index],
          data: d,
        };
      }),
    },
    options: {},
  };

  new Chart(document.getElementById("chart") as HTMLCanvasElement, config);
}

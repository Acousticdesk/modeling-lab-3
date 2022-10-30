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

const entities = [
  "cats",
  "mise",
  "owls",
  "crickets",
  "lizards",
  "bats",
  "snakes",
  "toads",
  "mosquitoes",
  "hawks",
];

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

document.addEventListener("DOMContentLoaded", () => {
  const referenceElement = document.getElementById("charts");
  const activationStateChartElement = document
    .getElementById("activation_state_chart_container")
    .querySelector("canvas");
  activationStateChartElement.setAttribute(
    "width",
    referenceElement.clientWidth
  );
  activationStateChartElement.setAttribute(
    "height",
    referenceElement.clientHeight - 100
  );

  const systemStateChartElement = document
    .getElementById("system_state_chart_container")
    .querySelector("canvas");
  systemStateChartElement.setAttribute("width", referenceElement.clientWidth);
  systemStateChartElement.setAttribute(
    "height",
    referenceElement.clientHeight - 100
  );
});

let chart: Chart;

export function createChart(chartData: number[][], iterations: number) {
  const config = {
    type: "line",
    data: {
      labels: new Array(iterations).fill(0).map((_, index) => index),
      datasets: chartData.map((d, index) => {
        return {
          label: `${index} ${entities[index]}`,
          backgroundColor: colorPalette[index],
          borderColor: colorPalette[index],
          data: d,
        };
      }),
    },
    options: {},
  };

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(
    document.getElementById("chart") as HTMLCanvasElement,
    config
  );
}

let activationChart: Chart;

export function createActivationChart(
  chartData: number[][],
  iterations: number
) {
  const config = {
    type: "line",
    data: {
      labels: new Array(iterations).fill(0).map((_, index) => index),
      datasets: chartData.map((d, index) => {
        const color =
          colorPalette[index] ||
          Math.round(Math.random() * colorPalette.length);
        return {
          label: `${index} ${entities[index]}`,
          backgroundColor: color,
          borderColor: color,
          data: d,
        };
      }),
    },
    options: {},
  };

  if (activationChart) {
    activationChart.destroy();
  }

  activationChart = new Chart(
    document.getElementById("activation_chart") as HTMLCanvasElement,
    config
  );
}

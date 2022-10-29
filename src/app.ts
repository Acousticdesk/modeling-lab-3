import adjacencyMatrix from "./adjacencyMatrix";
import { multiplyMatrices } from "./matrix";
import { createActivationChart, createChart } from "./chart";

const initialState = [[2], [2], [2], [2], [2], [2], [2], [2], [2], [2]];
// 1. more cats, less snakes = more crickets and periodic plot
// 2. all the predators activation
// 3. all the prey activation
const activationState = [[0], [1], [0], [1], [0], [1], [0], [0], [1], [0]];
const interval = 1; // T
const iterations = 5; // t
const imitations = [activationState]; //pk
const states = [initialState]; // V

for (let i = 0; i < iterations; i += interval) {
  const nextImitation = multiplyMatrices(
    adjacencyMatrix,
    imitations[imitations.length - 1]
  );
  imitations.push(nextImitation);
}

for (let i = 0; i < iterations; i += interval) {
  const state = states[i]; // V(k - 1)
  const imitation = imitations[i]; // p(k - 1)

  const nextState: number[][] = [];

  for (let j = 0; j < state.length; j += 1) {
    nextState[j] = [state[j][0] + imitation[j][0]];
  }

  states.push(nextState);
}

const chartData: number[][] = [];

for (let i = 0; i < initialState.length; i += 1) {
  chartData[i] = [];
  for (let j = 0; j < states.length; j += 1) {
    chartData[i].push(states[j][i][0]);
  }
}

const activationChartData: number[][] = [];

for (let i = 0; i < activationState.length; i += 1) {
  activationChartData[i] = [];
  for (let j = 0; j < imitations.length; j += 1) {
    activationChartData[i].push(imitations[j][i][0]);
  }
}

(
  document.querySelector('button[type="submit"]') as HTMLButtonElement
).addEventListener("click", () => {
  (
    document.getElementById(
      "activation_state_chart_container"
    ) as HTMLCanvasElement
  ).hidden = false;
  (
    document.getElementById("system_state_chart_container") as HTMLCanvasElement
  ).hidden = false;
  createActivationChart(activationChartData, iterations);
  createChart(chartData, iterations);
});

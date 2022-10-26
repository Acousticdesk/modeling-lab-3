import adjacencyMatrix from "./adjacencyMatrix";
import { multiplyMatrices } from "./matrix";
import { createChart } from "./chart";

const initialState = [[2], [2], [2], [2], [2], [2], [2], [2], [2], [2]];
const activationState = [[0], [2], [2], [0], [0], [0], [0], [0], [0], [0]];
const interval = 1; // T
const iterations = 20; // t
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

document.addEventListener("DOMContentLoaded", () => {
  createChart(chartData, iterations);
});

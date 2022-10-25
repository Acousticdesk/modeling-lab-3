import adjacencyMatrix from "./adjacencyMatrix";
import { multiplyMatrices } from "./matrix";

const initialState = [[2], [2], [2], [2], [2], [2], [2], [2], [2], [2]];
const activationState = [[1], [0], [0], [0], [0], [0], [0], [0], [0], [0]];
const interval = 1; // T
const range = 3; // t
const imitations = [activationState]; //pk
const states = [initialState];

for (let i = 0; i < range; i += interval) {
  const nextImitation = multiplyMatrices(
    adjacencyMatrix,
    imitations[imitations.length - 1]
  );
  imitations.push(nextImitation);
}

for (let i = 0; i < range; i += interval) {
  const state = states[i]; // V(k - 1)
  const imitation = imitations[i]; // p(k - 1)

  const nextState: number[][] = [];

  for (let j = 0; j < state.length; j += 1) {
    nextState[j] = [state[j][0] + imitation[j][0]];
  }

  states.push(nextState);
}

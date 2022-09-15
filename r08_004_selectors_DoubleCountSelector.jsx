import { selector } from 'recoil'; // 1
import { countState } from '../atoms/CountAtom'; // 2
export const doubleCountState = selector({ // 3
  key: 'doubleCountState', // 4
  get: ({get}) => { // 5
    const count = get(countState);
    return count * 2;
  },
  set: ({set}, newValue) => { // 6
    set(countState, newValue);
  }
});
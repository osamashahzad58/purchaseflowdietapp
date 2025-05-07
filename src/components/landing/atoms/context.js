import { atom } from 'recoil';

export const signupEmailState = atom({
  key: 'signupEmailState', // unique ID
  default: '',             // default value
});

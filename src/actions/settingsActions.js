import {
  DISABLE_BALANCE_ADD,
  DISABLE_BALANCE_EDIT,
  ALLOW_REGISTER
} from './types';

export const setDisableBalanceAdd = () => {
  return {
    type: DISABLE_BALANCE_ADD
  };
};
export const setDisableBalanceEdit = () => {
  return {
    type: DISABLE_BALANCE_EDIT
  };
};
export const setAllowRegister = () => {
  return {
    type: ALLOW_REGISTER
  };
};

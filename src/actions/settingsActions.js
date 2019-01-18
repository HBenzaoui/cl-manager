import {
  DISABLE_BALANCE_ADD,
  DISABLE_BALANCE_EDIT,
  ALLOW_REGISTER
} from './types';

export const setDisableBalanceAdd = () => {
  //ghet setting from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //toggle
  settings.disableBalanceAdd = !settings.disableBalanceAdd;

  //set back to localStorage

  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ADD,
    payload: settings.disableBalanceAdd
  };
};

export const setDisableBalanceEdit = () => {
  //ghet setting from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //toggle
  settings.disableBalanceEdit = !settings.disableBalanceEdit;

  //set back to localStorage

  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_EDIT,
    payload: settings.disableBalanceEdit
  };
};
export const setAllowRegister = () => {
  //ghet setting from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //toggle
  settings.allowRegister = !settings.allowRegister;

  //set back to localStorage

  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: ALLOW_REGISTER,
    payload: settings.allowRegister
  };
};

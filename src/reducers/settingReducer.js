import {
  DISABLE_BALANCE_ADD,
  DISABLE_BALANCE_EDIT,
  ALLOW_REGISTER
} from '../actions/types';

const initialState = {
  disableBalanceAdd: true,
  disableBalanceEdit: false,
  allowRegister: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ADD:
      return {
        ...state,
        disableBalanceAdd: !state.disableBalanceAdd
      };
    case DISABLE_BALANCE_EDIT:
      return {
        ...state,
        disableBalanceEdit: !state.disableBalanceEdit
      };
    case ALLOW_REGISTER:
      return {
        ...state,
        allowRegister: !state.allowRegister
      };
    default:
      return state;
  }
}

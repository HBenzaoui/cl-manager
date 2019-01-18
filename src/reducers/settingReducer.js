import {
  DISABLE_BALANCE_ADD,
  DISABLE_BALANCE_EDIT,
  ALLOW_REGISTER
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ADD:
      return {
        ...state,
        disableBalanceAdd: action.payload
      };
    case DISABLE_BALANCE_EDIT:
      return {
        ...state,
        disableBalanceEdit: action.payload
      };
    case ALLOW_REGISTER:
      return {
        ...state,
        allowRegister: action.payload
      };
    default:
      return state;
  }
}

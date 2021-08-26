import produce from 'immer';
import {ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED} from './actions'
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Bali', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Chung', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    return produce(state, (draftState) => {
      const item = {uuid: id++, quantity: 1, ...action.payload}
      draftState.push(item)
    })
  }

  if (action.type === ITEM_REMOVED) {
    const newItemList = state.filter((item) => item.uuid !== action.payload)
    return newItemList
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid)
      item.price = parseInt(action.payload.price, 10)
    })
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return produce(state, (draftState) => {
      const item = draftState.find((item) => item.uuid === action.payload.uuid)
      item.quantity = parseInt(action.payload.quantity, 10)
    })
  }

  return state;
};

export default reducer;

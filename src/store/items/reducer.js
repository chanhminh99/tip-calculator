import {ITEM_ADDED, ITEM_REMOVED} from './actions'
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Bali', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Chung', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = {uuid: id++, quantity: 1, ...action.payload}
    return [...state, item]
  }

  if (action.type === ITEM_REMOVED) {
    const newItemList = state.filter((item) => item.uuid !== action.payload)
    return newItemList
  }

  return state;
};

export default reducer;

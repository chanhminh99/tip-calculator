// Action Types
export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';

// Action Creator
export const addItem = (name, price) => ({type: ITEM_ADDED, payload: {name, price}})

export const removeItem = (uuid) => ({type: ITEM_REMOVED, payload: uuid})
//Store/Reducers/cartReducer.js

const initialState = { cart: [] }

function manageCart(state = initialState, action) {
  let nextState
  let itemIndex
  switch (action.type) {
    case 'ADD_ITEM':
      nextState = {
        ...state,
        cart: [...state.cart, action.value]
      }
      return nextState || state
    case 'REMOVE_ITEM':
      itemIndex = state.cart.findIndex(item => item.product_id === action.value.product_id)
      if (itemIndex !== -1) {
        nextState = {
          ...state,
          cart: [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex+1)]
        }
      }
      else {
        //L'objet n'est pas dans le cart
        return state
      }
      return nextState || state
    default:
      return state
  }
}

export default manageCart

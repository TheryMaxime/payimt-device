//Store/Reducers/cartReducer.js

const initialState = { cart: [] }

function manageCart(state = initialState, action) {
  let nextState
  let itemIndex
  console.log(state)
  switch (action.type) {
    case 'ADD_ITEM':
      /*
      itemIndex = state.cart.findIndex(item => item.id === action.value.id)
      if (itemIndex !== -1) {
        //L'objet est déjà dans le cart
        nextState = {
          ...state
        }
        nextState.cart[itemIndex].amount += 1
      }
      else {
        //L'objet n'est pas dans le cart
        action.value.amount = 1
        nextState = {
          ...state,
          cart: [...state.cart, action.value]
        }
      }
      */
      nextState = {
        ...state,
        cart: [...state.cart, action.value]
      }
      return nextState || state
    case 'REMOVE_ITEM':
      itemIndex = state.cart.findIndex(item => item.id === action.value.id)
      if (itemIndex !== -1) {
        //L'objet est déjà dans le cart
        /*
        if (state.cart[itemIndex].amount > 0) {
          nextState = {
            ...state
          }
          nextState.cart[itemIndex].amount -= 1
        }
        else {
          return state
        }
        */
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

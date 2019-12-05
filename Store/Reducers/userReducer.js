const initialState = {firstname:"", lastname:"", phoneNumber:"", isRegistered:false, isLoggedIn:false}

function userReducer(state = initialState, action){
  let nextState
  switch (action.type){

    case 'SIGN_UP':
      nextState = {
        ...state,
        firstname:action.value.firstname,
        lastname:action.value.lastname,
        phoneNumber:action.value.phoneNumber,
        isRegistered:true,
        isLoggedIn:true
      }
      return nextState ||state

    case 'SIGN_IN':
      /*if(action.value.firstname == state.firstname
          && action.value.lastname == state.lastname
            && action.value.phone == state.phone
              && state.isRegistered == true){*/
      //console.log("salut!:",action.value.firstname);
        nextState = {
          ...state,
          isLoggedIn:true,
          isRegistered:true
        }
      //}
      return nextState || state

    case 'LOG_OUT':
      if(state.isRegistered == true){
        nextState = {
          ...state,
          firstname:"",
          lastname:"",
          phoneNumber:"",
          isLoggedIn:false
        }
      }
      return nextState || state

    default:
      return state
  }
}

export default userReducer

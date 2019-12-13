//Store/Reducers/userReducer.js

const initialState = {firstname:"", lastname:"", phoneNumber:"", isRegistered:false, isLoggedIn:false}


// Reducer utilisé pour changer l'état global de l'utilisateur en fonction de ses actions sur l'application

function userReducer(state = initialState, action){
  let nextState
  switch (action.type){

    // Lorsque l'utilisateur s'enregistre avec la page Login, on vient réaliser des modifications dans le state global
    case 'SIGN_UP':
      nextState = {
        ...state,
        firstname:action.value.firstname,
        lastname:action.value.lastname,
        phoneNumber:action.value.phoneNumber,
        isRegistered:true,
        isLoggedIn:true // Il est connecté. On utilisera ce paramètre pour savoir si il s'est déconnecté avant de quitter l'application.
      }
      return nextState ||state

    // On vient ici le déconnecter de l'application. On pourra alors savoir au prochain démarrage de l'application qu'il faut le rediriger vers la page de Login
    case 'LOG_OUT':
      if(state.isRegistered == true){
        nextState = {
          ...state,
          firstname:"",
          lastname:"",
          phoneNumber:"",
          isLoggedIn:false // Déconnecté
        }
      }
      return nextState || state

    default:
      return state
  }
}

export default userReducer

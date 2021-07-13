const initState = {
    authError: null,
}

const authReducer = (state = initState,action) =>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
               authError:action.credentials
            }
        default:
            return state;
    }
}
export default authReducer;
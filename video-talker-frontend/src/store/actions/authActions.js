export const signIn = (credentials) =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        console.log(credentials);
        dispatch({type:'LOGIN',credentials});
    }
}
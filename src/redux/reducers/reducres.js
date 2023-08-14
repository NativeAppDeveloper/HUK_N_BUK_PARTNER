const initialData={
    stackName:'ONBOARDING'
}

export const ChangeStackReducer=((state=initialData,action)=>{
    // console.log(action,'=-=-=-=q-we=qwe');
    switch(action.type){
        case 'CHANGE_STACK':
            // state. = ;
            return { ...state,stackName:action.payload};
        default: 
        return state;
    }
})
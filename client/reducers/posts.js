// A reducer takes in two things 

// 1. The action (Info what happened)
// 2. copy of current state

function posts(state=[], action) {

    switch(action.type) {
        case 'INCREMENT_LIKES' :
        console.log("Likes has been added ");
        
        const index = action.index;
        
        return [
            ...state.slice(0,index), //Before we are updating
            
            {...state[index], likes: state[index].likes + 1},
            
            ...state.slice(index+1) //After we have updated 
        ]

        default :
            return state;
    }
}

export default posts;
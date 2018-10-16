// A reducer takes in two things 
// 1. The action (Info what happened)
// 2. copy of current state

function postComments(state=[], action) {
    
    switch(action.type) {
        case "ADD_COMMENT" :

            /* 
            ADD_COMMENT CASE :
            - copies the current arra
            - Adds the new object which contains the 
                - author
                - comment
            
            */
            return [...state,{
                user: action.author,
                text: action.comment
            }];

        case "REMOVE_COMMENT" :
        
            console.log("Removing Comment")
            console.log(action)

            return [
                ...state.slice(0, action.commentId),
                ...state.slice(action.commentId + 1)    
            ];


        default :
            return state;
    }
}

function comments(state=[], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId],action)
        }
    }
    return state;
}



export default comments;
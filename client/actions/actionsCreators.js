//Increment (Event)
//Index is the element being targetted
export function increment(index){

   //Actions are just objects
    return {

        //Type
        type: 'INCREMENT_LIKES',
        
        //Payload with as little information as possible
        index
    }
}



//Add Comment (Event)
export function addComment(postId, author, comment) {
  
    console.log("Dispatching add comment");

     //Actions are just objects
    return {

        //Type
        type: 'ADD_COMMENT',

        //Payload with as little information as possible
        postId,
        author,
        comment
    }
}

//Remove Comment (Event)
export function removeComment(postId, commentId) {

    //Actions are just objects
    return {
        type: 'REMOVE_COMMENT',
        postId,
        commentId
    }
}
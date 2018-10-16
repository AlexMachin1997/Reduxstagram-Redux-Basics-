import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
    render() {

        const { postId } = this.props.params;


        //Finding the photo index with the findIndex method
        const index = this.props.posts.findIndex((post) => post.code === postId);

 
        const post = this.props.posts[index];
     

        
        return (
            <div className="single-photo">
                <Photo index={index} post={post} {...this.props} />
                <Comments {...this.props}/>
            </div>
        )
    }
});

export default Single;
import React from "react";
import { Link } from "react-router";
import Photo from "./Photo";

/* 
PhotoGrid Notes:
- Maps through the posts provided by the central store
- Returns a component  named Photo
    - Each Photo being returned gets access to the :
        - Index (Key for each single photo which is being returned)
        - Index (being passed to the component)
        - The post information is also being passed down
        - Current props are copied via ES6 spread and passed down (Everything from the store e.g. addComment, removeComment and posts etc)    
*/

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => <Photo key={index} index={index} post={post} {...this.props}/>)}
            </div>
        )
    }
});

export default PhotoGrid;
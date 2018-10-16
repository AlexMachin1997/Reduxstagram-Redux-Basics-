import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionsCreators";
import Main from "./Main";

//Returns the state 
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

//actionCreators is the functions defined to cause the actions which trigger the reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

//Allows redux to be exposed to the application
//Two functions are defined above
//mapStateToProps - returns the state of the posts and comments
//mapDispatchToProps - dispatches the new state fro
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
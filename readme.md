# Reduxstagram (Redux Basics)

This is an application which was produced as part of one of Wes Bos free courses, the "Learn Redux" course.

The application covers all the basics of Redux which is : 
- **Store** - Central location of the state

- **Connect** - Exposing the starting component to the Redux Store

- **Reducers** - Specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

- **Actions** - Pure functions which supply only the necessary data needed to perform the action e.g. the index or the commentID.

- **Data flow** - The entrie application follows the same lifecycle pattern, all data becomes predictable which allows easier debugging. Redux tools can be used to jump forwad and backwards in time to test functionality. 

The application is a Instagram clone clone named Reduxstagram. The current functionality is :
- Like posts and trigger an animation
- View individual posts via react-router
- Add comments


# Note # 
The state is only temporarily, there is no DB integration thats another project in itself Any likes or comments add will be removed.   



**Steps**
---------

**Download or Pull This Repo**
	Top of this page you can see where it says clone or download

 **Install Node**
	https://nodejs.org/en/

  **Install Yarn (Optional)**
   https://yarnpkg.com/en/docs/install


 **Install all the node packages**
On the root of this project run on your terminal (if you want you can do this with yarn but that's optional)

    npm install

 **Update the node packages**
On the root of this project run on your terminal (if you want you can do this with yarn but that's optional)

    npm update

**Start the server**
To start the project run in your terminal

  	npm start
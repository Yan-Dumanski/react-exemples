import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} updataNewPostText={props.updataNewPostText} newPostText={props.newPostText} addPost={props.addPost} />
    </div>
  );
};

export default Profile;

import React from "react";
import Post from './post';


const NewFeedContent = (props) => {
    const posts = []
    props.profiles && props.profiles.map(profile => {
        profile.posts && profile.posts.map(post => posts.unshift(post))
    })
    posts.sort(function (a, b) {
        return b.id - a.id;
    });
    return (
        <div>{posts.map(post => <Post
            author={post.author}
            post={post.post}
            id={post.id}
            delPost={props.delPost}
            personIsLogin={props.personIsLogin}
        />)}</div>
    )
}

export default NewFeedContent
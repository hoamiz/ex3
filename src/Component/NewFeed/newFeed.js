import React from "react";
import PostForm from './postForm';
import NewFeedContent from './newfeedContent';
import { connect } from "react-redux";
import { postStatus, delPost } from '../../redux/action'
//post form
//newfeed content

const NewFeed = (props) => {
    return (
        <div>
            <PostForm
                postStatus={props.postStatus}
                personIsLogin={props.personIsLogin}
            />
            <NewFeedContent
                profiles={props.profiles}
                delPost={props.delPost}
                personIsLogin={props.personIsLogin}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    profiles: state.profiles,
    personIsLogin: state.personIsLogin,
})
const mapDispatchToProps = dispatch => ({
    postStatus: (person, post) => dispatch(postStatus(person, post)),
    delPost: (author, id) => dispatch(delPost(author, id))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewFeed)
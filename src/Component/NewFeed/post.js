import React from "react";
import { Button } from 'antd';


const Post = (props) => {
    const { author, post, delPost, id, personIsLogin } = props
    const delePost = () => {
        console.log(author, id)
        delPost(author, id)
    }
    return (
        <div className="post" draggable>
            <div className="author">{author}</div>
            <div className="postcontent" >{post}</div>
            <div className="button-deletepost">
                <Button
                    type="info"
                    onClick={delePost}
                    disabled={author !== personIsLogin.name}
                >X</Button>
            </div>

        </div>
    )
}

export default Post
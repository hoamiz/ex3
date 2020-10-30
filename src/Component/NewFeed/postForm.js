import { Form, Input, Button, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState, useEffect } from 'react';


const PostForm = (props) => {
    const [isFocus, checkFocus] = useState(false)
    const [input, changeValue] = useState('')
    // useEffect((isFocus) => {
    //     onFocus(isFocus)
    // }, [isFocus]);


    // const onFocus = (isFocus) => {
    //     if (isFocus && document.getElementById("TextArea")) {
    //         document.getElementById("TextArea").focus();
    //         document.getElementById("TextArea").select();
    //     }
    // }
    const onChange = (e) => {
        changeValue(e.target.value)
    }
    const onSubmit = () => {
        if (input.length !== 0) {
            props.postStatus(props.personIsLogin, input)
            changeValue("")
            checkFocus(false)
        }
    }
    const onCancel = () => {
        changeValue("")
        checkFocus(false)
    }

    return (
        <div >
            <Form onMouseLeave={() => checkFocus(false)}>
                <Form.Item
                    name="status"
                    label="status"
                    rules={[
                        {
                            message: 'Input something!',
                        },
                    ]}
                    help={isFocus && input.length === 0 ? "Let's say something..." : ""}
                    style={{
                        width: "90%",
                        display: "flex",
                        margin: "0 50px"
                    }}
                >{isFocus
                    ? <TextArea
                        id="TextArea"
                        placeholder={isFocus ? "what are you thinking ?" : "Let's say something..."}
                        onFocus={() => checkFocus(true)}
                        onChange={onChange}
                        value={input}
                        style={{
                            width: "60%",
                            height: isFocus ? "100px" : "30px"
                        }}
                        autoFocus={isFocus}
                    />
                    : <Input
                        placeholder={isFocus ? "what are you thinking ?" : "Let's say something..."}
                        onFocus={() => checkFocus(true)}
                        onMouseEnter={() => {
                            if (!!input) {
                                checkFocus(true)
                            }
                        }}
                        value={input}
                        style={{
                            width: "60%",
                            height: "30px"
                        }} />}
                    <Row
                        style={{
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                alignSelf: "end",
                                display: isFocus ? "block" : "none"
                            }}
                            onClick={onSubmit}
                        >Post</Button>
                        <Button style={{
                            display: isFocus ? "block" : "none"
                        }}
                            onClick={onCancel}
                        >Cancel</Button>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}

export default PostForm
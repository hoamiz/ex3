import React from 'react'
import { Result } from 'antd'


export const ErrorPage = () => {
    return (
        <div className="errorpage">
            <div style={{
                fontSize: '150px'
            }}>404</div>

            <Result
                status="404"
            />
            <br />
            <div>Sorry, the page you visited does not exist.</div>
            <div>Please try again!</div>
        </div>
    )
}
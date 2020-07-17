import React from 'react';
import { Layout, Button } from 'antd';
import { Table, Modal, Space, Input } from 'antd';
import 'antd/dist/antd.css';
import { deleteProfile, editProfile } from '../../redux/action'
import { connect } from 'react-redux';
import { validate } from './../model/form';
const { Content } = Layout;
const { Column, ColumnGroup } = Table;


class MainContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            personOnEdit: {
                name: {
                    value: '',
                    valid: false,
                },
                password: {
                    value: '',
                    valid: false,
                },
                email: {
                    value: '',
                    valid: false,
                },
                phone: {
                    value: '',
                    valid: false,
                },
            },
            validated: true
        }

    }
    removeProfile = (record) => {
        if (record.key !== '1') this.props.deleteProfile(record.key)
    }
    editProfile = record => {
        const person = {
            name: {
                value: record.name,
                valid: false,
            },
            password: {
                value: record.password,
                valid: false,
            },
            email: {
                value: record.email,
                valid: false,
            },
            phone: {
                value: record.phone,
                valid: false,
            },
        }
        this.setState({
            visible: !this.state.visible,
            personOnEdit: person,
        })
    }
    handleCancel = () => {
        this.setState({
            visible: !this.state.visible,
            validated: true

        })
    }
    handleChange = (e) => {
        let inputValue = e.target.value;
        let statusCopy = Object.assign({}, this.state.personOnEdit);
        statusCopy[e.target.name].value = inputValue;
        this.setState({
            ...this.state,
            personOnEdit: statusCopy
        });
    }
    handleOk = () => {
        this.setState({
            validated: false
        })
        validate(this.state.personOnEdit)

        if (this.state.personOnEdit.password.valid && this.state.personOnEdit.email.valid && this.state.personOnEdit.phone.valid) this.handleSubmit(this.state.personOnEdit)
    }
    handleSubmit = (personOnEdit) => {
        const person = {
            key: '',
            name: personOnEdit.name.value,
            password: personOnEdit.password.value,
            email: personOnEdit.email.value,
            phone: personOnEdit.phone.value,
        }
        this.props.editProfile(person)
        this.setState({
            validated: true,
            visible: !this.state.visible,
        })

    }
    render() {
        const { profiles } = this.props
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280
                }}
            ><Table
                dataSource={profiles} className="table" >
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Email" dataIndex="email" key="email" />
                    <Column
                        title="Phone"
                        dataIndex="phone"
                        key="phone"
                    />

                    <Column
                        title="Action"
                        key="action"
                        render={(rowIndex, record) => (
                            <Space size="middle">
                                <Button
                                    onClick={this.editProfile.bind(this, record)}
                                    type="primary" block>Edit</Button>
                                <Button type="primary" onClick={this.removeProfile.bind(this, record)} danger>Delete</Button>
                            </Space>
                        )}
                    />
                </Table>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    onBlur={this.handleCancel}
                >
                    <label
                        for="name" >user name
                    <Input
                            disabled="true"
                            name="name"
                            value={this.state.personOnEdit.name.value}
                        />
                    </label>
                    <label
                        for="password">password
                        <Input
                            name="password"
                            value={this.state.personOnEdit.password.value}
                            onChange={this.handleChange.bind(this)}
                        />
                        {!this.state.personOnEdit.password.valid && !this.state.validated && <div className="warnigInfo">password is invalid</div>}

                    </label>
                    <label
                        for="email">email
                        <Input
                            name="email"
                            value={this.state.personOnEdit.email.value}
                            onChange={this.handleChange.bind(this)}
                        />
                        {!this.state.personOnEdit.email.valid && !this.state.validated && <div className="warnigInfo">email is invalid</div>}

                    </label>
                    <label
                        for="phone">phone
                        <Input
                            name="phone"
                            value={this.state.personOnEdit.phone.value}
                            onChange={this.handleChange.bind(this)}
                        />
                        {!this.state.personOnEdit.phone.valid && !this.state.validated && <div className="warnigInfo">phone is invalid</div>}
                    </label>
                </Modal>
            </Content >
        )
    }
}
const mapDispatchToProps = dispatch => ({
    deleteProfile: (key) => dispatch(deleteProfile(key)),
    editProfile: (person) => dispatch(editProfile(person))
})
export default connect(null, mapDispatchToProps)(MainContent)
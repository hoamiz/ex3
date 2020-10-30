import React from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Button,
    // Select,
    // InputNumber,
    // Switch,
    // Radio,
    // Slider,
    // Upload,
    // Rate,
    // Checkbox,
    // Row,
    // Col,
} from 'antd';
// import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
// const { Option } = Select;


export const FormOrder = (props) => {
    const { setTopping, topping } = props
    const addBacon = () => {
        setTopping([...topping, "bacon"])
    }
    const addBeef = () => {
        setTopping([...topping, "beef"])
    }
    const addCheese = () => {
        setTopping([...topping, "cheese"])
    }
    const addChicken = () => {
        setTopping([...topping, "chicken"])
    }
    const addPork = () => {
        setTopping([...topping, "pork"])
    }
    const addSalad = () => {
        setTopping([...topping, "salad"])
    }
    const addTomoto = () => {
        setTopping([...topping, "tomoto"])
    }
    console.log(topping)
    return (
        <div className="form-order">FormOrder
            <Form>
                <br />
                <Form.Item className="form-topping" name="checkbox-group" >
                    <span className="form-label">Bacon :</span><Button className="form-button" value="add" onClick={addBacon} shape="round" >add</Button>
                </Form.Item>
                <Form.Item c className="form-topping" name="checkbox-group" >
                    <span className="form-label">BeefStick :</span><Button className="form-button" value="add" onClick={addBeef} shape="round" >add</Button>
                </Form.Item>
                <Form.Item className="form-topping" name="checkbox-group">
                    <span className="form-label">Cheese :</span><Button className="form-button" value="add" onClick={addCheese} shape="round" >add</Button>
                </Form.Item>
                <Form.Item className="form-topping" name="checkbox-group" >
                    <span className="form-label">ChickenFried :</span><Button className="form-button" value="add" onClick={addChicken} shape="round" >add</Button>
                </Form.Item>
                <Form.Item className="form-topping" name="checkbox-group" >
                    <span className="form-label">PorkSteak :</span><Button className="form-button" value="add" onClick={addPork} shape="round" >add</Button>
                </Form.Item>
                <Form.Item className="form-topping" name="checkbox-group" >
                    <span className="form-label">salad :</span><Button className="form-button" value="add" onClick={addSalad} shape="round" >add</Button>
                </Form.Item>
                <Form.Item className="form-topping" name="checkbox-group" >
                    <span className="form-label">tomoto :</span><Button className="form-button" value="add" onClick={addTomoto} shape="round" >add</Button>
                </Form.Item>
            </Form>
        </div >
    )
}
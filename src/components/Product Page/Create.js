import React, {useState} from "react";
import { Button, Form, FormControl, FormGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Fragment } from "react";

function Create(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [createdby, setCreatedby] = useState("");
    const [dateofcreation, setDateofcreation] = useState("");

    let history = useNavigate();

    const handleSubmit = (z) => {
        z.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = title,
        b = description,
        c = price,
        d = brand,
        e = category,
        f = createdby,
        g = dateofcreation;

        Products.push({
            id: uniqueId, 
            title : a, 
            description : b,
            price: c,
            brand : d,
            category : e,
            createdby : f,
            dateofcreation : g 
        });

        history('/Products');

    }

    return (
        <Fragment>
        <div className="create-header"><h1>Enter Product Details</h1></div>
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <FormGroup className="mb-3" controlId="formTitle">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Title" 
                        required onChange={(z) => setTitle(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formDescription">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Description" 
                        required onChange={(z) => setDescription(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formPrice">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Price" 
                        required onChange={(z) => setPrice(z.target.value)}>
                </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBrand">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Brand" 
                        required onChange={(z) => setBrand(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formCategory">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Category" 
                        required onChange={(z) => setCategory(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formCreatedby">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Created by" 
                        required onChange={(z) => setCreatedby(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formDateofcreation">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Date of Creation" 
                        required onChange={(z) => setDateofcreation(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <Button onClick={(z) => handleSubmit(z)} type="submit"> Submit </Button> 
            </Form>
        </div>
        </Fragment>
    );
}

export default Create;


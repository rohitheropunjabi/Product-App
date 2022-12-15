import React, {useState, useEffect} from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Edit(){
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [createdby, setCreatedby] = useState("");
    const [dateofcreation, setDateofcreation] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Products.map(function(z){
        return z.id
    }).indexOf(id);

    const handleSubmit = (z) => {
        z.preventDefault();

        let a = Products[index];
        a.title = title;
        a.description = description;
        a.price = price;
        a.brand = brand;
        a.category = category;
        a.createdby = createdby;
        a.dateofcreation = dateofcreation;         

        history('/Products');
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setDescription(localStorage.getItem('description'))
        setPrice(localStorage.getItem('price'))
        setBrand(localStorage.getItem('brand'))
        setCategory(localStorage.getItem('category'))
        setCreatedby(localStorage.getItem('createdby'))
        setDateofcreation(localStorage.getItem('dateofcreation'))
    },[])

    return (
        <Fragment>
        <div className="create-header"><h1>Enter Product Details</h1></div>
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <FormGroup className="mb-3" controlId="formTitle">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Title" 
                        value={title}
                        required onChange={(z) => setTitle(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formDescription">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Description"
                        value={description} 
                        required onChange={(z) => setDescription(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formPrice">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Price"
                        value={price} 
                        required onChange={(z) => setPrice(z.target.value)}>
                </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBrand">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Brand"
                        value={brand} 
                        required onChange={(z) => setBrand(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formCategory">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Category"
                        value={category} 
                        required onChange={(z) => setCategory(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formCreatedby">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Created by"
                        value={createdby} 
                        required onChange={(z) => setCreatedby(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formDateofcreation">
                    <FormControl 
                        type="text" 
                        placeholder="Enter Date of Creation"
                        value={dateofcreation} 
                        required onChange={(z) => setDateofcreation(z.target.value)}>
                    </FormControl>
                </FormGroup>
                <Link to={'/Products'}>
                    <Button onClick={(z) => handleSubmit(z)} type="submit"> Update </Button>
                </Link> 
            </Form>
        </div>
        </Fragment>
    );
}

export default Edit;
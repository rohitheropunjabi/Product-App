import React, { Fragment, useState } from "react";
import {Button, Table} from "react-bootstrap";
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';

function ProductsHome() {

    let history = useNavigate();
    
    const handleEdit = ( 
        id,
        title, 
        description, 
        price, 
        brand, 
        category, 
        createdby, 
        dateofcreation) => {
        localStorage.setItem('id',id);    
        localStorage.setItem('title',title);
        localStorage.setItem('description',description);
        localStorage.setItem('price',price);
        localStorage.setItem('brand',brand);
        localStorage.setItem('category',category);
        localStorage.setItem('createdby',createdby);
        localStorage.setItem('dateofcreation',dateofcreation);
    }

    const handleDelete = (id) => {
        var index = Products.map(function(z){
            return z.id
        }).indexOf(id);
        
        Products.splice(index,1);

        history('/Products');
    }

    const adminuser = {
        name: "rohit",
        password: "rohit123"
    }
  
    const [user, setUser] = useState({name: "", password: ""});
    const [error, setError] = useState("");

    const Login = info => {
        console.log(info);

        if(info.name === adminuser.name && 
            info.password === adminuser.password)
        {
            console.log("Logged in");
            setUser({
                name: info.name,
                password: info.password
            });
        } else {
            console.log("Incorrect details. Please try again !");
            setError("Incorrect details. Please try again !");
        }
    }

    const Logout = () => {
        setUser({name: "", password: ""});
    }

    return(
        <Fragment>
            <div className="Home">
                <h1>Products Page </h1>
            </div>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Brand
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                Created by
                            </th>
                            <th>
                                Date of Creation
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products && Products.length > 0
                            ?
                            Products.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.description}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.brand}
                                        </td>
                                        <td>
                                            {item.category}
                                        </td>
                                        <td>
                                            {item.createdby}
                                        </td>
                                        <td>
                                            {item.dateofcreation}
                                        </td>
                                        <td>
                                            <Link to="/Edit">
                                                <Button onClick={() => handleEdit(
                                                item.id, 
                                                item.title, 
                                                item.description, 
                                                item.price, 
                                                item.brand, 
                                                item.category, 
                                                item.createdby, 
                                                item.dateofcreation)}> EDIT
                                                </Button>
                                            </Link>
                                            <Button onClick={() => handleDelete(item.id)}> DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data Available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link to="/Create">
                    <Button size="lg"> Add/Create a new Product  </Button>
                </Link>
                <br>
                </br>
                <Link to={'/'}>
                    <Button size="lg" onClick={Logout}>Logout</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default ProductsHome;
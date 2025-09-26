import React from 'react'
import './Laptop.css'
import { Form, Button } from 'react-bootstrap';



function Laptop() {

    const[formData, setFormData] = React.useState({
        brand: "",
        price: "",
        quantity: ""
    })

    const handleInputChange = (event) => {
        const{name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit =async (e) => {
       e.preventDefault();
        console.log(formData);
        try {
            const response=await fetch("http://localhost:8080/api/laptop", {
                method:"POST",
                headers:{"content-Type": "application/json"},
                body:JSON.stringify(formData)
            });
            const data=await response.json();
            console.log(data);
            alert("Laptop added successfully");
            setFormData({
                brand: "",
                price: "",
                quantity: ""
            })
        } catch (error) {
            console.log("error", error);
            alert("Error adding laptop")
            
        }
    }

  return (
    <div className='center-form'>
        <h1>Add New Laptop</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="text"
                    placeholder="Enter Laptop Brand"
                    name='brand'
                    value={formData.brand}
                    onChange={handleInputChange}
                
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="text"
                    placeholder="Enter Laptop Price"
                    name='price'
                    value={formData.price}
                    onChange={handleInputChange}
                
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                    type="text"
                    placeholder="Enter quantity"
                    name='quantity'
                    value={formData.quantity}
                    onChange={handleInputChange}
                
                />
            </Form.Group>
            <Button className='btn btn-primary' type="submit" >
                Submit
            </Button>
        </Form>
    </div>
    
  )
}

export default Laptop
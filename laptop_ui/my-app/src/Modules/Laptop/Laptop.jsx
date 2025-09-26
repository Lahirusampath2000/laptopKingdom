import React from 'react'
import { useState,useEffect} from 'react'
import './Laptop.css'
import { Form, Button } from 'react-bootstrap';
import api from '../../api/axios';



function Laptop() {

    const[formData, setFormData] = useState({
        brand: "",
        price: "",
        quantity: ""
    })

    const[laptops, setLaptops] = useState([])

    const handleInputChange = (event) => {
        const{name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    //post laptop data

    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
        const response = await api.post("/laptop", formData);
        console.log(response.data);
        alert("Laptop added successfully!");
        setFormData({
            brand: "",
            price: "",
            quantity: ""
        });
        }catch(error){
        console.error(error.response?.data || error.message);
        alert("Failed to add laptop. Please try again.");
    }
}

//fetch laptop data
useEffect(() =>{
    const fetchLaptops= async ()=>{
        try {
            const response= await api.get("/laptops")
            setLaptops(response.data);
            
        } catch (error) {
            console.error("Error fetching laptops:", error);
            
        }

    }
    fetchLaptops();
},[])

  return (
    <div className='center-form'>
        <h1>Add New Laptop</h1>
        {/* --- Laptop add Form --- */}
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
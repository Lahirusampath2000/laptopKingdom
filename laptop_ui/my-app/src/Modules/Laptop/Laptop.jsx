import React, { useState, useEffect } from 'react'
import './Laptop.css'
import { Form, Button, Container, Table, Card } from 'react-bootstrap'
import api from '../../api/axios'

function Laptop() {
  const [formData, setFormData] = useState({
    brand: '',
    price: '',
    quantity: '',
    image: null
  })

  const [laptops, setLaptops] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('brand', formData.brand)
    data.append('price', formData.price)
    data.append('quantity', formData.quantity)
    if (formData.image) data.append('image', formData.image)

    try {
      await api.post('/laptop', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      alert('Laptop added successfully!')
      setFormData({ brand: '', price: '', quantity: '', image: null })
      fetchLaptops()
    } catch (error) {
      console.error(error.response?.data || error.message)
      alert('Failed to add laptop. Please try again.')
    }
  }

  const fetchLaptops = async () => {
    try {
      const response = await api.get('/laptops')
      setLaptops(response.data)
    } catch (error) {
      console.error('Error fetching laptops:', error)
    }
  }

  useEffect(() => {
    fetchLaptops()
  }, [])

  return (
    <Container className="laptop-container my-5">
      {/* ===== Form Section ===== */}
      <Card className="shadow-sm p-4 mb-5 form-card mx-auto">
        <h2 className="text-center mb-4">Add New Laptop</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Laptop Brand"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Laptop Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              name="image"
              onChange={handleImageChange}
            />
          </Form.Group>
          <Button className="btn-primary w-100" type="submit">
            Submit
          </Button>
        </Form>
      </Card>

      {/* ===== Table Section ===== */}
      <Card className="shadow-sm p-4 table-card mx-auto">
        <h2 className="text-center mb-4">Laptop List</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {laptops.map((laptop) => (
              <tr key={laptop.id}>
                <td>{laptop.id}</td>
                <td>{laptop.brand}</td>
                <td>{laptop.price}</td>
                <td>{laptop.quantity}</td>
                <td>
                  {laptop.image ? (
                    <img
                      src={`data:image/jpeg;base64,${laptop.image}`}
                      alt="Laptop"
                      width="60"
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  )
}

export default Laptop

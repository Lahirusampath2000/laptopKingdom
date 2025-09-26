import React, { useState, useEffect } from 'react'
import './Laptop.css'
import { Form, Button, Container, Row, Col, Table, Card } from 'react-bootstrap'
import api from '../../api/axios'

function Laptop() {
  const [formData, setFormData] = useState({
    brand: '',
    price: '',
    quantity: ''
  })

  const [laptops, setLaptops] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // POST laptop data
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/laptop', formData)
      console.log(response.data)
      alert('Laptop added successfully!')
      setFormData({ brand: '', price: '', quantity: '' })
      fetchLaptops() // refresh table after add
    } catch (error) {
      console.error(error.response?.data || error.message)
      alert('Failed to add laptop. Please try again.')
    }
  }

  // Fetch laptop data
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
      <Row>
        {/* ===== Left Side – Form ===== */}
        <Col lg={4} md={5} sm={12}>
          <Card className="shadow-sm p-4 mb-4 mb-lg-0 form-card">
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
              <Button className="btn-primary w-100" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        {/* ===== Right Side – Table ===== */}
        <Col lg={8} md={7} sm={12}>
          <Card className="shadow-sm p-4 table-card">
            <h2 className="text-center mb-4">Laptop List</h2>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
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
                      <Button variant="info" size="sm" className="me-2">
                        Edit
                      </Button>
                      <Button variant="danger" size="sm">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Laptop

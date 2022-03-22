import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function EditProfileForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [height, setHeight] = useState("")
    const [bodyweight, setBodyweight] = useState("")
    const [email, setEmail] = useState("")
    
    return (
        <Container>
            <Form id="edit-profile-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" min="18" max="99" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHeight">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" min="36" max="96" placeholder="Height (inches)" value={height} onChange={e => setHeight(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHeight">
                    <Form.Label>Bodyweight</Form.Label>
                    <Form.Control type="number" min="1" max="1000" placeholder="Bodyweight (pounds)" value={bodyweight} onChange={e => setBodyweight(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="primary" type="submit">
                        Done
                    </Button>
                </Stack>
            </Form>
        </Container>
    )
}

export default EditProfileForm
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'

function EditProfileForm({ userInfo, toggleProfilePage, handleUpdateUser }) {
    const [firstName, setFirstName] = useState(userInfo.first_name)
    const [lastName, setLastName] = useState(userInfo.last_name)
    const [age, setAge] = useState(userInfo.age)
    const [height, setHeight] = useState(userInfo.height)
    const [bodyweight, setBodyweight] = useState(userInfo.weight)
    const [email, setEmail] = useState(userInfo.email)
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/update', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                age,
                height,
                weight: bodyweight,
                email
            })
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => handleUpdateUser(user))
                    toggleProfilePage()
                } 
                // else {
                //     r.json().then(data => setErrors(data.errors))
                // }
            })
        // toggleProfilePage()
    }

    return (
        <Container>
            <Form id="edit-profile-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label><b>FIRST NAME:</b></Form.Label>
                    <Form.Control type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label><b>LAST NAME:</b></Form.Label>
                    <Form.Control type="text" placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label><b>AGE:</b></Form.Label>
                    <Form.Control type="number" min="18" max="99" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHeight">
                    <Form.Label><b>HEIGHT:</b></Form.Label>
                    <Form.Control type="number" min="36" max="96" placeholder="Height (inches)" value={height} onChange={e => setHeight(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHeight">
                    <Form.Label><b>BODYWEIGHT:</b></Form.Label>
                    <Form.Control type="number" min="1" max="1000" placeholder="Bodyweight (pounds)" value={bodyweight} onChange={e => setBodyweight(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>EMAIL ADDRESS:</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="light" type="submit">
                        Submit
                    </Button>
                    <Button variant="light" onClick={() => toggleProfilePage()}>
                        Cancel
                    </Button>
                </Stack>

                <br />
                {errors ? <Form.Group>
                    {errors.map(error => {
                        return (
                            <Alert key={error}>
                                {error}
                            </Alert>
                        )
                    })}
                </Form.Group> : null}
            </Form>
        </Container>
    )
}

export default EditProfileForm
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function UserInfo({ userInfo, toggleProfilePage }) {
    const { id, first_name, last_name, age, height, weight, email, password } = userInfo
    return (
        <Container>
            <Form id="user-info">
                <fieldset disabled>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control disabled type="text" placeholder="First name" value={first_name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control disabled type="text" placeholder="Last name" value={last_name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control disabled type="number" min="18" max="99" placeholder="Age" value={age} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control disabled type="number" min="36" max="96" placeholder="Height (inches)" value={height} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHeight">
                        <Form.Label>Bodyweight</Form.Label>
                        <Form.Control disabled type="number" min="1" max="1000" placeholder="Bodyweight (pounds)" value={weight} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control disabled type="email" placeholder="Enter email" value={email} />
                    </Form.Group>
                </fieldset>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="light" onClick={() => toggleProfilePage()}>
                        Edit Profile Information
                    </Button>
                </Stack>
            </Form>
        </Container>
        // <div id="profile">
        //     <h2>First Name: {first_name}</h2>
        //     <h2>Last Name: {last_name}</h2>
        //     <h2>Age: {age}</h2>
        //     <h2>Height: {height} inches</h2>
        //     <h2>Weight: {weight} pounds</h2>
        //     <h2>Email Address: {email}</h2>
        //     <Button variant="light" onClick={() => toggleProfilePage()}>
        //         Edit Profile Information
        //     </Button>
        // </div>
    )
}

export default UserInfo
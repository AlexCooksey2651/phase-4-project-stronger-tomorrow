import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

function UserInfo({ userInfo, toggleProfilePage, handleLogout }) {
    const { first_name, last_name, age, height, weight, email } = userInfo
    
    function deleteProfile() {
        handleLogout()
        fetch('/delete_profile', {
            method: "DELETE",
        })
    }

    return (
        <Container>
            <Form id="user-info">
                <fieldset disabled>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label><b>FIRST NAME:</b></Form.Label>
                        <Form.Control disabled type="text" placeholder="First name" value={first_name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label><b>LAST NAME:</b></Form.Label>
                        <Form.Control disabled type="text" placeholder="Last name" value={last_name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label><b>AGE:</b></Form.Label>
                        <Form.Control disabled type="number" min="18" max="99" placeholder="Age" value={age} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHeight">
                        <Form.Label><b>HEIGHT:</b></Form.Label>
                        <Form.Control disabled type="number" min="36" max="96" placeholder="Height (inches)" value={height} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicHeight">
                        <Form.Label><b>BODYWEIGHT:</b></Form.Label>
                        <Form.Control disabled type="number" min="1" max="1000" placeholder="Bodyweight (pounds)" value={weight} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>EMAIL ADDRESS:</b></Form.Label>
                        <Form.Control disabled type="email" placeholder="Enter email" value={email} />
                    </Form.Group>
                </fieldset>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="light" onClick={() => toggleProfilePage()}>
                        Edit Profile Information
                    </Button>
                    <Button variant="light" onClick={() => deleteProfile()}>
                        Delete Profile
                    </Button>
                </Stack>
            </Form>
        </Container>
    )
}

export default UserInfo
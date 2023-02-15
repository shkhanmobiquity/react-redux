import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { PageTitle } from '../../shared/UI';
import * as validations from '../../core/validations';

const LoginPage = () => {
    // Form
    const {register, handleSubmit, formState: {errors, isSubmitted} } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    console.log('errors', errors)
    // Data vars
    const pageTitle = 'Login';
    // Login form submit
    const onSubmit = (data: any) => {
    }
    return <React.Fragment>
        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <PageTitle>{pageTitle}</PageTitle>
            </div>
        </div>
        <div className="container-fluid">
            <div className="container">
                <div className="col-md-6 m-auto my-5">
                     <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email" 
                                className={errors.email?.message ? 'is-invalid' : ''}
                                {
                                    ...register('email', {
                                        required: 'Email is required',
                                        validate: {
                                            validEmail: validations.email
                                        },
                                    })
                                }
                            />
                            {errors.email?.message && <div className="invalid-feedback">{errors.email?.message}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                className={errors.password?.message ? 'is-invalid' : ''}
                                {
                                    ...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Invalid password length'
                                        }
                                    })
                                }
                            />
                            {errors.password?.message && <div className="invalid-feedback">{errors.password?.message}</div>}
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                     </Form>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default LoginPage;
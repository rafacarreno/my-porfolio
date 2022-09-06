import { useState, useEffect } from 'react';
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from 'emailjs-com';
export const Newsletter = ({ onValidated, status, message, isSpanish }) => {

    const [email, setEmail] = useState('');
    const {EMAIL_SV, EMAIL_TEMP_NEWSLETTER, EMAIL_ID } = process.env

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])
   
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(EMAIL_SV, EMAIL_TEMP_NEWSLETTER, event.target, EMAIL_ID)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        setEmail('');
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>{isSpanish ? 'Suscríbase para recibir novedades' : 'Subscribe to my newsletter'}</h3>
                        {status === 'sending' && <Alert>{isSpanish ? 'Enviando...' : 'Sending...'}</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input
                                    value={email}
                                    type='email'
                                    name='user_email'
                                    required
                                    onChange={
                                        (event) =>
                                            setEmail(event.target.value)}
                                    placeholder={isSpanish ? 'Dirección de correo' : 'Email Address'} />
                                <button type='submit'>{isSpanish ? 'Enviar' : 'Submit'}</button>
                            </div>
                        </form>
                    </Col>

                </Row>
            </div>
        </Col>
    )
}
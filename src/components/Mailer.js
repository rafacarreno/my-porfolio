import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export const Mailer = ({ isSpanish }) => {
    const formInitialDetails = {
        user_name: '',
        user_lastname: '',
        user_email: '',
        user_phone: '',
        user_message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Enviar");
    const [buttonTextEng, setButtonTextEng] = useState("Send");
    const [status, setStatus] = useState({});
    const { REACT_APP_EMAIL_SV, REACT_APP_EMAIL_TEMP, REACT_APP_EMAIL_ID } = process.env

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const sendEmail = (event) => {
        event.preventDefault();
        setButtonText('Enviado...');
        setButtonTextEng('Sending...');
        emailjs.sendForm(REACT_APP_EMAIL_SV, REACT_APP_EMAIL_TEMP, event.target, REACT_APP_EMAIL_ID)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        setFormDetails(formInitialDetails);
        swal(isSpanish?"Mensaje enviado exitosamente.":"Message sent successfully");
        setButtonText("Enviar");
        setButtonTextEng("Send");

    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>{isSpanish ? 'Ponte en contacto' : 'Get In Touch'}</h2>
                                    <form onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    name='user_name'
                                                    required
                                                    value={formDetails.user_name}
                                                    placeholder={isSpanish ? "Nombre" : "First Name"}
                                                    onChange={
                                                        (e) => onFormUpdate('user_name', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    name='user_lastname'
                                                    required
                                                    value={formDetails.user_lastname}
                                                    placeholder={isSpanish ? "Apellido" : "Last Name"}
                                                    onChange={
                                                        (e) => onFormUpdate('user_lastname', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="email"
                                                    name='user_email'
                                                    required
                                                    value={formDetails.user_email}
                                                    placeholder={isSpanish ? "Dirección de correo" : "Email Address"}
                                                    onChange={
                                                        (e) => onFormUpdate('user_email', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="tel"
                                                    name='user_phone'
                                                    value={formDetails.user_phone}
                                                    placeholder={isSpanish ? "Teléfono" : "Phone No."}
                                                    onChange={
                                                        (e) => onFormUpdate('user_phone', e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    name='user_message'
                                                    required
                                                    value={formDetails.user_message}
                                                    placeholder={isSpanish ? "Mensaje" : "Message"}
                                                    onChange={(e) => onFormUpdate('user_message', e.target.value)}></textarea>
                                                <button
                                                    type="submit">
                                                    <span>{isSpanish ? buttonText : buttonTextEng}</span>
                                                </button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/foto.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Banner = ({isSpanish}) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ''}>
                                    <span className="tagline">{isSpanish?'Bienvenidos a mi Porfolio':'Welcome to my Portfolio'}</span>
                                    <h1>{isSpanish?`Hola, soy `:`Hi, I'm`}</h1>
                                    <h1>{`Rafael Carreño `}</h1>
                                    {/* <h1><span className="wrap">{text}</span></h1> */}
                                    <p>{isSpanish?'Estudiante avanzado en Lic. en Administración y Desarrollador Jr. Full Stack, orientado a Frontend tanto en web como mobile. Apasionado en mi desarrollo profesional y mejorando cada dia en este hermoso mundo de la programación.':'Advanced student in Management and Full Stack Developer Jr. , oriented to Frontend both in web and mobile. Passionate about my professional development and improving every day in this beautiful world of programming.'}</p>
                                    <p>{isSpanish?'Hay una frase, muy importante para mi, que me acompaño en todo este proseso y lo sigue haciendo:':'There is a phrase, very important to me, that accompanied me throughout this process and continues to do so:'}</p>
                                    <p>{isSpanish? '"Si no cometes errores es porque no has intentado nada." José Antonio Pascual' :`"If you don't make errors, it's because you haven't tried anything." José Antonio Pascual`}</p>
                                    <button style={{ marginTop: 0 }} >{isSpanish?'Contactar':"Contact"} <ArrowRightCircle size={25} /></button> 
                                    {/* <HashLink to='#connect' style={{ marginTop: 0 }}>
                                        <button className="vvd"><span>Conectar</span></button>
                                    </HashLink> */}
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Headder Img' style={{ width: 330 }} />
                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <h1 style={{ marginTop: 30 }}><span className="wrap">{text}</span></h1>
            </Container> */}
        </section>
    )
}
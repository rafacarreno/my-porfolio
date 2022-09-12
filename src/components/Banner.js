import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/foto2.png';
import argentina from '../assets/img/ar.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Banner = ({ isSpanish }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;
    //----------------MY AGE------------
    const date = new Date();
    const thisYear = date.getFullYear();
    const myBday = new Date('March 31, 1993');
    var age = 0;
    if (date.getMonth() > 2) {
        age = thisYear - myBday.getFullYear()
    } else if (date.getMonth() < 2) {
        age = thisYear - myBday.getFullYear() - 1
    } else if (date.getMonth() === 2) {
        if (date.getDate() === 31) {
            age = thisYear - myBday.getFullYear()
        } else {
            age = thisYear - myBday.getFullYear() - 1
        }
    }

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
                                    <span className="tagline">{isSpanish ? 'Bienvenidos a mi Porfolio' : 'Welcome to my Portfolio'}</span>
                                    <h1>{isSpanish ? `Hola, soy ` : `Hi, I'm`}</h1>
                                    <h1>{`Rafael Carreño `}</h1>
                                    {/* <h1><span className="wrap">{text}</span></h1> */}
                                    <p>{isSpanish ? 'Estudiante avanzado en Lic. en Administración y Desarrollador Jr. Full Stack, orientado a Frontend tanto en web como mobile. Apasionado en mi desarrollo profesional y mejorando cada dia en este hermoso mundo de la programación.' : 'Advanced student in Management and Full Stack Developer Jr. , oriented to Frontend both in web and mobile. Passionate about my professional development and improving every day in this beautiful world of programming.'}</p>
                                    <p>{isSpanish ? 'Hay una frase, muy importante para mi, que me acompaño en todo este proseso y lo sigue haciendo:' : 'There is a phrase, very important to me, that accompanied me throughout this process and continues to do so:'}</p>
                                    <p>{isSpanish ? '"Si no cometes errores es porque no has intentado nada." José Antonio Pascual' : `"If you don't make errors, it's because you haven't tried anything." José Antonio Pascual`}</p>

                                    <HashLink to='#connect' style={{ marginTop: 0 }}>
                                        <button>{isSpanish ? 'Contactar' : "Contact"}<ArrowRightCircle size={25} /></button>
                                    </HashLink>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="cards1" >
                            <div className="face front">
                                <img src={headerImg} alt='Headder Img' />
                                {/* style={{ width: 330 }} */}
                                <h3>Rafael Carreño </h3>
                            </div>
                            <div className="face back">
                                <h3>{isSpanish ? 'INFORMACIÓN' : 'INFORMATION'}</h3>
                                <div className="subtitle">
                                    <div>
                                        <h5>
                                            {isSpanish ? 'Edad' : 'Age'}
                                        </h5>
                                        <h5> {age}</h5>
                                    </div>
                                    <div>
                                        <h5>
                                            {isSpanish ? 'País' : 'Country'}
                                        </h5>
                                        <img src={argentina}
                                            alt='ARG'
                                            style={{ width: 50 }} />
                                    </div>
                                </div>
                                <h5>
                                    {isSpanish ? 'Estudios:' : 'Studies'}
                                </h5>

                                <h6>
                                    {isSpanish ? 'Full Stack Developer Jr. / Estudiante avanzado de Lic. en Administración.' : 'Full Stack Developer Jr. / Advanced student of Management.'}
                                </h6>
                                <h5>
                                    {isSpanish ? 'Experiencia laboral:' : 'Work experience:'}
                                </h5>
                                <h6>
                                    {isSpanish ? 'Seis años de experiencia labora en el sector administrativo y ventas en empresas del sector alimenticio y de salud.' : 'Six years of experience working in the management and sales of companies in the food and health sectors.'}
                                </h6>
                                <h6>
                                    {isSpanish ? 'Realización de proyectos académicos en JavaScript.' : 'Realization of academic projects in JavaScript.'}
                                </h6>
                                <div className='link'>
                                    <a href='#connect'>
                                        {isSpanish ? 'Contactar' : 'Contact'}</a>
                                </div>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <h1 style={{ marginTop: 30 }}><span className="wrap">{text}</span></h1>
            </Container> */}
        </section>
    )
}
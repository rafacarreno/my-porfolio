import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = ({isSpanish}) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                {isSpanish?'Habilidades':'Skills'}
                            </h2>
                            <p>{isSpanish?'Más allá de las habilidades técnicas, considero que la capacidad y predisposición para reinventarse constantemente y la buena comunicación, hacen del profesional.':"Beyond technical skills, I believe that the ability and willingness to constantly reinvent oneself and good communication make a professional."}
                                <br></br> {isSpanish?'Confío en el trabajo en equipo y en el crecimiento que éste aporta a cada uno de sus miembros.':"I trust in teamwork and the growth it brings to each of its members."}</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <a href="https://reactnative.dev/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="reactnative" width="40" height="40" /> </a>
                                    <h5>React Native</h5>
                                </div>
                                <div className="item">
                                    <a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> </a>
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <a href="https://tailwindcss.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" /> </a>
                                    <h5>Tailwind</h5>
                                </div>
                                <div className="item">
                                    <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a>
                                    <h5>Express.js</h5>
                                </div>
                                <div className="item">
                                    <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a>
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a>
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a>
                                    <h5>Postgre SQL</h5>
                                </div>
                                <div className="item">
                                    <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /> </a>
                                    <h5>Postman</h5>
                                </div>
                                <div className="item">
                                    <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" /> </a>
                                    <h5>Firebase</h5>
                                </div>


                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt='colorSharp' />
        </section>
    )

}
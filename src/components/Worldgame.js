import { Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import login from '../assets/PF-Images/1 - login.jpg';
import game from '../assets/PF-Images/2 - game.jpg';
import ranking from '../assets/PF-Images/3 - ranking.jpg';
import perfil from '../assets/PF-Images/4 - perfil.jpg';
import homeadmin from '../assets/PF-Images/21 - homeadmin.jpg';
import useradmin from '../assets/PF-Images/22 - useradmin.jpg';
import gamesadmin from '../assets/PF-Images/23 - gamesadmin.jpg';
import paymentadmin from '../assets/PF-Images/24 - paymentadmin.jpg';
import reviewadmin from '../assets/PF-Images/25 - reviewadmin.jpg';
import loginweb from '../assets/PF-Images/31 - loginweb.jpg';
import gameweb from '../assets/PF-Images/32 - gameweb.jpg';
import worldgameLogo from '../assets/PF-Images/World.png';
import ReactPlayer from "react-player";
import video from '../assets/video/WorldGame.mp4'
//----------------MODAL WINDOW----------
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
// import { useNavigate } from "react-router-dom";

export const Worldgame = ({ isSpanish, isOpened, handleIsOpened }) => {
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
            breakpoint: { max: 390, min: 0 },
            items: 3
        }
    };

    const handleClose = () => {
        handleIsOpened();

    }


    return (

        <Modal isOpen={isOpened} className='modalAux'>
            <ModalHeader>
                <div className="modalheaderAux">
                    <img src={worldgameLogo} alt='worldgameLogo'  />
                    <h2>WORLDGAME</h2>
                    <button onClick={handleClose} style={{ borderColor: 'transparent' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="modalheaderAux2" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>


            </ModalHeader>

            <ModalBody>
                <Container className="worldgame" id='worldgame'>
                    <Col>
                        <p>
                            {
                                isSpanish
                                    ? 'Worldgame es un juego mobile que convina el entretenimiento y el aprendizaje. El objetivo es adivinar un pais mediante una serie de pistas, cuanto menos intentos realices para adivinar el pais, más puntos obtendras.'
                                    : 'Worldgame is a mobile game that combines entertainment and learning. The objective is to guess a country through a series of clues, the fewer attempts you make to guess the country, the more points you get.'}
                        </p>
                        <h3> {isSpanish ? 'Tecnologías' : 'Technologies'} 📚</h3>
                        <h4>Front-End:</h4>
                        <Carousel responsive={responsive} infinite={false} className='worldgame-slider'>
                            <div className="item">
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                        alt="react"
                                        width="10"
                                        height="10" />
                                </a>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                        alt="reactnative"
                                        width="20"
                                        height="20" />
                                </a>
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                                        alt="redux"
                                        width="20" />
                                </a>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                        alt="tailwind"
                                        width="20"
                                        height="20" />
                                </a>
                                <h5>Tailwind</h5>
                            </div>

                            <div className="item">
                                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                        alt="html5"
                                        width="20"
                                        height="20" />
                                </a>
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <a href="https://material.io/components" target="_blank" rel="noreferrer">
                                    <img src="https://github.com/mui/material-ui/raw/master/docs/public/static/logo.svg"
                                        alt="javascript"
                                        width="20"
                                        height="20" />
                                </a>
                                <h5>Material-UI</h5>
                            </div>
                        </Carousel>
                        <h4>Back-End:</h4>
                        <Carousel responsive={responsive} infinite={false} className='worldgame-slider'>

                            <div className="item">
                                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                                        alt="nodejs"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                                        alt="postgresql"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                                        alt="express"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Express.js</h5>
                            </div>
                        </Carousel>
                        <h4>Database:</h4>
                        <Carousel responsive={responsive} infinite={false} className='worldgame-slider'>

                            <div className="item">
                                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                                        alt="postgresql"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Postgre SQL</h5>
                            </div>
                        </Carousel>

                        <h4>{isSpanish ? 'Librerias Adicionales:' : 'Additional Libraries:'}</h4>
                        <Carousel responsive={responsive} infinite={false} className='worldgame-slider'>

                            <div className="item">
                                <a href="https://socket.io" target="_blank" rel="noreferrer">
                                    <img src="https://socket.io/images/logo.svg"
                                        alt="Socket"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Socket-IO</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.chartjs.org/" target="_blank" rel="noreferrer">
                                    <img src="https://www.chartjs.org/img/chartjs-logo.svg"
                                        alt="Chart"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Chart.js</h5>
                            </div>
                            <div className="item">
                                <a href="https://stripe.com" target="_blank" rel="noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png"
                                        alt="stripe"
                                        width="60"
                                        height="60"/>
                                </a>
                                <h5 className="stripe">Stripe</h5> 
                            </div>
                            <div className="item">
                                <a href="https://cloudinary.com/" target="_blank" rel="noreferrer">
                                    <img src="https://cloudinary-res.cloudinary.com/image/upload/c_scale,w_160/cloudinary_logo_for_black_bg.svg"
                                        alt="cloudinary"
                                        width="60"
                                        height="60" />
                                </a>
                                <h5 className="cloudinary">Cloudinary </h5>
                            </div>
                            <div className="item">
                                <a href="https://nodemailer.com" target="_blank" rel="noreferrer">
                                    <img src="https://nodemailer.com/nm_logo_200x136.png"
                                        alt="nodemailer"
                                        width="40"
                                        height="40" />
                                </a>
                                <h5>Nodemailer</h5>
                            </div>
                        </Carousel>


                        <h2><center>{isSpanish ? 'Version Movil' : 'Mobile Version'}</center></h2>
                        <p align="center">
                            <img className='modalIMG' src={login} alt='login' />
                            <img className='modalIMG' src={game} alt='game' />
                        </p>
                        <p align="center">
                            <img className='modalIMG' src={ranking} alt='ranking' />
                            <img className='modalIMG' src={perfil} alt='perfil' />
                        </p>
                        <h2><center>{isSpanish ? 'Panel de Administrador' : 'Administrator Panel'}</center></h2>
                        <p align="center">
                            <img className='modalIMG' src={homeadmin} alt='homeadmin' />
                            <img className='modalIMG' src={useradmin} alt='useradmin' />
                        </p>
                        <p align="center">
                            <img className='modalIMG' src={gamesadmin} alt='gamesadmin' />
                            <img className='modalIMG' src={paymentadmin} alt='paymentadmin' />
                        </p>
                        <p align="center">
                            <img className='modalIMG' src={reviewadmin} alt='reviewadmin' />
                        </p>
                        <h2><center>{isSpanish ? 'Versión Web' : 'Web Version'}</center></h2>
                        <p align="center">
                            <img className='modalIMG' src={loginweb} alt='loginweb' />
                            <img className='modalIMG' src={gameweb} alt='gameweb' />
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // position: 'relative',
                            // top:0,
                            // left:0,
                        }}>
                            <ReactPlayer
                                url={video}
                                controls
                                width='80%'
                                height='60%'
                            />
                        </div>
                    </Col>
                </Container>

            </ModalBody>

            <ModalFooter>
                <Button onClick={handleClose}>{isSpanish ? 'Cerrar' : 'Close'}</Button>
            </ModalFooter>

        </Modal >


    )


};
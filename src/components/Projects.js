import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
// import projImg1 from '../assets/img/project-img1.png';
// import projImg2 from '../assets/img/project-img2.png';
// import projImg3 from '../assets/img/project-img3.png';
import projImg1 from '../assets/img/pokeapi.jpg';
import projImg2 from '../assets/img/Worldgame.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = ({ isSpanish }) => {
    const projects = [
        {
            title: "Pokémon API",
            description: isSpanish ? "Diseño y desarrollo" : "Design & Development",
            imgUrl: projImg1,
            deploy: "https://pokemon-app-bice-kappa.vercel.app/",
        },
        {
            title: "WorldGame",
            description: isSpanish ? "Proyecto grupal" : "Group project",
            imgUrl: projImg2,
            deploy: "https://pokemon-app-bice-kappa.vercel.app/",
        },

    ]
    return (
        <section className="project" id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ''}>
                                    <h2>{isSpanish ? 'Proyectos' : "Proyects"}</h2>
                                    <p>{isSpanish ? 'Les comparto los proyectos en los que estuve trabajando y en los que estan aún en desarrollo.' : "I share with you the projects I have been working on and those that are still in development."} </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1°</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2°</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >3°</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                 
                                                <ProjectCard
                                                    isSpanish={isSpanish}
                                                    key={index}
                                                    {...project}
                                                />
                                                
                                            )
                                            }
                                            )  
                                        }
                                        
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>{isSpanish ? 'Próximamente...' : 'Coming soon...'}</Tab.Pane>
                                <Tab.Pane eventKey='third'>{isSpanish ? 'Próximamente...' : 'Coming soon...'}</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='colorSharp2' />
        </section>
    )
}
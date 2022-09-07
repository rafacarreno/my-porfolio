import { useState} from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
//----------------MODAL WINDOW----------
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css'
import {Worldgame} from "./Worldgame";
export const ProjectCard = ({ title, description, imgUrl, deploy, isSpanish }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt='imgProject' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div></div>
                    {title === 'Pokémon API'
                        ? <a href={deploy}><button style={{ borderColor: 'transparent' }}><h6 style={{ color: 'white', marginTop: 15 }}>{isSpanish ? 'Abrir' : 'Open'}</h6></button></a>
                        : <div>
                            <button
                                style={{ borderColor: 'transparent' }}
                                onClick={handleOpen}
                            >
                                <h6 style={{ color: 'white', marginTop: 15 }}>
                                    {isSpanish ? 'Abrir' : 'Open'}
                                </h6>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <Worldgame
            isSpanish = {isSpanish}
            isOpened = {open}
            handleIsOpened = {handleOpen}            
            />
        </Col>
        
    )

}
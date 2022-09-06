import { Row, Col, Container } from 'react-bootstrap';
// import { MailchimpForm } from './MailchimpForm';
import linkedin from '../assets/img/linkedin-white.png';
import gitHub from '../assets/img/github-white.png';
import calendar from '../assets/img/calendar-white.png';

export const Footer = ({isSpanish}) => {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    {/* <MailchimpForm isSpanish = {isSpanish}/> */}
                    <Col sm={6}>
                        <h1>Rafael Carreño</h1>
                        {/* <img src={logo} alt='Logo' /> */}
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/rafaelcarreno/"><img src={linkedin} alt="linkedin" style={{ width: '70%' }} /></a>
                            <a href="https://github.com/rafacarreno"><img src={gitHub} alt="gitHub" style={{ width: '70%' }} /></a>
                            <a href="https://calendly.com/rafacarreno/interviews"><img src={calendar} alt="calendar" style={{ width: '70%' }} /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>

                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
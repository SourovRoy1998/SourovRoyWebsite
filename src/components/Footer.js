import React from 'react';
import Container from 'react-bootstrap/Container';
import {
    LinkedinIcon,
    EmailIcon,
    RedditIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon
} from "react-share";

function Footer() {
    return (
        <>
            <footer className="footer" style={{ backgroundColor: '#cccccc' }}>
                <Container>
                    <p> <b>Let's Connect</b> </p>
                    <div>
                        <LinkedinIcon
                            size={32}
                            round={true}
                            style={{ marginRight: '10px' }}
                        />
                        <EmailIcon
                            size={32}
                            round={true}
                            style={{ marginRight: '10px' }}
                        />
                        <TwitterIcon
                            size={32}
                            round={true}
                            style={{ marginRight: '10px' }}
                        />
                        <RedditIcon
                            size={32}
                            round={true}
                            style={{ marginRight: '10px' }}
                        />
                        <TelegramIcon
                            size={32}
                            round={true}
                            style={{ marginRight: '10px' }}
                        />
                        <WhatsappIcon
                            size={32}
                            round={true}
                            style={{ marginRight: '10px' }}
                        />
                    </div>
                </Container>
            </footer>
        </>);
}

export default Footer;
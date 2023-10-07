import Button from 'react-bootstrap/Button';
import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <>
                <Button variant="primary" style={{float: "right", margin: '10px'}}>
                    Download
                </Button>
            </>
        )
    }
}


export default Resume;
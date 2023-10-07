import React from 'react';
import ItemCard from './ItemCard';
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css';

class Bengali extends React.Component {
    render() {
        return (
            <>
                <CardGroup>
                    <ItemCard
                        className="custom-card"
                        title="Placeholder Title"
                        text="Placeholder description."
                        source="https://via.placeholder.com/150"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Placeholder Title"
                        text="Placeholder description."
                        source="https://via.placeholder.com/150"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Placeholder Title"
                        text="Placeholder description."
                        source="https://via.placeholder.com/150"
                    />
                </CardGroup>
                <br />
                <CardGroup>
                    <ItemCard
                        className="custom-card"
                        title="Placeholder Title"
                        text="Placeholder description."
                        source="https://via.placeholder.com/150"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Placeholder Title"
                        text="Placeholder description."
                        source="https://via.placeholder.com/150"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Placeholder Title"
                        text="Placeholder description."
                        source="https://via.placeholder.com/150"
                    />
                </CardGroup>
            </>
        )
    }
}


export default Bengali;
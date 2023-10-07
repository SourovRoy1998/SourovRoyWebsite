import React from 'react';
import ItemCard from './ItemCard';
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css';

class Humanities extends React.Component {
    render() {
        return (
            <>
                <CardGroup>
                    <ItemCard
                        className="custom-card"
                        title="John Keats & Negative Capability"
                        text="The Secret Of Artistic Genius According To The Romantic Poet"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*swFqzecAqbGblihrJLLf-g.jpeg"
                        link="https://medium.com/@roy.sourov/john-keats-negative-capability-d56a300687cb"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Bullshit: Brandolini’s Law, Dostoevsky & Feynman"
                        text="Why It Takes More Effort To Refute Nonsense Than It Does To Create It"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*2hMo2Jpr6psU0lcmaYzs4A.jpeg"
                        link="https://medium.com/@roy.sourov/bullshit-brandolinis-law-dostoevsky-feynman-2e48089dbf84"
                    />
                    <ItemCard
                        className="custom-card"
                        title=""
                        text=""
                        img=""
                        link=""
                    />
                    <ItemCard
                        className="custom-card"
                        title=""
                        text=""
                        img=""
                        link=""
                    />
                </CardGroup>
            </>
        )
    }
}


export default Humanities;
import React from 'react';
import ItemCard from './ItemCard';
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css';

class Science extends React.Component {
    render() {
        return (
            <>
                <CardGroup>
                    <ItemCard
                        className="custom-card"
                        title="Plotting 3D Using Python: Wireframe & Surface Plots"
                        text="A Step by Step Process To Plot 3D Graph Using Python"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U5kjZhO1_2tan9D2_rDCwQ.png"
                        link="https://medium.com/@sourov.roy/plotting-3d-using-python-wireframe-surface-plots-42eebc81a507"
                    />
                    <ItemCard
                        className="custom-card"
                        title="MathJax Basic: Quick Reference"
                        text="An Introduction On How To Use MathJax Library In Python"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*I560VjVnXjMW-DGO5BpZzw.jpeg"
                        link="https://medium.com/@sourov.roy/mathjax-basic-quick-reference-eeba0f59b1b7"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Plotting Network Using Python: NetworkX Library"
                        text="An Introduction On How To Plot Network In Python"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kiIl5_uGQvu_unGW7JhDrg.jpeg"
                        link="https://medium.com/@sourov.roy/plotting-network-using-python-networkx-library-491d495504e7"
                    />
                    <ItemCard
                        className="custom-card"
                        title="Math: A Fascinating Property Of eˣ"
                        text="A Exploration On The Uniqueness Of the Function eˣ"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EZLWQvBEssepkX3PK3LVmQ.jpeg"
                        link="https://medium.com/@sourov.roy/math-a-curious-case-of-e%CB%A3-2d233a3965e9"
                    />
                </CardGroup>
                <br />
                <CardGroup>
                    <ItemCard
                        className="custom-card"
                        title="Boltzmann Brain: A Thermodynamics Paradox"
                        text="A Discussion On The Consciousness And Nature of Reality"
                        img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*LsduMDpncA7cH5pfmvq90w.jpeg"
                        link="https://medium.com/@sourov.roy/boltzmann-brain-a-thermodynamics-paradox-2ad6c330706"
                    />
                    <ItemCard
                        className="custom-card"
                        title=""
                        text=""
                        img=""
                    />
                    <ItemCard
                        className="custom-card"
                        title=""
                        text=""
                        img=""
                    />
                    <ItemCard
                        className="custom-card"
                        title=""
                        text=""
                        img=""
                    />
                </CardGroup>
            </>
        )
    }
}


export default Science;
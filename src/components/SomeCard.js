import React, { Component } from 'react';

import { Button, Card, Elevation } from "@blueprintjs/core";
import { Colors } from "@blueprintjs/core";

import {useSpring, animated} from 'react-spring'

import './SomeCard.css'

const SomeCard = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div style={props}>
            <Card
                interactive={false}
                elevation={Elevation.TWO}
                className="styles"
                style={{ color: Colors.GRAY1, background: Colors.GRAY3 }}
            >
                <h5><a href="#">This is a card heading</a></h5>
                <p >Card content</p>
                <Button intent="primary"
                >Submit</Button>
            </Card>
        </animated.div>
    )
};



export default SomeCard;

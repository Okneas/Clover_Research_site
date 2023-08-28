import React, { MouseEvent, MouseEventHandler } from "react";
import './cloverReaserch.css'

interface IClover {
    left: number;
    hovered: boolean;
  }

export class Clover extends React.Component<{}, IClover>{
    constructor(props: {}) {
        super(props);
        this.state = {
            left: -133,
            hovered: false,
        };
    }
    handleMouseEnter = () => {
        this.setState({
            hovered: true,
        });
    };

    handleMouseLeave = () => {
        this.setState({
            hovered: false,
        });
    };
    render() {
        const {hovered} = this.state;
        const scale = hovered? 1.2 : 1;

        return (
            <img className="clever" src="..\images\clever.png"
            style={{
            transform: `translateX(${this.state.left}px) scale(${scale})`,
            transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            ></img>
        );
    }
}


class CloverResearch extends React.Component{
    render(){
        return (
            <div className="frame-1">
                <div className="rect">
                    <img className="whiteRect" src="..\images\rect1.png"/>
                    <img className="deepBlueRect" src="..\images\rect2.png"/>
                    <div className="clover-research">Что такое <br />Clover Research?</div>
                    <div className="r">Маркетинговые исследования в медицине и фармацевтике</div>
                    <div className="line-green"></div>
                    <div className="butto">Целевая аудитория - врачи</div>
                </div>
                <img className="white-line" src="..\images\white_stripe.png"/>
                <img className="green-line" src="..\images\green_stripe.png"/>
                <div className="WoodenHand">
                    <img width= '630px' height= '700px' src="..\images\hand.png"/>
                    <img className="phone" src="..\images\iphone.png"/>
                    <img className="design" src="..\images\Mockup.png"/>
                    <div className="clever"><Clover/></div>
                </div>
                <div className="tagName"><img src="..\images\Clover Research.png"/></div>
            </div>
        )
    }
}

export default CloverResearch;
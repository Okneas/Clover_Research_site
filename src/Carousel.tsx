import React from "react";
import "./frame3.css"
import Phone from "./Phone";

export class Carousel extends React.Component{
    state ={
        move: 0,
        slide: 1
    }

    handlerOnClickRigth = () => {
        if(this.state.slide < 3){
            this.setState(() => ({
                slide: this.state.slide + 1
            }));
            this.setState(() => ({
                move: this.state.move + 1590 
            }));
        }
    }

    handlerOnClickLeft = () => {
        if(this.state.slide > 1){
            this.setState(() => ({
                slide: this.state.slide - 1
            }));
            this.setState(() => ({
                move: this.state.move - 1590 
            }));
        }
    }

    render() { 
        const {move, slide} = this.state;
        let rigthIsVis = 1, leftIsVis = 0;
        let el1 = 2.5, el2 = 1, el3 = 1;

        if(slide == 3){
            el3 = 2.5;
            el1 = 1;
            el2 = 1;
            rigthIsVis=0;
        }
        else{
            rigthIsVis = 1;
        }

        if(slide == 1){
            el1 = 2.5;
            el2 = 1;
            el3 = 1;
            leftIsVis=0;
        }
        else{
            leftIsVis = 1;
        }

        if(slide == 2){
            el1 = 1;
            el2 = 2.5;
            el3 = 1;
        }

        return(
            <div className="slider">
                <div style={{
                    transform: `translateX(${-move}px)`,
                    transition: "transform 1s ease-in-out",
                }}>
                    <div className="slide1">
                        <Phone imageUrl="..\images\phone4.png"/>
                        <Phone imageUrl="..\images\phone5.png" left={415}/>
                    </div>
                    <div className="slide2">
                        <Phone imageUrl="..\images\phone6.png"/>
                        <Phone imageUrl="..\images\phone9.png"left={415}/>
                    </div>
                    <div className="slide3">
                        <Phone imageUrl="..\images\phone7.png"/>
                        <Phone imageUrl="..\images\phone8.png"left={415}/>
                    </div>
                </div>
                <div className="group-7857">
                    <div className="ellipse-174" style={{
                        transform:`scale(${el1})`,
                        transition: "transform 1s ease-in-out",
                        background:`${el1===2.5 ? "#83ad32" : "#dde3d3"}`
                    }}></div>
                    <div className="ellipse-175"style={{
                        transform:`scale(${el2})`,
                        transition: "transform 1s ease-in-out",
                        background:`${el2===2.5 ? "#83ad32" : "#dde3d3"}`
                    }}></div>
                    <div className="ellipse-176"style={{
                        transform:`scale(${el3})`,
                        transition: "transform 1s ease-in-out",
                        background:`${el3===2.5 ? "#83ad32" : "#dde3d3"}`
                    }}></div>
                </div>
                <img src="..\images\arrow.png" alt="" className="arrowRigth" onClick={this.handlerOnClickRigth} style={{
                    opacity:rigthIsVis
                }}/>
                <img src="..\images\arrow.png" alt="" className="arrowLeft" onClick={this.handlerOnClickLeft} style={{
                    opacity:leftIsVis
                }}/>
            </div>
        );
    }
} 
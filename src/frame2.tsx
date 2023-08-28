import React from "react";
import "./frame2.css"
import Phone from "./Phone";
import Prototype from "./prototypes";

interface IPanel{
    className?: string, 
    id: string
}

export class Panel extends React.Component<IPanel>{
    state = {
        hovered: false
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
        const {className, id} = this.props;
        const {hovered} = this.state;
        const scale = hovered? 1.5 : 1;
        const sc = "..\\images\\panel"+id+".png"

        return (
            <div className={className}>
                <img src={sc}
                style={{
                width: 230,
                height: 85,
                borderRadius: 15,
                boxShadow: "0px 15px 25px 5px gray",
                transform: `scale(${scale})`,
                transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                ></img>
            </div>
        );
    }
}

interface IStaticClover {
    width?: number;
    heigth?: number;
    className?: string;
    degries?: number;
}

export class StaticClover extends React.Component<IStaticClover>{
    state = {
        hovered:false
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
        const {className, heigth, width} = this.props;
        const {hovered} = this.state;
        const scale = hovered? 1.2 : 1;

        return (
            <div className={className}>
                <img src="..\images\clever.png"
                style={{
                width:width,
                height:heigth,
                transform: `scale(${scale})`,
                transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                ></img>
            </div>
        );
    }
}

class Frame2 extends React.Component{
    render(){
        return(
            <div className="frame2">
                <img className="backg" src="..\\images\\backgrondWhite.png"></img>
                <div>
                    <Phone imageUrl="..\images\phone1.png" top={0} left={330} className="phoneFrame2"/>
                    <Phone imageUrl="..\images\phone2.png" top={0} left={794} className="phoneFrame2"/>
                    <Phone imageUrl="..\images\phone3.png" top={0} left={1249} className="phoneFrame2"/>
                </div>
                <div className="thirteen">30+</div>
                <div className="proto">прототипов</div>
                <div className="ux">Провели UX-аналитику, предусмотрели все сценарии использования</div>
                <div className="prototypes">
                    <img src="..\images\rectGray.png"/>
                    <Prototype imageUrl="..\images\groupPhones1.png" left={-200} top={-800} MoveY={700}/>
                    <Prototype imageUrl="..\images\groupPhones2.png" left={100} top={-800} MoveY={-700}/>
                    <Prototype imageUrl="..\images\groupPhones1.png" left={400} top={-800} MoveY={700}/>
                    <Prototype imageUrl="..\images\groupPhones3.png" left={700} top={-800} MoveY={-700}/>
                    <Prototype imageUrl="..\images\groupPhones1.png" left={1000} top={-800} MoveY={700}/>
                </div>
                <div className="frame-1336523064">
                    <div className="line-20"></div>
                    <div className="one">Зачем нужны опросники для врачей?</div>
                    <div className="frame-1336523562">
                        <ul className="two">
                            <li>Опыт использования медицинских препаратов</li>
                            <li>Социологические исследования</li>
                            <li>Live-аналитика</li>
                        </ul>
                    </div>
                    <img src="..\images\list.png" alt="" className="list1"/>
                    <div className="clover1">
                        <StaticClover className="clever1" degries={100} width={110} heigth={110}/>
                        <StaticClover className="clever2" degries={100} width={44} heigth={44}/>
                        <StaticClover className="clever3" degries={0} width={41} heigth={41}/>
                        <StaticClover className="clever4" width={63} heigth={63} degries={60}/>
                    </div>
                    <div>
                        <Panel id="1" className="panel1"/>
                        <Panel id="2" className="panel2"/>
                        <Panel id="3" className="panel3"/>
                        <Panel id="4" className="panel4"/>
                    </div>

                </div>

            </div>
        );
    }
}

export default Frame2;



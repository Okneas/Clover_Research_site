import React from "react";
import './frame4.css'
import './frame3.css'
import Phone from "./Phone";
import { relative } from "path";

interface IIcon{
    time?:number;
    id?: string;
    left?:number;
    top?:number;
}

export class Icon extends React.Component<IIcon>{
    render() {
        const {time, id, left, top} = this.props;
        const sc = "..\\images\\icon"+id+".png"
        console.log(sc);
        return(
            <div style={{width:31,
                         height:33,
                         top:top,
                         left:left,
                         position:"absolute",
                                }}>
                <img src={sc} style={{
                    top:top,
                    left:left,
                    animation: `float ${time}s ease-in-out infinite`
                }}/>
            </div>
        );
    }
}

export class Frame4 extends React.Component{
    render() {
        return(
            <div className="frame4">
                <div className="features">
                    <div className="blurPhones">
                        <img src="..\images\groupPhones4.png"/>
                    </div>
                    <div className="textFrame4-1">
                        <div className="textUp">
                            <span><span className="span123">Фишка проекта<br /></span><span className="span2">чат-бот</span></span>
                        </div>
                        <div className="textMid">Хелп-деск помогает пользователям заполнять данные</div>
                        <ul className="listFunc1">
                            <li className="li6"><p style={{top:-18, position:"absolute", color:"white"}}>Личные данные</p></li>
                            <li className="li7"><p style={{top:62, position:"absolute", color:"white"}}>Регистрация</p></li>
                            <li className="li8"><p style={{top:142, position:"absolute", color:"white"}}>Опросы</p></li>
                        </ul>
                    </div>
                </div>
                <div className="questions">
                    <div className="icons">
                        <Icon id="1" time={4} left={175} top={0}/>
                        <Icon id="2" time={5} left={297} top={58}/>
                        <Icon id="3" time={6} left={393} top={133}/>
                        <Icon id="4" time={7} left={325} top={228}/>
                        <Icon id="5" time={3} left={0} top={47}/>
                    </div>
                    <div className="textFrame2-2">
                        <div className="frame-1336523066">
                            <div className="line-22"></div>
                            <div className="spic">Разные виды<br />вопросов</div>
                            <div className="frame-13365230662">
                                <div className="tex">Скринеры определяют, подходит ли пользователю опрос</div>
                                <div className="tex">
                                С простыми или условными переходами зависят от ответов пользователей
                                </div>
                            </div>
                            <div className="group-1336523065">
                                <div className="tex1">Прост в использовании</div>
                                <div className="rectangle-1478"></div>
                            </div>
                        </div>
                    </div>
                    <Phone imageUrl="..\images\phone10.png" top={0} left={593}/>
                    <Phone imageUrl="..\images\phone11.png" top={0} left={950}/>
                </div>
            </div>
        );
    }
}
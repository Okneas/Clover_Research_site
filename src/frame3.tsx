import React from "react";
import "./frame3.css"
import { Carousel } from "./Carousel";
import { url } from "inspector";

export class Frame3 extends React.Component{
    render(){
        return(
            <div className="frame3">
                <div className="text1">От прототипов <br />до уникального дизайна</div>
                <Carousel/>
                <div className="text2">
                    <div className="line-21"></div>
                    <div className="clover-res">Функционал Clover Research</div>
                    <ul className="listFunc">
                        <li className="li1"><p style={{top:-12, position:"absolute"}}>Регистрация пользователя</p></li>
                        <li className="li2"><p style={{top:83, position:"absolute"}}>Получение актуальных опросов по тематике</p></li>
                        <li className="li3"><p style={{top:180, position:"absolute"}}>Помощь с заполнением данных через чат-бот онлайн</p></li>
                        <li className="li4"><p style={{top:278, position:"absolute"}}>Разделение опросов для разных специалистов</p></li>
                        <li className="li5"><p style={{top:370, position:"absolute"}}>Разделение опросов для разных специалистов</p></li>
                    </ul>
                </div>
            </div>
        );
    }
}
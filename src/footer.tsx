import React from 'react'
import './footer.css'


export class Mark extends React.Component{
    state = {
        marked: 0
    }

    handlerOnClick = () =>{
        if(this.state.marked){
            this.setState({
                marked: 0
            });
        }
        else{
            this.setState({
                marked: 1
            });  
        }
    }

    render() {
        const {marked} = this.state;
        return(
            <div style={{
                width:20,
                height:20,
                borderWidth: 1,
                borderColor: "black",
                position:"relative"
            }}>
            <svg
            opacity={marked}
            onClick={this.handlerOnClick}
            className="exclude"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0.125C2.23858 0.125 0 2.36358 0 5.125V15.125C0 17.8864 2.23858 20.125 5 20.125H15C17.7614 20.125 20 17.8864 20 15.125V5.125C20 2.36358 17.7614 0.125 15 0.125H5ZM14.6402 6.3568C15.0645 6.71037 15.1218 7.34093 14.7682 7.76521L9.76823 13.7652C9.59366 13.9747 9.34111 14.1038 9.06907 14.1226C8.79704 14.1415 8.52911 14.0484 8.32733 13.865L5.32733 11.1377C4.91868 10.7662 4.88856 10.1337 5.26007 9.72508C5.63157 9.31642 6.26402 9.28631 6.67268 9.65781L8.90016 11.6828L13.2318 6.48484C13.5853 6.06056 14.2159 6.00324 14.6402 6.3568Z"
                fill="#F86161"
            />
            </svg>
            </div>
        );
    }
}

export class Footer extends React.Component{
    render(){
        return(
            <div className='foo1'>
                <div className='contacts'>
                    <div className='address'>
                        <div className="con">Контакты</div>
                        <div className="frame-1336523700">
                            <div className="frame-1336523759">
                            <div className="frame-1336523687">
                                <div className="telegram">Telegram</div>
                                <div className="telegram2">
                                <svg
                                    className="frame-1336522991"
                                    width="38"
                                    height="34"
                                    viewBox="0 0 38 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M14.1096 20.1813L13.7256 25.7653C14.2751 25.7653 14.513 25.5213 14.7984 25.2283L17.3744 22.6833L22.7122 26.7243C23.6912 27.2883 24.3809 26.9913 24.645 25.7933L28.1487 8.8214L28.1497 8.8204C28.4602 7.3244 27.6263 6.73941 26.6725 7.1064L6.07779 15.2574C4.67224 15.8214 4.69352 16.6314 5.83886 16.9984L11.1041 18.6913L23.3342 10.7804C23.9098 10.3864 24.4331 10.6044 24.0027 10.9984L14.1096 20.1813Z"
                                    fill="white"
                                    />
                                </svg>
                                </div>
                            </div>
                            <div className="_8-800-234-32-62">8 800 234 32 62</div>
                            </div>
                            <div className="group-237814">
                            <div className="hello-joy-dev-com">hello@joy-dev.com</div>
                            </div>
                            <div className="_127282-4-1-1-v-14-87">
                            Россия, 127282, Москва г, Студёный проезд, дом 4, корпус 1, Э 1/ПОМ V/К
                            14/ОФ 87
                            </div>
                        </div>
                    </div>
                    <div className='social'>
                        <div className="subscribe">Подписывайтесь</div>
                        <div className='links'>
                            <img src="..\images\link1.png"/>
                            <img src="..\images\link2.png"/>
                            <img src="..\images\link3.png"/>
                            <img src="..\images\link4.png"/>
                            <img src="..\images\link5.png"/>
                        </div>
                    </div>
                </div>
                <div className='registration'>
                    <div className="t">Давайте знакомиться!</div>
                    <div className="t1">Мы всегда рады сотрудничеству и новым проектам</div>
                    <div>
                        <input className='name' placeholder='Ваше имя *'></input>
                        <input className='telephone' placeholder='Номер телефона *'></input>
                        <input className='idea' placeholder='Расскажите немного о вашей идее'></input>
                        <div className="hicon-outline-attachment">
                            <svg
                                className="attachment"
                                width="17"
                                height="23"
                                viewBox="0 0 17 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M10.7082 2.68018C11.3228 2.37464 12.0452 2.28373 12.7601 2.47532C14.3161 2.89223 15.2395 4.49155 14.8225 6.04749L12.45 14.9018C12.0331 16.4578 10.4338 17.3811 8.87786 16.9642C7.32192 16.5473 6.39855 14.948 6.81547 13.392L7.76447 9.8503C7.87168 9.4502 7.63424 9.03895 7.23414 8.93174C6.83404 8.82454 6.42279 9.06198 6.31558 9.46208L5.36658 13.0038C4.73525 15.3599 6.13349 17.7818 8.48963 18.4131C10.8458 19.0444 13.2676 17.6462 13.8989 15.29L16.2714 6.43572C16.9028 4.07958 15.5045 1.65775 13.1484 1.02643C12.0669 0.736652 10.9698 0.874988 10.0405 1.33698C9.47059 1.62027 8.96257 2.0257 8.55804 2.53004C8.29886 2.85315 8.3507 3.32519 8.67381 3.58436C8.99693 3.84353 9.46896 3.7917 9.72813 3.46858C9.99471 3.13625 10.3305 2.86792 10.7082 2.68018Z"
                                fill="black"
                                />
                                <path
                                d="M4.22274 8.9013C4.63966 7.34536 6.23897 6.42199 7.79492 6.83891C9.35086 7.25582 10.2742 8.85513 9.85731 10.4111L8.90831 13.9528C8.8011 14.3529 9.03854 14.7642 9.43864 14.8714C9.83874 14.9786 10.25 14.7411 10.3572 14.341L11.3062 10.7993C11.9375 8.44316 10.5393 6.02134 8.18314 5.39002C5.827 4.75869 3.40518 6.15693 2.77385 8.51307L0.401346 17.3674C-0.22998 19.7235 1.16826 22.1454 3.5244 22.7767C4.60586 23.0665 5.70295 22.9281 6.63232 22.4661C7.20219 22.1828 7.71021 21.7774 8.11474 21.2731C8.37391 20.95 8.32208 20.4779 7.99897 20.2187C7.67585 19.9596 7.20382 20.0114 6.94464 20.3345C6.67807 20.6669 6.34228 20.9352 5.96461 21.1229C5.34997 21.4285 4.62762 21.5194 3.91263 21.3278C2.35669 20.9109 1.43332 19.3116 1.85023 17.7556L4.22274 8.9013Z"
                                fill="black"
                                />
                            </svg>
                        </div>
                        <div className="_10">Прикрепить файлы (до 10 шт)</div>
                        <div className="pdf-docx-odt-ods-xls-x-txt">
                        Пожалуйста, загрузите файл формата: .pdf, .docx, .odt, .ods, .xls/x,.txt
                        </div>
                        <div className="policie">
                            <span><span className="span4">Я принимаю </span><span className="span5">Политику конфиденциальности</span></span>
                            <div className='mark'>
                                <Mark></Mark>
                            </div>
                        </div>
                            <div className="frame-237746">
                            <div className="textButton">Отправить</div>
                        </div>
                    </div>
                </div>
                <div className="footer12">
                    <div className="rectangle-1694"></div>
                    <div className="frame-1336522445">
                        <div className="frame-1336522444">
                        <svg
                            className="copyright-symbol-icon-icons-com-70218-1"
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_1090_301)">
                            <path
                                d="M12.2812 7C12.2812 3.79886 9.70114 1.21875 6.5 1.21875C3.29886 1.21875 0.71875 3.79886 0.71875 7C0.71875 10.2011 3.29886 12.7812 6.5 12.7812C9.70114 12.7812 12.2812 10.2011 12.2812 7ZM0.5 7C0.5 3.70114 3.20114 1 6.5 1C9.79886 1 12.5 3.70114 12.5 7C12.5 10.2989 9.79886 13 6.5 13C3.20114 13 0.5 10.2989 0.5 7Z"
                                fill="black"
                                stroke="black"
                            />
                            <path
                                d="M8.04375 8.86875C7.6375 9.19375 7.06875 9.4375 6.5 9.4375C5.11875 9.4375 4.0625 8.38125 4.0625 7C4.0625 5.61875 5.11875 4.5625 6.5 4.5625C7.15 4.5625 7.8 4.80625 8.20625 5.29375L9.1 4.4C8.45 3.75 7.475 3.34375 6.5 3.34375C4.46875 3.34375 2.84375 4.96875 2.84375 7C2.84375 9.03125 4.46875 10.6562 6.5 10.6562C7.39375 10.6562 8.125 10.3313 8.775 9.84375L8.04375 8.86875Z"
                                fill="black"
                            />
                            </g>
                            <defs>
                            <clipPath id="clip0_1090_301">
                                <rect
                                width="13"
                                height="13"
                                fill="white"
                                transform="translate(0 0.5)"
                                />
                            </clipPath>
                            </defs>
                        </svg>

                        <div className="frame-1336522478">
                            <div className="_2023-joy-dev">
                            <span><span className="_2023-joy-dev-span">2023 Joy Dev. Все права защищены. </span><span className="_2023-joy-dev-span2">Политика конфиденциальности</span></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
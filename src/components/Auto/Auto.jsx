import React, { Component } from "react";
import ReactDOM from 'react-dom';


//Event
// import EventManager from "../../../EventManager";


//SVG
import Register from './svg/Register.svg'
import RegisterActive from './svg/Register-active.svg'
import Auth from './svg/Auth.svg'
import AuthActive from './svg/AuthActive.svg'
import BgDesign from './svg/BgDesign.svg'
import iconLoginDefault from './svg/login-default.svg';
import iconLoginActive from './svg/login-active.svg';
import iconEmailDefault from './svg/email-default.svg';
import iconEmailActive from './svg/email-active.svg';
import iconPasswordDefault from './svg/password-default.svg';
import iconPasswordActive from './svg/password-active.svg';
import play from './svg/play.svg';
import Border from './svg/Border.svg'

//CSS
import './css/font.css'
import './css/style.css'

//UI kit
import Input from "./uikit/Input";

class Auto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'auth',
            showAuto: true,
            acceptRules: false,
            login: '',
            password: '',
            mailReg: '',
            loginReg: '',
            passwordReg: '',
            passwordRegCheck: '',
            defaultLogin: '',
            modalrules: false,
            hovered: false,
            showIframe: false
        };
    }

    handleAuthClick = () => {
        this.setState({ page: 'auth' });
    }
    
    handleRegisterClick = () => {
        this.setState({ page: 'register' });
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo); // eslint-disable-line
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.showAuto) this.clickLogin();
            else this.clickReg();
        }
    }

    valueLogin(event) {
        this.setState({ login: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePassword(event) {
        this.setState({ password: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valueMailReg(event) {
        this.setState({ mailReg: event.target.value })
    };

    valueLoginReg(event) {
        this.setState({ loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePasswordReg(event) {
        this.setState({ passwordReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    valuePasswordRegCheck(event) {
        this.setState({ passwordRegCheck: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
    };

    clickLogin() {
        try {
            if (!this.state.login)
            {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.defaultLogin, this.state.password);
            }
            else {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.login, this.state.password);
            }
        } catch (e) {
            console.log(e);
        }
    };

    clickReg() {
        try {
            mp.trigger('client:user:auth:register', // eslint-disable-line
                this.state.mailReg, this.state.loginReg,
                this.state.passwordReg, this.state.passwordRegCheck,
                this.state.acceptRules);
        } catch (e) {
            console.log(e);
        }
    };

    acceptRules = () => {
        this.setState({
            acceptRules: !this.state.acceptRules
        });
    };
    clickCheckRules() {
        this.setState({
            modalrules: true,
        });
    }
    closeRules() {
        this.setState({
            modalrules: false,
        });
    }

    renderIframePortal() {
        const { showIframe } = this.state;

            if (!showIframe) return null;
            
            return ReactDOM.createPortal(
                <div className="iframe-overlay">
                    <div className="iframe-close" onClick={() => this.setState({ showIframe: false })}>×</div>
                        <iframe
                        className="iframe-popup"
                        src="https://ragemp.su/wheremypass"
                        title="Iframe"
                        />
                </div>,
                document.body
            );
    }

    render () {
        const { page } = this.state;
        const { hovered } = this.state;

            return (
                <div className="bg_general-screen">
                    
                    <div className="bg_move-button_Auth" onClick={this.handleAuthClick}>
                        {page === 'auth' && (
                            <div className="auth_active-button">
                                <div className="svg_auth-button">АВТОРИЗАЦИЯ<img src={AuthActive} alt=''/></div>
                            </div>
                        )}
                        <span className="button_auth" onClick={this.handleAuthClick}>АВТОРИЗАЦИЯ<img src={Auth} alt=''/></span>
                    </div>
{/**/}
                    <div className="bg_move-button_Register" onClick={this.handleRegisterClick}>
                        {page === 'register' && (
                            <div className="register_active-button">
                                <div className="svg_register-button">РЕГИСТРАЦИЯ<img src={RegisterActive} alt=''/></div>
                            </div>
                        )}
                        <span className="button_register" onClick={this.handleRegisterClick}>РЕГИСТРАЦИЯ<img src={Register} alt=''/></span>
                    </div>
                    <div className="bg_desing-card"><img className="svg-text_desing-card" src={BgDesign} alt=''/></div>
{/**/}
                    <div className="bg_form-register-auth">
                        {page === 'auth' && <div className="auth">
                            <div className="block-text_general-info-1">
                                <p className="info-page_text-general">АВТОРИЗАЦИЯ</p>
                                <p className="info-page_text">АВТОРИЗУЙТЕСЬ ЧТО-БЫ<br/>НАЧАТЬ ИГРУ НА НАШЕМ ПРОЕКТЕ.<br/>ЖЕЛАЕМ ПРИЯТНОЙ ИГРЫ!</p>
                            </div>
                            <div className="grid-form_containerAuth">
                                <Input label="Логин" type="text" tabIndex={1} iconDefault={iconLoginDefault} iconActive={iconLoginActive} pattern="[a-zA-Z0-9]*" value={this.state.loginReg} onChange={this.valueLogin.bind(this)}/>
                                <Input label="Пароль" type="password" tabIndex={3} iconDefault={iconPasswordDefault} iconActive={iconPasswordActive} pattern="[a-zA-Z0-9]*" value={this.state.passwordReg} onChange={this.valuePassword.bind(this)}/>
                            <button onClick={this.clickLogin.bind(this)} className="button-succesfully_general"><div className="button-succesfully_icon"><img alt="" src={play} className="play-button"/></div>АВТОРИЗОВАТЬСЯ</button>
                            <div className="button-wrapper">
                            <button 
                                className="button_recover-general"
                                onMouseEnter={() => this.setState({ hovered: true })}
                                onMouseLeave={() => this.setState({ hovered: false })}
                                onClick={() => this.setState({ showIframe: true })}>ВОССТАНОВИТЬ ДОСТУП
                            {hovered && (
                                <img src={Border} alt="border" className="border-recover_button"/>
                            )}
                            </button>
                            </div>{this.renderIframePortal()}
                            </div>
                            </div>
                        }
{/**/}
                        {page === 'register' && (
                            <div className="register">
                            <div className="block-text_general-info-2">
                                <p className="info-page_text-general">РЕГИСТРАЦИЯ</p>
                                <p className="info-page_text">ПРОЙДИТЕ РЕГИСТРАЦИЮ И<br/>НАЧНИТЕ ИГРУ НА НАШЕМ ПРОЕКТЕ.<br/>ОТВЕТСВЕННОСТЬ ЗА ВАШ<br/>АККАУНТ НЕСЕТЕ ТОЛЬКО ВЫ!</p>
                            </div>
                            <div className="grid-form_containerRegister">
                                <Input label="Логин" type="text" tabIndex={1} iconDefault={iconLoginDefault} iconActive={iconLoginActive} pattern="[a-zA-Z0-9]*" value={this.state.loginReg} onChange={this.valueLoginReg.bind(this)}/>
                                <Input label="Почта" type="email" tabIndex={2} iconDefault={iconEmailDefault} iconActive={iconEmailActive} value={this.state.mailReg} onChange={this.valueMailReg.bind(this)}/>
                                <Input label="Придумайте пароль" type="password" tabIndex={3} iconDefault={iconPasswordDefault} iconActive={iconPasswordActive} pattern="[a-zA-Z0-9]*" value={this.state.passwordReg} onChange={this.valuePasswordReg.bind(this)}/>
                                <Input label="Повторите пароль" type="password" tabIndex={4} iconDefault={iconPasswordDefault} iconActive={iconPasswordActive} pattern="[a-zA-Z0-9]*" value={this.state.passwordRegCheck} onChange={this.valuePasswordRegCheck.bind(this)}/>
                            <div className="bg-general-rules">
                            <div className="custom-checkbox">
                            <input type="checkbox" id="check" checked={this.state.acceptRules} onChange={this.acceptRules}/>

                            <label htmlFor="check" className="checkbox-label">
                                <svg className="checkmark" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5" fill="none" stroke="#BDFF69" strokeWidth="2"/>
                                </svg>
                            </label>
                            </div>
                                <p className="accept-text_rules">Согласен с правилами проекта и принимаю условия</p>
                            </div>
                            <button onClick={this.clickReg.bind(this)} className="button-succesfully_general"><div className="button-succesfully_icon"><img alt="" src={play} className="play-button"/></div>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            </div>
                            </div>
                        )}
                </div>
                </div>
        )
    }
}

export default Auto;
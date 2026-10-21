import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../css/style.css";
import LogoImg from "../img/logo.png";

import EventManager from "../../EventManager.js";

const mp = window.mp;

const Logo = () => (
  <div className="main-logo">
    <img src={LogoImg} alt="" />
  </div>
);

const IconUser = () => (
  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.19232 0.0352203C6.64047 0.12212 6.04297 0.321274 5.62541 0.557548C4.83791 1.00307 4.01851 1.87675 3.67312 2.63914C3.08851 3.92954 3.11808 5.43694 3.75168 6.64419C4.41946 7.91662 5.60963 8.81 6.98778 9.07334C7.3879 9.14981 8.24684 9.16213 8.63827 9.09702C9.91285 8.88506 11.0437 8.14929 11.7762 7.05534C12.6635 5.73027 12.7483 3.85099 11.9844 2.44407C11.2929 1.17067 10.0419 0.274502 8.64183 0.0496232C8.27128 -0.00991866 7.52595 -0.0173057 7.19232 0.0352203ZM3.7627 9.18585C2.43261 9.37524 1.4939 10.0631 0.859028 11.3136C0.274493 12.465 -0.0477042 14.1608 0.00574536 15.8049C0.0277849 16.4824 0.106123 16.8387 0.335514 17.3046C0.768208 18.1835 1.69068 18.8176 2.74401 18.9603C2.94 18.9868 4.69379 19 8.03346 19C13.5118 19 13.3497 19.006 13.9804 18.7781C14.7769 18.4902 15.4305 17.8813 15.7491 17.1304C15.9348 16.6925 15.9996 16.284 16 15.5477C16.0012 13.4779 15.5332 11.7058 14.6885 10.5823C14.0523 9.73591 13.143 9.25252 12.0463 9.17769C11.6121 9.14803 11.5092 9.18652 10.7512 9.66182C10.4327 9.86153 10.1384 10.0458 10.0971 10.0714C9.90367 10.191 9.12142 10.4659 8.77943 10.5344C8.04373 10.6818 7.25904 10.6124 6.52532 10.3352C6.06658 10.1618 5.88089 10.0645 5.28181 9.68335C4.54701 9.21588 4.4879 9.18938 4.15626 9.1788C4.00165 9.17386 3.82454 9.17706 3.7627 9.18585Z" fill="white" fillOpacity="0.35"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.19232 0.0352203C6.64047 0.12212 6.04297 0.321274 5.62541 0.557548C4.83791 1.00307 4.01851 1.87675 3.67312 2.63914C3.08851 3.92954 3.11808 5.43694 3.75168 6.64419C4.41946 7.91662 5.60963 8.81 6.98778 9.07334C7.3879 9.14981 8.24684 9.16213 8.63827 9.09702C9.91285 8.88506 11.0437 8.14929 11.7762 7.05534C12.6635 5.73027 12.7483 3.85099 11.9844 2.44407C11.2929 1.17067 10.0419 0.274502 8.64183 0.0496232C8.27128 -0.00991866 7.52595 -0.0173057 7.19232 0.0352203ZM3.7627 9.18585C2.43261 9.37524 1.4939 10.0631 0.859028 11.3136C0.274493 12.465 -0.0477042 14.1608 0.00574536 15.8049C0.0277849 16.4824 0.106123 16.8387 0.335514 17.3046C0.768208 18.1835 1.69068 18.8176 2.74401 18.9603C2.94 18.9868 4.69379 19 8.03346 19C13.5118 19 13.3497 19.006 13.9804 18.7781C14.7769 18.4902 15.4305 17.8813 15.7491 17.1304C15.9348 16.6925 15.9996 16.284 16 15.5477C16.0012 13.4779 15.5332 11.7058 14.6885 10.5823C14.0523 9.73591 13.143 9.25252 12.0463 9.17769C11.6121 9.14803 11.5092 9.18652 10.7512 9.66182C10.4327 9.86153 10.1384 10.0458 10.0971 10.0714C9.90367 10.191 9.12142 10.4659 8.77943 10.5344C8.04373 10.6818 7.25904 10.6124 6.52532 10.3352C6.06658 10.1618 5.88089 10.0645 5.28181 9.68335C4.54701 9.21588 4.4879 9.18938 4.15626 9.1788C4.00165 9.17386 3.82454 9.17706 3.7627 9.18585Z" fill="#BDFF69"/>
  </svg>
);

const IconMail = () => (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.03782 0.070117C1.11765 0.265033 0.318701 1.03388 0.103289 1.93176C0.0672205 2.08217 0.0374169 2.23891 0.0370688 2.28004C0.0365902 2.33668 1.09233 2.87363 4.38891 4.49338C6.78276 5.66963 8.89242 6.6838 9.07698 6.74712C9.37732 6.8502 9.47422 6.8623 9.99993 6.8623C10.5256 6.8623 10.6225 6.8502 10.9229 6.74712C11.1074 6.6838 13.2171 5.66963 15.611 4.49338C18.9075 2.87363 19.9633 2.33668 19.9628 2.28004C19.9624 2.23891 19.9326 2.08217 19.8966 1.93176C19.6787 1.02353 18.8788 0.261356 17.9403 0.0677228C17.4953 -0.0240704 2.47191 -0.0218472 2.03782 0.070117ZM0.0120077 3.90683C-4.42084e-05 3.93766 -0.00361193 6.19358 0.00400211 8.92001C0.0166197 13.4123 0.0247558 13.899 0.0908457 14.1104C0.382659 15.0435 1.1348 15.7384 2.05958 15.9292C2.51733 16.0236 17.4825 16.0236 17.9403 15.9292C18.8651 15.7384 19.618 15.0427 19.9088 14.1104C19.9747 13.8993 19.9829 13.4065 19.9958 8.92039C20.0036 6.19422 20.0002 3.9383 19.988 3.90726C19.9726 3.86767 18.7089 4.46785 15.7552 5.91773C12.5622 7.48505 11.4603 8.0067 11.1964 8.07596C10.402 8.28438 9.59787 8.28438 8.80344 8.07596C8.53952 8.0067 7.43765 7.48505 4.24463 5.91773C1.31096 4.47768 0.0272358 3.8678 0.0120077 3.90683Z" fill="white" fillOpacity="0.35"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.03782 0.070117C1.11765 0.265033 0.318701 1.03388 0.103289 1.93176C0.0672205 2.08217 0.0374169 2.23891 0.0370688 2.28004C0.0365902 2.33668 1.09233 2.87363 4.38891 4.49338C6.78276 5.66963 8.89242 6.6838 9.07698 6.74712C9.37732 6.8502 9.47422 6.8623 9.99993 6.8623C10.5256 6.8623 10.6225 6.8502 10.9229 6.74712C11.1074 6.6838 13.2171 5.66963 15.611 4.49338C18.9075 2.87363 19.9633 2.33668 19.9628 2.28004C19.9624 2.23891 19.9326 2.08217 19.8966 1.93176C19.6787 1.02353 18.8788 0.261356 17.9403 0.0677228C17.4953 -0.0240704 2.47191 -0.0218472 2.03782 0.070117ZM0.0120077 3.90683C-4.42084e-05 3.93766 -0.00361193 6.19358 0.00400211 8.92001C0.0166197 13.4123 0.0247558 13.899 0.0908457 14.1104C0.382659 15.0435 1.1348 15.7384 2.05958 15.9292C2.51733 16.0236 17.4825 16.0236 17.9403 15.9292C18.8651 15.7384 19.618 15.0427 19.9088 14.1104C19.9747 13.8993 19.9829 13.4065 19.9958 8.92039C20.0036 6.19422 20.0002 3.9383 19.988 3.90726C19.9726 3.86767 18.7089 4.46785 15.7552 5.91773C12.5622 7.48505 11.4603 8.0067 11.1964 8.07596C10.402 8.28438 9.59787 8.28438 8.80344 8.07596C8.53952 8.0067 7.43765 7.48505 4.24463 5.91773C1.31096 4.47768 0.0272358 3.8678 0.0120077 3.90683Z" fill="#BDFF69"/>
  </svg>
);

const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.1771 0.057085C8.61202 0.306506 7.32447 0.976355 6.23586 2.10751C5.22708 3.15568 4.59466 4.47961 4.39463 5.96193C4.33628 6.39439 4.34542 7.32752 4.41246 7.77922C4.48663 8.27908 4.63938 8.86805 4.8008 9.27656L4.92933 9.60179L2.50346 12.0331C1.16926 13.3704 0.0601485 14.4991 0.03881 14.5413C0.0123039 14.5938 0 15.0957 0 16.1249C0 17.5171 0.00488641 17.6408 0.0642263 17.7516C0.197776 18.0007 0.192327 18 1.85729 18C3.5057 18 3.5238 17.9977 3.66002 17.7741C3.71672 17.6811 3.72608 17.5925 3.72618 17.1469L3.72632 16.628H4.22783C5.03173 16.628 5.10777 16.5544 5.127 15.7573L5.13909 15.256H5.60291C6.01478 15.256 6.08403 15.2472 6.22099 15.1769C6.46545 15.0514 6.50349 14.9431 6.50349 14.3722V13.8918L7.00443 13.8778C7.32591 13.8687 7.53687 13.847 7.59326 13.8172C7.6416 13.7917 7.84148 13.6124 8.03743 13.4187L8.39368 13.0667L8.68778 13.1805C9.09873 13.3396 9.47692 13.4495 9.92956 13.5414C10.2681 13.6101 10.4255 13.6201 11.1614 13.6198C12.1088 13.6193 12.4046 13.5812 13.1124 13.3679C14.6727 12.8979 15.9581 11.9432 16.8854 10.5655C17.1291 10.2034 17.5208 9.39064 17.6638 8.95016C18.1457 7.46591 18.1088 5.87641 17.5581 4.40127C17.2179 3.4896 16.7085 2.70338 15.9971 1.99142C14.9769 0.970515 13.7771 0.347349 12.3036 0.0730564C11.8196 -0.0170377 10.6951 -0.0254808 10.1771 0.057085ZM13.0184 3.48253C13.37 3.61026 13.6239 3.77624 13.9187 4.07129C14.6262 4.77934 14.8176 5.68704 14.3909 6.3108C14.0156 6.85949 13.2821 6.96324 12.4864 6.58024C12.0023 6.34725 11.4601 5.72996 11.2794 5.20621C11.1558 4.84812 11.1603 4.33816 11.2893 4.069C11.5852 3.45157 12.2823 3.21513 13.0184 3.48253Z" fill="white" fillOpacity="0.35"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.1771 0.057085C8.61202 0.306506 7.32447 0.976355 6.23586 2.10751C5.22708 3.15568 4.59466 4.47961 4.39463 5.96193C4.33628 6.39439 4.34542 7.32752 4.41246 7.77922C4.48663 8.27908 4.63938 8.86805 4.8008 9.27656L4.92933 9.60179L2.50346 12.0331C1.16926 13.3704 0.0601485 14.4991 0.03881 14.5413C0.0123039 14.5938 0 15.0957 0 16.1249C0 17.5171 0.00488641 17.6408 0.0642263 17.7516C0.197776 18.0007 0.192327 18 1.85729 18C3.5057 18 3.5238 17.9977 3.66002 17.7741C3.71672 17.6811 3.72608 17.5925 3.72618 17.1469L3.72632 16.628H4.22783C5.03173 16.628 5.10777 16.5544 5.127 15.7573L5.13909 15.256H5.60291C6.01478 15.256 6.08403 15.2472 6.22099 15.1769C6.46545 15.0514 6.50349 14.9431 6.50349 14.3722V13.8918L7.00443 13.8778C7.32591 13.8687 7.53687 13.847 7.59326 13.8172C7.6416 13.7917 7.84148 13.6124 8.03743 13.4187L8.39368 13.0667L8.68778 13.1805C9.09873 13.3396 9.47692 13.4495 9.92956 13.5414C10.2681 13.6101 10.4255 13.6201 11.1614 13.6198C12.1088 13.6193 12.4046 13.5812 13.1124 13.3679C14.6727 12.8979 15.9581 11.9432 16.8854 10.5655C17.1291 10.2034 17.5208 9.39064 17.6638 8.95016C18.1457 7.46591 18.1088 5.87641 17.5581 4.40127C17.2179 3.4896 16.7085 2.70338 15.9971 1.99142C14.9769 0.970515 13.7771 0.347349 12.3036 0.0730564C11.8196 -0.0170377 10.6951 -0.0254808 10.1771 0.057085ZM13.0184 3.48253C13.37 3.61026 13.6239 3.77624 13.9187 4.07129C14.6262 4.77934 14.8176 5.68704 14.3909 6.3108C14.0156 6.85949 13.2821 6.96324 12.4864 6.58024C12.0023 6.34725 11.4601 5.72996 11.2794 5.20621C11.1558 4.84812 11.1603 4.33816 11.2893 4.069C11.5852 3.45157 12.2823 3.21513 13.0184 3.48253Z" fill="#BDFF69"/>
  </svg>
);

const Input = ({ label, type, icon, value, onChange }) => (
  <div className={`input-wrapper ${value ? "filled" : ""}`}>
    <div className="input-icon">
      {icon}
    </div>

    <div className="input-field">
      <input
        type={type}
        aria-label={label}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label>{label}</label>
    </div>
  </div>
);

class Authorization extends Component {
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
      showIframe: false,
      
      mailRecovery: '',
      
      indicatorStyle: {
        width: 0,
        transform: "translateX(0px)"
      }
    };
  }

  tabsRef = React.createRef();

  componentDidCatch(error, errorInfo) {
    mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (this.state.page === 'auth') this.clickLogin();
      else if (this.state.page === 'register') this.clickReg();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    this.updateIndicator();

    EventManager.addHandler('authMain:2', value => {
      if (value.type === 'login') {
        this.setState({ login: value.login, defaultLogin: value.login });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    EventManager.removeHandler('authMain:2');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.updateIndicator();
    }
  }

  updateIndicator = () => {
    const active = this.tabsRef.current?.querySelector(".tab.active");
    if (!active) return;

    const { offsetLeft, offsetWidth } = active;

    this.setState({
      indicatorStyle: {
        width: offsetWidth,
        transform: `translateX(${offsetLeft}px)`
      }
    });
  };

  setPage = (page) => this.setState({ page });

  handleChange = (field, regex = null) => (e) => {
    let value = e.target.value;
    if (regex) value = value.replace(regex, "");
    this.setState({ [field]: value });
  };

  toggleRules = () => {
    this.setState({ acceptRules: !this.state.acceptRules });
  };

  clickLogin = () => {
    try {
      const loginToUse = this.state.login || this.state.defaultLogin;
      mp.trigger('client:user:auth:login', loginToUse, this.state.password);
    } catch (e) {
      console.log(e);
    }
  };

  clickReg = () => {
    try {
      mp.trigger('client:user:auth:register',
        this.state.mailReg, 
        this.state.loginReg,
        this.state.passwordReg, 
        this.state.passwordRegCheck,
        this.state.acceptRules
      );
    } catch (e) {
      console.log(e);
    }
  };

  clickRecovery = () => {
    mp.trigger("client:user:auth:recovery", this.state.mailRecovery);
  };

  clickCheckRules = () => {
    this.setState({ modalrules: true });
  };

  closeRules = () => {
    this.setState({ modalrules: false });
  };

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

  renderTabs() {
    const { page, indicatorStyle } = this.state;

    return (
      <div className="tabs" ref={this.tabsRef}>
        <Logo />
        <div className="space"></div>

        <button
          className={page === "register" ? "tab active" : "tab"}
          onClick={() => this.setPage("register")}
        >
          Регистрация
        </button>

        <div className="space"></div>

        <button
          className={page === "auth" ? "tab active" : "tab"}
          onClick={() => this.setPage("auth")}
        >
          Авторизация
        </button>

        <div className="space"></div>

        <button
          className={page === "recovery" ? "tab active" : "tab"}
          onClick={() => this.setPage("recovery")}
        >
          Восстановление
        </button>

        <div
          className="tab-indicator"
          style={indicatorStyle}
        />
      </div>
    );
  }

  renderAuth() {
    const { hovered } = this.state;

    return (
      <>
        <div className="info">
          <h1>Авторизация</h1>
          <p>Добро пожаловать, постарайтесь пройти авторизацию без ошибок, a также запомните ваши данные!</p>
        </div>

        <Input
          label="логин"
          type="text"
          icon={<IconUser />}
          value={this.state.login}
          onChange={this.handleChange("login", /[^a-zA-Z0-9]+/g)}
        />

        <Input
          label="пароль"
          type="password"
          icon={<IconLock />}
          value={this.state.password}
          onChange={this.handleChange("password", /[^a-zA-Z0-9]+/g)}
        />

        <button className="submit-btn" onClick={this.clickLogin}>
          Войти
        </button>

        <div className="button-wrapper">
          <button
            className="second-btn"
            onMouseEnter={() => this.setState({ hovered: true })}
            onMouseLeave={() => this.setState({ hovered: false })}
            onClick={() => this.setPage("recovery")}
          >
            Восстановить доступ
          </button>
        </div>
        {this.renderIframePortal()}
      </>
    );
  }

  renderRegister() {
    return (
      <>
        <div className="info">
          <h1>Регистрация</h1>
          <p>Добро пожаловать, постарайтесь пройти регистрацию без ошибок, a также запомните ваши данные!</p>
        </div>

        <Input
          label="логин"
          type="text"
          icon={<IconUser />}
          value={this.state.loginReg}
          onChange={this.handleChange("loginReg", /[^a-zA-Z0-9]+/g)}
        />

        <Input
          label="почта"
          type="email"
          icon={<IconMail />}
          value={this.state.mailReg}
          onChange={this.handleChange("mailReg")}
        />

        <Input
          label="пароль"
          type="password"
          icon={<IconLock />}
          value={this.state.passwordReg}
          onChange={this.handleChange("passwordReg", /[^a-zA-Z0-9]+/g)}
        />

        <Input
          label="повторите пароль"
          type="password"
          icon={<IconLock />}
          value={this.state.passwordRegCheck}
          onChange={this.handleChange("passwordRegCheck", /[^a-zA-Z0-9]+/g)}
        />

        <div className="bg-general-rules">
          <div className="custom-checkbox">
            <input 
              type="checkbox" 
              id="check"
              aria-label="Я согласен с правилами проекта" 
              checked={this.state.acceptRules} 
              onChange={this.toggleRules}
            />
            <label htmlFor="check" className="checkbox-label">
              <svg className="checkmark" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" fill="none" stroke="#BDFF69" strokeWidth="2"/>
              </svg>
            </label>
          </div>
          <span>Я согласен с правилами проекта<br></br>и принимаю условия</span>
        </div>
        
        <button className="submit-btn" onClick={this.clickReg}>
          Зарегистрироваться
        </button>
      </>
    );
  }

  renderRecovery() {
    return (
      <>
        <div className="info">
          <h1>Восстановление</h1>
          <p>Добро пожаловать, постарайтесь пройти восстановление без ошибок, a также запомните ваши данные!</p>
        </div>

        <Input
          label="введите почту"
          type="email"
          icon={<IconMail />}
          value={this.state.mailRecovery}
          onChange={this.handleChange("mailRecovery")}
        />

        <button className="submit-btn" onClick={this.clickRecovery}>
          Восстановить пароль
        </button>

        <button
          className="second-btn"
          onClick={() => this.setPage("auth")}
        >
          Назад
        </button>
      </>
    );
  }

  renderForm() {
    switch (this.state.page) {
      case "auth":
        return this.renderAuth();
      case "register":
        return this.renderRegister();
      case "recovery":
        return this.renderRecovery();
      default:
        return null;
    }
  }

  render() {
    return (
    <div className="bg_general-screen">
      <div className="auth-wrapper">
        <div className="auth-body">
          <div className="auth-card">
            {this.renderTabs()}
            <div className="form-body">{this.renderForm()}</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Authorization;
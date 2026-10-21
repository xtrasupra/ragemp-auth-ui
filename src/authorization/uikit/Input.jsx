import React, { Component } from "react";
import '../css/style.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: props.value || '', // значение теперь приходит снаружи
        };
    }

    handleFocus = () => {
        this.setState({ focused: true });
    }

    handleBlur = () => {
        this.setState((prevState) => ({
            focused: prevState.value !== '',
        }));
    }

    handleChange = (e) => {
        const { onChange } = this.props;
        this.setState({ value: e.target.value });
        if (onChange) onChange(e); // прокидываем наружу изменение если нужно
    }

    render() {
        const {
            label,        // заголовок
            type,         // тип поля
            tabIndex,     // табиндекс
            pattern,      // паттерн
            isError,      // ошибка
            iconDefault,  // иконка по умолчанию
            iconActive,   // активная иконка
            defaultValue, // дефолтное значение
        } = this.props;

        const { focused, value } = this.state;

        const hasValue = value.length > 0;

        return (
            <div className={`floating-input-container ${(focused || hasValue) ? 'focused' : ''}`}>
                <div className={`input-icon ${isError ? 'error' : ''}`}>
                    <img 
                        src={iconDefault} 
                        alt="icon default" 
                        className={`icon ${!hasValue ? 'visible' : 'hidden'}`}
                    />
                    <img 
                        src={iconActive} 
                        alt="icon active" 
                        className={`icon ${hasValue ? 'visible' : 'hidden'}`}
                    />
                </div>

                <input
                    type={type}
                    id={`${type}${tabIndex}`}
                    tabIndex={tabIndex}
                    pattern={pattern}
                    placeholder=" "
                    value={value}
                    defaultValue={defaultValue}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    required
                />
                <label htmlFor={`${type}${tabIndex}`}>{label}</label>
            </div>
        );
    }
}

export default Input;
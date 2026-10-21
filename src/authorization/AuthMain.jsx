import React from 'react';
import './css/auto.css'
import Authorization from './Pages/Authorization';
import CreatePlayer from './Pages/CreatePlayer';
import EventManager from "../EventManager.js";


class AuthMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            path: '/'
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'AuthMain.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('authMain', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'switch') {
                this.setState({show: !this.state.show})
            } else if (value.type === 'showCreatePage') {
                this.setState({path: '/create'})
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('authMain');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                {this.state.path === '/create' ? <CreatePlayer/> : <Authorization/>}
            </React.Fragment>
        )
    }
}

export default AuthMain;

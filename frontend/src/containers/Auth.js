import React, {Component} from 'react';
import {Auth} from '../components/auth';
import axios from 'axios';
import {connect} from 'react-redux';
import {login, logout, storeUser} from '../actions';


class AuthContainer extends Component{
    constructor(props){
        super(props);
        this.state = {username:"Username", password:"Password"};
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
      this.setState({[e.target.name]:e.target.value});  
    };
    login(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {username:this.state.username, password:this.state.password})
        .then(res => {
                        console.log(res);
                        this.props.login(res.data.key);
                        this.storeUser(res.data.key);
                    })
        .catch(error => (console.error(error)))
        
    };
    storeUser(token){
      axios.get('http://127.0.0.1:8000/rest-auth/user/', {headers:{AUTHORIZATION:`TOKEN ${token}`}})
        .then(res => {
                        console.log(res)
                        this.props.storeUser(res.data)
                    })
        .catch(error => (console.error(error)))  
    };
    render(){
        return(<Auth isAuthenticated={this.props.isAuthenticated}
                     user={this.props.user}
                     login={this.login}
                     username={this.state.username}
                     password={this.state.password}
                     handleChange={this.handleChange}/>
                     )
    };
};

const mapStateToProps = (state) => {
    return {auth: state.auth};
};


const mapDispatchToProps = (dispatch) => {
    return {login: (token) => dispatch(login(token)),
            logout: () => dispatch(logout()),
            storeUser: (user) => dispatch(storeUser(user))};
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
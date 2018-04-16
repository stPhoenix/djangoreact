import React, {Component} from 'react';
import {Auth} from '../components/auth';
import axios from 'axios';


class AuthContainer extends Component{
    
    login(username, password){
        let bearer;
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {username:username, password:password})
        .then(res => {
                        console.log(res);
                        bearer = res.data.key;
                        this.user(bearer);
                    })
        .catch(error => (console.error(error)))
        
    };
    user(bearer){
      axios.delete('http://127.0.0.1:8000/articles/2', {headers:{AUTHORIZATION:`TOKEN ${bearer}`}})
        .then(res => (console.log(res)))
        .catch(error => (console.error(error)))  
    };
    render(){
        this.login("john", "qwerty1234");
        return(<Auth {...this.props}/>)
    };
}

export default AuthContainer;
import React from 'react';


export const Auth = ({isAuthenticated, user={username:'No user'}, login, username, password, handleChange}) => {
    return (<div>Auth page
                {isAuthenticated ? <p>Hello: {user.username}</p>
                                 : <div>Please login:
                                    <form onSubmit={login}>
                                        <input type="text" name="username" onChange={handleChange} value={username}/>
                                        <input type="text" name="password" onChange={handleChange} value={password}/>
                                        <button type="submit" >Send</button>
                                    </form>
                                    </div>}
            </div>);
}
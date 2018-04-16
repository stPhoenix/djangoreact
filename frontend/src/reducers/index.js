import {combineReducers} from 'redux';
import {articles} from './articles'
import {auth} from './auth'

export const rootReducers = combineReducers({
                                                articles:articles,
                                                auth: auth,
                                            })
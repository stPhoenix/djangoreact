import {combineReducers} from 'redux';
import {articles} from './articles'

export const rootReducers = combineReducers({articles:articles})
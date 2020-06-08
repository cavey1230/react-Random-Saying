import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from "react-redux"

const ADD = "ADD";

const ToDoReducer = (state = [
    {
        text: "hello word"
        , ather: "liu"
    },
    {
        text: " word2",
        ather: "kai"
    }], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message]
        default:
            return state
    }
}

const addmessage = (info) => {
    return {
        type: ADD,
        message: {
            text:info.text,
            ather:info.ather
        }
    }
}

const reducer = combineReducers({
    list: ToDoReducer
})

const store = createStore(reducer);
console.log(store.getState());
const mapStateToProps = (state) => {
    return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (newMessage) => {
            dispatch(addmessage(newMessage))
        }
    }
};
const Con = connect(mapStateToProps, mapDispatchToProps)(App);
const renderpage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Con></Con>
        </Provider>,
        document.getElementById('root')
    );
};
renderpage();
store.subscribe(renderpage);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

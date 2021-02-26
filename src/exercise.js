import {createStore} from "redux";

const initalState = {
    counter: 0,
    text: '',
    list: []
}

const INCRESE = 'INCRESE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

function increse() {
    return {
        type: INCRESE
    };
}

const decrese = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

function reducer(state = initalState, action) {
    switch (action.type) {
        case INCRESE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
    }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);

store.dispatch(increse());
store.dispatch(decrese());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({id:1,text:"와웅"}));


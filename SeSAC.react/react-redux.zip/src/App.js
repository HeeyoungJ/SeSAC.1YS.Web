import Contact from "./Contact";
import React, { useState } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

export default function App() {
    function reducer(state=[], action){
        if ( action.type == "ADD" ){
            return [...state, action.payload];
            //state.push(action.payload);
            //return state;
            //배열은 값이 복제가 안되서 위 주석 처리된 코드는 안됨.
            //...state
        }
        return state;
    }
    const store = createStore(reducer)
    const [list, setList] = useState([]);
    return (
    <>
    <Provider store={store}>
        개수 : {list.length}
        <br />
        <Contact />
    </Provider>
    </>
    );
}
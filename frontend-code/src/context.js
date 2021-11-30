import React, { createContext } from 'react'

export const myContext = createContext();

export default function Context(props) {
    return (
       <myContext.Provider value={1000}> {props.chidren} </myContext.Provider>
    )
}

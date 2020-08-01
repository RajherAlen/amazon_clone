import React, { createContext, useContext, useReducer } from "react";

// Setup data layer

// We need this to track the basket

// this is the data layer
export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of component
export const useStateValue = () => useContext(StateContext);

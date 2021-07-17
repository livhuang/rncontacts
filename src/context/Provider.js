import React, { createContext, useReducer } from 'react';
import authInitialState from './initialsStates/authInitialState';
import contactsInitialState from './initialsStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
/*need to import createContext in order to create a context provider component, 

useReducer gives us a way to create state and a way to change the state
*/


export const GlobalContext = createContext({});

/*need to import createContext,
in order to create a context provider component, 
*/

/*GlobalProvider is a high-order component 
- takes in children, returning a context provider component,
 and then passing it to those children 

*/


const GlobalProvider = ({children}) => {

    /* gives us the current state in time
    & the function that we can dispatch...
    and we change what is defined here */
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);

    //value of the state at any point in time
    return (
        <GlobalContext.Provider 
            value = {{authState, contactsState, authDispatch, contactsDispatch}}>
            {children}
        </GlobalContext.Provider>
    //value is an object that contains any kind of state 
    );

};

export default GlobalProvider;
import React from "react";


export const navigationRef = React.createRef(null);


export const navigate = (name, params) => {
    //check if ref is initialized
    if (navigationRef.current){
        navigationRef.current.navigate(name,params);
    }
};
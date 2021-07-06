
/* a reducer is a function that determines
 what previous sate we had,
 and what it should change to after something happens*/


 //auth takes in state, and an action .....(state, action)

 const contacts = (state, {type, payload}) => {

    switch(type){
        case "GET_CONTACTS":
            return state;
        default:
            return state;
    }

 };



 export default contacts;
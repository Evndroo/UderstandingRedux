const actions = (state = 0, action)=>{
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};


//import createStore from a Global variable called Redux that was created on the <script> tag on HTML
const { createStore } = Redux;
const store = createStore(actions);

document.querySelector("body").onclick=()=>{
    store.dispatch({type:"INCREMENT"});
}

const display = () => {
    document.querySelector("#counter").innerText=store.getState();
}

store.subscribe(()=>{
    display();
});

display();
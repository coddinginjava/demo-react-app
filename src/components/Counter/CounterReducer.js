

const intialState = 0;

const CounterReducer = (state = intialState, action) => {

    switch (action.type) {
        case "inc":
            return state + parseInt(action.payload);
        case "dec":
            return state - parseInt(action.payload);
        default:
            return state;
    }
}
export default CounterReducer;
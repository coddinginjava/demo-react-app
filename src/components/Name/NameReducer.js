import axios from 'axios'
import { connect } from 'react-redux';

const initialState = [];

// function getdatafromAPi() {
//      axios.get("https://reqres.in/api/users?per_page=20")
//         .then(res => return res.dat);
//         .catch(err => console.log(err))

// }



const NameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetch-api":
           let temp=[];

           axios.get("https://reqres.in/api/users?per_page=20").then(i => {temp = i.data.data});

            console.log("hello", temp)
            return [...state];

        default:
            return state;
    }
}

export default NameReducer;
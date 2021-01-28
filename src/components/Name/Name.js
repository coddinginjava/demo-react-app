import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { getName } from './NameActions'
import axios from "axios";

const Name = () => {

    const [person, setPerson] = useState([]);

    // const peoples = useSelector(state => state.names);
    // const dispatch = useDispatch();

    // axios.get("https://reqres.in/api/users?per_page=20").then(p => setPerson(...p.data.data));

    console.log("peopls", person);

    // useEffect(() => dispatch(getName()), []);

    useEffect(() => axios.get("https://reqres.in/api/users?per_page=20")
        .then(p => setPerson([ ...p.data.data ])), []);

    return (
        <div>
            <ul>
                {person.map(p => <li key={p.id}>{p.first_name}</li>)}
            </ul>
        </div>
    )
}

export default Name;
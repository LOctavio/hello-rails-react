import React from "react"
import { getGreeting } from '../redux/greeting/greeting';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetingReducer);
  const dispatch = useDispatch();

  const greetingText = () => {
    axios.get('http://localhost:3000/api/v1/greetings')
      .then((response) => {
        const greeting = response.data
        console.log(greeting.text)
        dispatch(getGreeting(greeting.text));
      });
  };

  useEffect(() => {
    greetingText();
  }, []);

  return (
    <React.Fragment>
      {greeting}
    </React.Fragment>
  );
}

export default Greeting

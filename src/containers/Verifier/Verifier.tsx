import React from 'react';
import {RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {add} from "./verifierSlice";
import './Verifier.css';

const Verifier = () => {
  const dispatch = useDispatch();
  const verifierValue = useSelector((state: RootState) => state.verifier.value)
  return (
    <div>
      <div className="screen">{verifierValue}</div>
      <div className="container">
        <button className="btn" onClick={() => dispatch(add('1'))}>1</button>
        <button className="btn" onClick={() => dispatch(add('2'))}>2</button>
        <button className="btn" onClick={() => dispatch(add('3'))}>3</button>
      </div>
      <div className="container">
        <button className="btn" onClick={() => dispatch(add('4'))}>4</button>
        <button className="btn" onClick={() => dispatch(add('5'))}>5</button>
        <button className="btn" onClick={() => dispatch(add('6'))}>6</button>
      </div>
      <div className="container">
        <button className="btn" onClick={() => dispatch(add('7'))}>7</button>
        <button className="btn" onClick={() => dispatch(add('8'))}>8</button>
        <button className="btn" onClick={() => dispatch(add('9'))}>9</button>
      </div>
      <div className="container">
        <button className="btn"> ᐳ </button>
        <button className="btn" onClick={() => dispatch(add('0'))}>0</button>
        <button className="btn">E</button>
      </div>
    </div>
  );
};

export default Verifier;
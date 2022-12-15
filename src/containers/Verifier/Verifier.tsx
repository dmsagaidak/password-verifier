import React from 'react';
import {RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {add, backspace, verify} from "./verifierSlice";
import './Verifier.css';

const Verifier = () => {
  const dispatch = useDispatch();
  const verifierValue = useSelector((state: RootState) => state.verifier.value);

  const classNames = ['screen'];

  if(verifierValue === 'Access granted') {
    classNames.push('right')
  }

  if(verifierValue === 'Access denied') {
    classNames.push('wrong')
  }

  return (
    <div>
      <div className={classNames.join(' ')}>{verifierValue}</div>
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
        <button className="btn" onClick={() => dispatch(backspace())}> ᐳ </button>
        <button className="btn" onClick={() => dispatch(add('0'))}>0</button>
        <button className="btn" onClick={() => dispatch(verify())}>E</button>
      </div>
    </div>
  );
};

export default Verifier;
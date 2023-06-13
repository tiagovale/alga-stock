import React, {useState} from 'react';
import  './TestComponent.css';

const TestComponent =(props:{name:string}) => {
 
    const[age,setAge]= useState<number>(33);

  

  return  <div className='TestComponent'>
    Ola {props.name},{age}
    <button onClick={()=> {setAge(age + 1)}}>Click me</button>
    </div>
}



export default TestComponent;
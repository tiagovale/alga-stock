import React, {useState, useEffect} from 'react';
import  './TestComponent.css';

const TestComponent =(props:{name:string}) => {
 
  const[age,setAge]= useState<number>(33);

  useEffect(()=>{
    console.log('Component was created');
  },[])
  
  useEffect(()=>{
    console.log('Age has been updated to: ', age);
  },[age])

  return  <div className='TestComponent'>
    Ola {props.name},{age}
    <button onClick={()=> {
        setAge(age + 1)
        }}>Click me</button>
    </div>
}



export default TestComponent;
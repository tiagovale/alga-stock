import React from 'react';

class ClassComponent extends React.Component<{name:String}>{
    state = {
        name:'mundo'
    }
    render(){
        return <div>
            <p>Name: {this.state.name}</p>
            <button onClick={()=> {this.setState({
                name:'Tiago'
            })}}>Click me</button>
        </div>
    }
}

export default ClassComponent;
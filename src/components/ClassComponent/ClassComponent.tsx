import React from 'react'

class ClassComponent extends React.Component {
    state = {
        name: 'mundo!!!!!!'
    }

    render() {
        return <div>
            <p>name: {this.state.name}</p>
            <button onClick={()=> {
                this.setState({name: 'Tiago'})
            }}>Click me</button>
            </div>
    }

}

export default ClassComponent;
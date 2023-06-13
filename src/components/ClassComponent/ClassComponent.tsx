import React from 'react';

class ClassComponent extends React.Component<{name:String}>{
    constructor(props:any){
        super(props);
        console.log('construct reached');
    }
    state = {
        name:'mundo'
    }
    componentDidMount(): void {
        console.log('did mount reached');
    }
    componentDidUpdate(prevProps: Readonly<{ name: String; }>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('did update reached');
    }
    render(){
        console.log('render reached');
        return <div>
            <p>Name: {this.state.name}</p>
            <button onClick={()=> {this.setState({
                name:'Tiago'
            })}}>Click me</button>
        </div>
    }
}

export default ClassComponent;
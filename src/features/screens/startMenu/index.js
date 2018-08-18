import React, { Component } from 'react'


class startMenu extends Component {
    constructor(props){
        super(props);
        this.level=[];
        this.state = {
            y: 50,
            x:600, 
            timer: null,
            counter: 0,
            actualMode:"down",
            mode:[{"width":"27px","height":"30px","backgroundPosition":"0px 0px"}]
        };
        this.update = this.update.bind(this);
        
      }
    
      update() {
        
      }
      componentDidMount() {
        let timer = setInterval(this.update, 1000);
       
        this.setState({timer});
      }
      componentWillUnmount() {
        this.clearInterval(this.state.timer);
      }
      
  render() {

    return (
        <div ><h2>Menu</h2></div> 
    )
  }
}

export default startMenu

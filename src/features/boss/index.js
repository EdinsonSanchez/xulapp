import React, { Component } from 'react'
import boss from './player.png'

class Boss extends Component {
    constructor(props){
        super(props);
        this.className='boss1';
        this.level=[];
        this.updateState=[];
        this.state = {
            y: 50,
            x:600, 
            timer: null,
            counter: 0,
            actualMode:"down",
            mode:[{"width":"27px","height":"30px","backgroundPosition":"0px 0px"}]
        };
        this.update = this.update.bind(this);
        this.movePlayer = this.movePlayer.bind(this);
      }
      movePlayer(){
        let nextPostionY = this.state.y;
        let actualMode = this.state.actualMode;
        let mode = this.state.mode;
        if(this.state.actualMode =="down" && this.state.y>parseInt(this.state.level.height) - 150){
            nextPostionY = nextPostionY
            actualMode = "top"
            mode=[{"width":"27px","height":"30px","backgroundPosition":"0px -32px"}];
        }else if(this.state.actualMode =="top" && this.state.y<0 + 150)
        {
            nextPostionY = nextPostionY
            nextPostionY = nextPostionY
            actualMode = "down"
            mode= [{"width":"27px","height":"30px","backgroundPosition":"0px 0px"}];
        }else if(this.state.actualMode =="down" )
        {
            nextPostionY = nextPostionY+50
        
        }else if(this.state.actualMode =="top")
        {
            nextPostionY = nextPostionY-50   
        }

        this.setState({
          counter: this.state.counter + 50,
          y:nextPostionY,
          actualMode:actualMode,
          mode:mode
        });
        
      }
      update() {
          this.movePlayer();
 
      }
      componentDidMount() {
        let timer = setInterval(this.update, 1000);
        let h= document.getElementsByClassName("level1")[0].style.height;
        h=h.substring(0,h.indexOf("p"));
       
        this.setState({timer,level:{height:h}});
      }
      componentWillUnmount() {
        this.clearInterval(this.state.timer);
      }
      
  render() {
     
    return (
        <div style={{position: 'absolute',
        top: this.state.y,
        left: this.state.x,
        backgroundImage: `url('${boss}')`,
        ...this.state.mode[0]  }}></div> 
    )
  }
}

export default Boss

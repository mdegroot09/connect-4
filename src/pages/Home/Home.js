import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateTurnRed } from '../../redux/reducer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    fillCircle = (id) => {
        let {turnRed, updateTurnRed} = this.props
        let background = turnRed ? 'red' : 'yellow'
        id = this.findLowestRow(id)
        let e = document.getElementById(id)
        
        e.style.backgroundColor = background
        e.style.pointerEvents = 'none'
        updateTurnRed(!turnRed)
    }

    findLowestRow = (id) => {
        let num = Number(id.split('circle')[1])
        while (num < 35){
            if (document.getElementById(`circle${num + 7}`).style.pointerEvents !== 'none'){
                num += 7
            }
            else {
                break
            }
        }
        return `circle${num}`
    }

    render() { 
        let {turnRed} = this.props
        let turn = turnRed ? 'Red' : 'Yellow'
        
        return ( 
            <div className='home'>
                <h1>Turn: <span style={{color: turn === 'Red' ? 'red' : 'yellow', textShadow: '0 0 4px lightblue, 0 0 4px lightblue, 0 0 4px lightblue'}}>{turn}</span></h1>
                <div className='board'>
                    <div className='row'>
                        <div className='circle' id='circle0' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle1' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle2' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle3' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle4' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle5' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle6' onClick={(e) => this.fillCircle(e.target.id)}></div>
                    </div>
                    <div className='row'>
                        <div className='circle' id='circle7' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle8' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle9' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle10' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle11' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle12' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle13' onClick={(e) => this.fillCircle(e.target.id)}></div>
                    </div>
                    <div className='row'>
                        <div className='circle' id='circle14' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle15' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle16' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle17' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle18' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle19' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle20' onClick={(e) => this.fillCircle(e.target.id)}></div>
                    </div>
                    <div className='row'>
                        <div className='circle' id='circle21' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle22' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle23' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle24' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle25' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle26' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle27' onClick={(e) => this.fillCircle(e.target.id)}></div>
                    </div>
                    <div className='row'>
                        <div className='circle' id='circle28' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle29' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle30' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle31' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle32' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle33' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle34' onClick={(e) => this.fillCircle(e.target.id)}></div>
                    </div>
                    <div className='row'>
                        <div className='circle' id='circle35' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle36' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle37' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle38' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle39' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle40' onClick={(e) => this.fillCircle(e.target.id)}></div>
                        <div className='circle' id='circle41' onClick={(e) => this.fillCircle(e.target.id)}></div>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state =>{
    let {turnRed} = state
    return {turnRed}
}

const mapStateToDispatch = {
    updateTurnRed
}
 
export default connect(mapStateToProps, mapStateToDispatch)(Home);
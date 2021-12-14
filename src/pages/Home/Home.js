import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateTurnRed, updateWinner } from '../../redux/reducer';

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
        
        let winner = this.checkForCombos(id)
        winner ? this.setWinner(true) : updateTurnRed(!turnRed)
    }

    findLowestRow = (id) => {
        let num = Number(id.split('circle')[1])
        while (num < 35){
            if (document.getElementById(`circle${num + 7}`).style.pointerEvents !== 'none'){
                num += 7
            }
            else break
        }
        return `circle${num}`
    }

    checkForCombos = (id) => {
        let num = Number(id.split('circle')[1])

        // horizontal
        let horCombo = [num - 3, num - 2, num - 1, num, num + 1, num + 2, num + 3]
        let baseHor = Math.floor(num / 7) * 7
        let maxHor = baseHor + 6
        let hor = this.checkForWinner(horCombo, baseHor, maxHor)

        // vertical
        let vertCombo = [num - 21, num - 14, num - 7, num, num + 7, num + 14, num + 21]
        let baseVert = 0
        let maxVert = 41
        let vert = this.checkForWinner(vertCombo, baseVert, maxVert)

        // decr diagonal 
        let decrDiagCombo = []
        let decr = num - 24
        let row = Math.floor(num / 7)
        let decrRow = row - 3
        while (decr <= num + 24){
            if (Math.floor(decr / 7) === decrRow){
                decrDiagCombo.push(decr)
            }
            
            decr += 8
            decrRow++
        }
        let decrDiag = this.checkForWinner(decrDiagCombo, 0, 41)

        // incr diagonal 
        let incrDiagCombo = []
        let incr = num - 18
        let incrRow = row - 3
        while (incr <= num + 18){
            if (Math.floor(incr / 7) === incrRow){
                incrDiagCombo.push(incr)
            }
            
            incr += 6
            incrRow++
        }
        let incrDiag = this.checkForWinner(incrDiagCombo, 0, 41)

        let winner = hor || vert || decrDiag || incrDiag ? true : false
        console.log(winner)
        return winner
    }

    checkForWinner = (combo, base, max) => {
        let color = this.props.turnRed ? 'red' : 'yellow'
        let colors = []
        combo.forEach(a => {
            if (a >= base && a <= max){
                let e = document.getElementById(`circle${a}`)
                colors.push(e.style.backgroundColor)
            }
        })
        colors = colors.join('')
        let winner = colors.includes(`${color}${color}${color}${color}`) ? true : false
        return winner
    }

    setWinner = () => {
        let {updateWinner} = this.props
        updateWinner(true)
        
        // disable all circles
        for (let i = 0; i < 42; i++){
            document.getElementById(`circle${i}`).style.pointerEvents = 'none'
        }
    }

    render() { 
        setTimeout(() => {
            console.log('winner: ' + winner)
        }, 100);
        let {turnRed, winner} = this.props
        let turn = turnRed ? 'Red' : 'Yellow'
        
        return ( 
            <div className='home'>
                <h1 style={{display: winner ? 'none' : 'inline'}}>Turn: <span style={{color: turn === 'Red' ? 'red' : 'yellow', textShadow: '0 0 4px lightblue, 0 0 4px lightblue, 0 0 4px lightblue'}}>{turn}</span></h1>
                <h1 style={{display: winner ? 'inline' : 'none'}}>{turn} Wins!!!</h1>
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
    let {turnRed, winner} = state
    return {turnRed, winner}
}

const mapStateToDispatch = {
    updateTurnRed, updateWinner
}
 
export default connect(mapStateToProps, mapStateToDispatch)(Home);
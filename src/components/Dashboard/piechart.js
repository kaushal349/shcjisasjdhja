import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './piechart.css'

class PieChartDisplay extends React.Component{

    constructor(){
        super()
        this.state = {
            data: [
                { title: 'Unspecified Ships', value: 10, color: '#000000' },
                { title: 'Fishing', value: 15, color: '#800080' },
                { title: 'Tugs and Special Craft', value: 20, color: '#a52a2a' },
                { title: 'High Speed Craft', value: 20, color: '#4b0082' },
                { title: 'Passenger Vessels', value: 30, color: '#008080' },
                { title: 'Pleasure Craft', value: 20, color: '#008000' },
                { title: 'Tankers', value: 20, color: '#ffa500' },
                { title: 'Cargo Vessel', value: 40, color: '#ff0000' }
            ],
            buttons:[1,1,1,1,1,1,1,1],
            datavalues: [10,15,20,20,30,20,20,40],
            datatext: ['Unspecified Ships','Fishing','Tugs and Special Craft','High Speed Craft','Passenger Vessels','Pleasure Craft','Tankers','Cargo Vessel'],
        }  

    }

    handleClick = (id) => {
        let tempdata = this.state.data 
        let tempbuttons = this.state.buttons 
        let tempdatatext = this.state.datatext 

        if(tempbuttons[id]==1)
        {
            tempbuttons[id]=0
            tempdata[id]['value'] = 0
            tempdatatext[id] = <s> {tempdata[id]['title']} </s>
        }
        else 
        {
            tempbuttons[id]=1
            tempdata[id]['value'] = this.state.datavalues[id] 
            tempdatatext[id] = tempdata[id]['title']  
        }
        this.setState({
            buttons:tempbuttons,
            data: tempdata
        })
    }

  

    render(){
        return(
            <div class="card text-center mx-auto my-2 shadow-sm" style={{width: `90%`}}>
                <h5 className="card-header">Curent Conditions</h5>
                <h6 className="card-title mb-2 text-muted">(156/156) vessels</h6>
                <div class="card-body">
                    <div className="piechartdiv card-img">
                        <PieChart
                            data = {this.state.data}
                            radius={PieChart.defaultProps.radius - 7}
                            paddingAngle={1}
                            segmentsShift={1}
                        />;
                    </div>
                    <div className='buttons card-text'>
                        <button className="colorbutton" style={{backgroundColor:"#000000"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(0)}>{this.state.datatext[0]}</button>     
                        <button className="colorbutton" style={{backgroundColor:"#800080"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(1)}>{this.state.datatext[1]}</button> <br />
                        <button className="colorbutton" style={{backgroundColor:"#a52a2a"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(2)}>{this.state.datatext[2]}</button> <br />
                        <button className="colorbutton" style={{backgroundColor:"#4b0082"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(3)}>{this.state.datatext[3]}</button> <br />
                        <button className="colorbutton" style={{backgroundColor:"#008080"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(4)}>{this.state.datatext[4]}</button> <br />
                        <button className="colorbutton" style={{backgroundColor:"#008000"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(5)}>{this.state.datatext[5]}</button>
                        <button className="colorbutton" style={{backgroundColor:"#ffa500"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(6)}>{this.state.datatext[6]}</button> <br />
                        <button className="colorbutton" style={{backgroundColor:"#ff0000"}}></button>
                        <button className='mybutton' onClick={() => this.handleClick(7)}>{this.state.datatext[7]}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PieChartDisplay;

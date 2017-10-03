import React from 'react'
import DaysContainer from './components/DaysContainer'
import FilterBy from './components/FilterBy'

export default class WeatherBox extends React.Component{
  constructor(){
    super()
    this.state = {
      tempFormat: "F"
    }
  }

  changeFilterType = (e, { name }) => {
    //handles change when changing filter from Fahrenheit to Celsius and vice versa
    if(name === "Fahrenheit"){
      this.setState({ tempFormat: "F"})
    }else if(name === "Celsius"){
      this.setState({ tempFormat: "C"})
    }
  }

  render(){
    return(
      <div>
        <h1 id="location">{this.props.location}</h1>

        {this.props.periods.length > 1 && <FilterBy filterParm={this.state.tempFormat}
        changeFilterType={this.changeFilterType}/>}
        <DaysContainer periods={this.props.periods} filterParm={this.state.tempFormat}/>
      </div>
    )
  }
}

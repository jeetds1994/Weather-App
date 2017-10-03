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
    if(name === "Fahrenheit"){
      this.setState({ tempFormat: "F"})
    }else if(name === "Celsius"){
      this.setState({ tempFormat: "C"})
    }
  }

  render(){
    return(
      <div>
        {this.props.location}
        {this.props.periods.length > 1 && <FilterBy filterParm={this.state.tempFormat} changeFilterType={this.changeFilterType}/>}
        <DaysContainer periods={this.props.periods} filterParm={this.state.tempFormat}/>
      </div>
    )
  }
}

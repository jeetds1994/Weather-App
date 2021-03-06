import React, { Component } from 'react';
import NavBar from './NavBar';
import Search from './Search'
import WeatherBox from './WeatherBox/WeatherBox'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      searchField: "",
      periods: [],
      location: ""
    }
  }

  searchChange = (event) => {
    //Makes sure numbers are being entered and will not allow more than 6 digits
    if(!isNaN(event.target.value) && event.target.value.length < 6){
      this.setState({
        searchField: event.target.value
      })
    }
  }

  submitForm = (event) => {
    event.preventDefault()
    //makes sure user cannot make a bad request by ensuring zip code length is atleast 5
    if(this.state.searchField.length == 5){
      let url = `http://api.aerisapi.com/forecasts/${this.state.searchField}?client_id=OotpWAGbWVCd6dsDPxkbG&client_secret=YIBo2h6KDfURQdrs83NYZAIvKgcj0YyGrEnRBgYp`
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if(data.success){
          //if response is good setState
          this.setState({
            periods: data.response[0].periods,
            location: data.response[0].profile.tz.replace("America/", '')})
        }else{
          alert("can't find or invalid")
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Search searchChange={this.searchChange} searchField={this.state.searchField} submitForm={this.submitForm}/>
        <WeatherBox periods={this.state.periods} location={this.state.location}/>
      </div>
    );
  }
}

export default App;

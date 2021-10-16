import React, { Component } from 'react'
import WeatherItem from './WeatherItem'

export class Weather extends Component {
     
    constructor(){
        super();
        this.state = {
        temp: 0,
        loading: false
        }}

    async componentDidMount()
        {
            let url = `http://api.weatherapi.com/v1/forecast.json?key=2ab7fc8cba984edc87d173840211310&q=${this.props.country}&days=3&aqi=no&alerts=no`;
            let data= await fetch(url);
            let parsedData = await data.json();
            this.setState({ temp: parsedData.current.temp_c,text: parsedData.current.condition.text, img:parsedData.current.condition.icon
            , location:parsedData.location.name ,
            time:parsedData.location.localtime, 
            temp1:parsedData.forecast.forecastday[1].day.avgtemp_c, img1:parsedData.forecast.forecastday[1].day.condition.icon, time1:parsedData.forecast.forecastday[1].date,
            temp2:parsedData.forecast.forecastday[2].day.avgtemp_c, img2:parsedData.forecast.forecastday[2].day.condition.icon, time2:parsedData.forecast.forecastday[2].date,
            
            });    
            
          
    
        }
    render() {
        return (
            <div>
                <WeatherItem text={this.state.text} temp={this.state.temp} img={this.state.img} location={this.state.location}
                
                wind={this.state.wind} cloud={this.state.cloud} time={this.state.time} 
                temp1={this.state.temp1} img1={this.state.img1} time1={this.state.time1}
                temp2={this.state.temp2} img2={this.state.img2} time2={this.state.time2}
                
                
                />
            </div>
        )
    }
}

export default Weather

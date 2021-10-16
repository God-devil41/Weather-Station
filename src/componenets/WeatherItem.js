import React, { Component } from "react";
export class WeatherItem extends Component {
   hum="data:image/svg+xml;charset=utf-8,%3Csvg width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E %3Cg%3E %3Cpath fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M17.5487 8.0001C16.7829 6.74175 15.1271 4.67011 12.5637 1.75476C12.2645 1.41448 11.7342 1.41518 11.4359 1.75625C8.88065 4.67783 7.22597 6.74805 6.45489 7.99571C3.91532 12.1049 3.72409 15.9389 6.56528 18.751C9.63862 21.793 14.3621 21.792 17.4355 18.7512C20.2743 15.9425 20.0858 12.169 17.5487 8.0001ZM7.73087 8.78429C8.39019 7.71747 9.8183 5.91206 12.0019 3.39071C14.1889 5.90415 15.6153 7.70851 16.2673 8.77991C18.4829 12.4205 18.6344 15.4548 16.3805 17.6849C13.8915 20.1475 10.1092 20.1483 7.62047 17.685C5.36463 15.4522 5.51867 12.3638 7.73087 8.78429Z%22 fill=%22currentColor%22/%3E %3Cpath d=%22M12.7366 17.2967C14.3588 16.7579 15.4749 15.2362 15.4749 13.5C15.4749 13.0858 15.1391 12.75 14.7249 12.75C14.3107 12.75 13.9749 13.0858 13.9749 13.5C13.9749 14.5852 13.277 15.5366 12.2638 15.8732C11.8707 16.0038 11.6579 16.4283 11.7884 16.8214C11.919 17.2145 12.3436 17.4273 12.7366 17.2967Z%22 fill=%22currentColor%22/%3E %3C/g%3E %3C/svg%3E";
  render() {
    let { temp, text, img, location,time,
        temp1,img1,time1,
        temp2,img2,time2,
        
        
    } = this.props;
    var myDate = new Date(time);var minutes = myDate.getMinutes();var hours = myDate.getHours();var day=myDate.getDay();
    var myDate1 = new Date(time1);var day1=myDate1.getDay();
    var myDate2 = new Date(time2);var day2=myDate2.getDay();
    
    
  



   var weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";
   var week = new Array(7);
   week[1] = "Mon";
   week[2] = "Tue";
   week[0] = "Sun";
   week[3] = "Wed";
   week[4] = "Thu";
   week[5] = "Fri";
   week[6] = "Sat";
    return (

      
      <>
<div className="container-fluid mx-auto">
    <div className="row d-flex justify-content-center px-3">
        <div className="card" style={{
          backgroundImage: 'url("https://mocah.org/thumbs/124416-miui-8-rainy-weather-background-minimal-hd.png")',
          backgroundSize: 'cover',
          width: '670px',
          height: '300px',
          borderRadius: '20px',
          boxShadow: '-6px 4px 18px -5px rgba(0,0,0,0.81)',
          marginTop: '50px',
          marginBottom: '10px' 
        }}>
          
            <div className="d-flex justify-content-between">
            <img src={img} alt="/" style={{width:'75px',textAlign: 'left'}} />
            <h2 className="ml-auto mr-4 mt-3 mb-0 ml-20" style={{textAlign: 'Right'}}>{location}</h2>
            </div>
            <p className="ml-auto mr-4 mb-0 med-font" style={{textAlign: 'Right'}}>{text}</p>
            <h1 className="ml-auto mr-4 large-font" style={{fontSize: '60px',textAlign: 'Right'}}>{temp}&#176;</h1>
           
            <div className="d-flex justify-content-between">
            <div className="ml-4 mx-3">
            <p className="time-font " style={{fontSize: '20px',marginBottom:'0px'}}>{hours!==12?"0":""}{hours>12?24-hours:hours}:{minutes<10?"0":""}{minutes} {hours<12?"AM":"PM"}<span className="sm-font" style={{fontSize: '18px'}}></span></p>
            <p className="ml-4" style={{marginBottom:'0px'}}>{weekday[day]}</p>
            </div>
            <div className="d-flex justify-content-end">
            <div className="ml-4 mx-3">
            <img src={img1} alt="/" style={{width:'40px',textAlign:'left'}}/>
            <p className="ml-auto mr-4 mb-0 med-font" style={{textAlign: 'center'}}>{temp1}&#176;</p>
            <p className="ml-auto mr-4 mb-2 med-font" style={{textAlign: 'center'}}>{week[day1]}</p>
            </div>
            <div className="ml-4 mx-3">
            <img src={img2} alt="/" style={{width:'40px',textAlign:'left'}}/>
            <p className="ml-auto mr-4 mb-0 med-font" style={{textAlign: 'center'}}>{temp2}&#176;</p>
            <p className="ml-auto mr-4 mb-2 med-font" style={{textAlign: 'center'}}>{week[day2]}</p>
            </div>            
            </div>
            </div>
            
        </div>
    </div>
</div>
        
      </>
    );
  }
}

export default WeatherItem;

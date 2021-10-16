import React, { Component } from 'react'
import Navbar from './componenets/Navbar'
import Weather from './componenets/Weather'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mystates: [
            {"Name":"India"},{"Name":"London"},{"Name":"America"},{"Name":"Italy"},{"Name":"China"},{"Name":"Sri Lanka"}
        ]
    }
   
}
  render() {
    return (
      <div>
      
        <Navbar/>

        <div className="container">
                         
                    <div className="row">
                        {this.state.mystates.map((element) => {
                            return <div className="col-md-4 my-3" key={element.Name}>
                                <Weather country={element.Name} />
                            </div>
                        })}
                    </div>
         </div> 

        {/* <Weather country={"Nagpur"}/> */}

      </div>
    )
  }
}

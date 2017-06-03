import React, { Component } from 'react';
import axios from 'axios';



class Wellcome extends Component {
      constructor (props) {
    super(props)
    
 // console.log(this.props.location.query.id)
  var userNane=this.props.location.query.id;
  this.state={
                Usernae:userNane
      
            }
      }
          componentDidMount() {
    axios.get(`http://localhost:3000/data`)
      .then(res => {
        console.log(res.data)
        
      });
  }
    
    
  render() {
    return (
        <div>
        <h1>{this.state.Usernae} </h1>
        <h4>Wellcome  to Our Page</h4>
          
      
        </div>

    );
  }
}

export default Wellcome;

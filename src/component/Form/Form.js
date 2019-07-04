import React, {Component}from 'react';
import './Form.css'

class Form extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  

  render(){
    return(
      
      <div className="formDiv">
        <form className="form">
          <div className="nameDiv">
            <label>First Name</label>
            <input name="firstName" className="firstName"></input>  
            <label>Last Name</label>
            <input name="lastName" className="lastName"></input>
          </div>
          <div className="addressDiv">
            <label>City</label>
            <input name="city" className="city" name="city"></input>
          
            <label>Country</label>
            <input name="country" className="country"></input>
          </div>
          <div className="EmploymentDiv">
            <label>Job Title</label>
            <input name="jobTitle" className="jobTitle"></input>
          
            <label>Employer</label>
            <input name="employer" className="employer"></input>
          </div>
          <div className="moviesDiv">
            <label>Favorite Movies:</label>
            <input name="favoriteMovies1" className="favoriteMovies"></input>
          
            <input name="favoriteMovies2" className="favoriteMovies"></input>
          
            <input name="favoriteMovies3" className="favoriteMovies"></input>
          
          </div>
        </form>
        </div>
     
    )
  }
}

export default Form;

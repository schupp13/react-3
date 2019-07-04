import React from 'react'
import './Display.css'
import data from '../../data';
import Menu from '../Menu/Menu';
import { throwStatement } from '@babel/types';

class Display extends React.Component {
  constructor() {
    super();
    this.state ={
      userInfo: data,
      count: 0
    }
   
  }

  previous=()=>{
    if(this.state.count > 0){
       this.setState({count: this.state.count -= 1});
    }else{
      return alert("Can't go lower than zero");
    }
    
  }
  next=()=>{
    if(this.state.count < this.state.userInfo.length - 1){
    this.setState({count : this.state.count + 1});
    }else{
      return alert("Can't go any higher");
    }
  }

  delete=()=>{
    
    let copyOfUserInfo = [...this.state.userInfo];
    copyOfUserInfo.splice(this.state.count, 1);
    this.setState({userInfo: copyOfUserInfo,count: 0}) 
  }

  new=()=>{

  }

  edit=()=>{

  }
 
  render() {
    const {userInfo, count} = this.state;

    let viewMovies = this.state.userInfo[this.state.count].favoriteMovies.map((e, i) => {
      return <li key={i}className="movieList">{e}</li>
    })

    return (
      <>
      <div className="display">
        <div className="counterDiv">
        <h1 className="counter">{count+1 +"/" + this.state.userInfo.length}</h1>
      </div>
      <div className='person'>
        <h1 className="name">{userInfo[count].name.first + " " + userInfo[count].name.last} </h1>
        <p><span className='detailTitle'>From: </span> {userInfo[count].city + ", " + userInfo[count].country}</p>
        <p><span className='detailTitle'>Job Title: </span> {userInfo[count].title}</p>
        <p><span className='detailTitle'>Employer: </span> {userInfo[count].employer}</p>
        <span className='detailTitle'>Favorite Movies: </span> <ol>{viewMovies}</ol>
      </div>
      </div>

      <Menu count={this.state.count} previous={this.previous} next={this.next} edit={this.edit} add={this.add} delete={this.delete}/>
      </>
    )

  }
}
export default Display
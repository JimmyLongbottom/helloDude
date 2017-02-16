
//HelloDude JS

import React, {Component} from 'react';
import './HelloDude.css';
//import AddGreeter from './AddGreeter';
//import HelloDudeList from './HelloDudeList';

class HelloDude extends Component {
  constructor(props){
    super(props);
    this.state = {greeting: 'Well, Hello'};
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }

  removeGreeting(){
    this.props.removeGreeting(this.props.name);
  }

  render(){
  return(
    <div className='HelloDude'>
      {this.state.greeting} {this.props.name}!
      <br/><br/>
      <button onClick={this.frenchify}>Frenchify!</button>
      &nbsp; &nbsp;
      <button onClick={this.removeGreeting}>Remove Me!</button>
    </div>
    );
  }
};



export default HelloDude;

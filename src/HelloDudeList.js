
// HelloDudeList JS

import React, {Component} from 'react';
import HelloDude from './HelloDude';
import './HelloDudeList.css';
import AddGreeter from './AddGreeter';



class HelloDudeList extends Component{
      constructor(props){
        super(props);
        this.state = {greetings: ['Juan', 'Frederick', 'Evan', 'Pizza']};
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
      }

      addGreeting(newName){
        this.setState({greetings: [...this.state.greetings, newName]});
      }

      removeGreeting(removeName){
        const filteredGreetings = this.state.greetings.filter( name =>{
          return name !== removeName;
        });
        this.setState({greetings: filteredGreetings});
      }

      renderGreetings(){
        return this.state.greetings.map(name => (
          <HelloDude
            key={name}
            name={name}
            removeGreeting={this.removeGreeting}
          />
        ));
      }


      render(){
        return(
          <div className="HelloDudelist">
            This is your Name List
            <AddGreeter addGreeting={this.addGreeting}/>
            {this.renderGreetings()}
          </div>
        );
      }
};




export default HelloDudeList;

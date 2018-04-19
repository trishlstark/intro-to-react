import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li>
         <input type="checkbox" value={ this.props.isCompleted } onChange={ this.props.toggleComplete }  />
         <span>{ this.props.description }</span>
         <button type="submit" onClick={this.props.deleteToDo}>Delete</button> 
       </li>


     );
   }
 }

 export default ToDo;

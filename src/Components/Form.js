// import React, { Component } from 'react';
// import '../App.scss';

// class Form extends Component {
//     constructor(){
//         super();
//         this.state = {
//             query: '',
//             results: [],
//             loading: false,
//             message: ''
//         }
//     }

//     handleOnInputChange = (e) => {
//         const query = e.target.value;
//         this.setState( { query });
//     };


//     render(){
//         const { query } = this.state;
//         return(
//             <div>
//                 <form action="#">
//                     <label htmlFor="country" className="visuallyHidden">Country:</label>
//                     <input type="text" name="query" id="country" value={ query } onChange={this.handleOnInputChange} placeholder="Search Country..."/>
//                     <button type="submit" value="submit" className="countryUpdate" onClick={this.clear}>Search</button>
//                 </form>

//                 <h3>{this.state.countryInput}</h3>
//             </div>
//         )
//     }
// }

// export default Form;
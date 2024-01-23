// import React, {Component} from 'react';
// import { ThemeContext } from './ThemeStyle';

// export default class ClassContextComponent extends Component {
//     themeStyle(dark) {
//         return {
//             backgroundColor: dark ? "#333" : "#CCC",
//             color: dark ? "#CCC" : "#333",
//             padding: "2rem",
//             margin: "2rem"
//         }
//     }    

//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {dark => {
//                     return (
//                         <>
//                             <div style={this.themeStyle(dark)}>
//                                 ClassTheme
//                             </div>
//                         </>
//                     )
//                 }}
//             </ThemeContext.Consumer>
//         )
//     }
// }
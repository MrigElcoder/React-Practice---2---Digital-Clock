import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
     let time=new Date().toLocaleTimeString();
        const [ctime,setctime]=useState(time);
        const UpdateTime=()=>{
            time=new Date().toLocaleTimeString();
            setctime(time);
        };
        setInterval(UpdateTime,1000);
        return(
            <>
               <h1>{ctime}</h1>
            </>
        )
    }
}


export default App;

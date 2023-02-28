import React, { useState } from "react";

// class HelloJS extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hello: "hi world" }
//         this.click = this.click.bind(this)
//     }

//     click = (e) => {
//         console.log(e.target.value);
//         if (this.state.hello === "hi world") {
//             this.setState({ hello: "hi stranger" })
//         }
//         else {
//              this.setState({ hello: "hi world" })
//         }
//     }

//     render()
//     {
//         <>
//         <h1>{this.state.hello}</h1>
//         <button onClick={this.click}>Click to toggle</button>
//         </>
//     }
// }

function HelloReact() {
    const [hello, setpurple] = useState("hi world");
    const addX = () => setpurple(hello + "X")
    const addMinus = () => setpurple(p => p + "-")
    // state = { hello: "hi world" }
    // click = (e) => {
    //     console.log(e.target.value);
    //     if (hello === "hi world") {
    //         setpurple("hi stranger things" )
    //     }
    //     else {
    //         setpurple( "hi world")
    //     }
    // }

    return (
        <>
        <h1>{hello}</h1>
        {/* <button onClick={this.click}>Click to toggle</button> */}
        {/* <button onClick={()=>setpurple((prev)=>prev+"X")}>Click to append X</button>
        <button onClick={()=>setpurple((prev)=>prev+"-")}>Click to append -</button> */}
        <button onClick={addX}>Click to append X</button>
        <button onClick={addMinus}>Click to append -</button>
        </>
    )
}

export default HelloReact;
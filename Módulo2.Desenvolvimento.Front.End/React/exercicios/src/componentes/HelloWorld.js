import React from "react";

class HelloWorld extends React.Component{
    // sayHello(){
    //     return <p>Olá</p>
    // }
    render() {
        // const qualquerCoisa = 'Vida'
        return(
            <div>
            <h1>Vou saber esse trem de React</h1>
            {/* {qualquerCoisa}
            {this.sayHello()} */}
            </div>
        )
    }
}
// eu posso declarar minha const e pegar o valor dela usando  {}
export default HelloWorld;
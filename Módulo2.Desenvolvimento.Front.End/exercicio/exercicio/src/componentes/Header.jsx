import React from "react";

class Header extends React.Component{
    render(){
        const{title} = this.props;
        return(
            <main className="container">
                <header>{title}</header>
            </main>
        )
    }
}

export default Header;
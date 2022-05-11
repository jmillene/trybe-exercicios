import React from "react";
import Card from "./componentes/Card";
import Header from "./componentes/Header";
import "./App.css";
import results from "./data"
class App extends React.Component {
  render() {
        return (
      <main>
        <Header title = " O mundo de Rick e Morty" />
        <div>
          <section>
            { results.map(({name, id, image}) => {
              return <Card name={name} id={id} image={image} />
            })}
          </section>
        </div>
      </main>
    );
  }
 }
 export default App;
 
//  API https://rickandmortyapi.com/api/character
// Colocaboração do Colega Giovane Saes
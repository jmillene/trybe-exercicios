import React from "react";
import Card from "./componentes/Card";
import Header from "./componentes/Header";
import "./App.css";
import results from "./data";

// Adicionar o evento a classe
//Crie um estado = state
//Passo uma arroww function para não tem que fazer o construtor e o super
//como nosso estado(state) é um objeto, envolvemos os parametros do handleChange entre chaves
//evento ocorre
//chama o setState
//React chama o render
class App extends React.Component {
  state = {
    busca: "",
  };

  handleChange = (event) => {
    // console.log(this.state.busca)
    this.setState({ busca: event.target.value });
  };

  render() {
    // console.log(this.state.busca);
  // results.filter((value )=> {
  //     return value.name.includes(this.state.busca);
  //   })
    return (
      <main>
        <Header title=" O mundo de Rick e Morty" />
        <section className="input-container">
          <label>
            <input
              type="text"
              placeholder="Busque seu personagem favorito"
              onChange={this.handleChange}
            ></input>
          </label>
        </section>
        <div>
          <section>
            {/* pegar po busca e comparar com o nome */}
            {results.filter((item) =>item.name.includes(this.state.busca))
            .map((item) => {
                return <Card key={item.name} name={item.name} id={item.id} image={item.image} />;
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

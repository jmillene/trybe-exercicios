// ====== Definir Reducer e Estado Inicial ==========
const initialState = {
  count: 0,
};
function aumentar()  {
 return { type : 'aumentar'}
}
function diminuir () {
  return { type : 'diminuir'}
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "aumentar":
      return { count: state.count += 1 };
    case "diminuir":
      return { count: state.count -= 1 };
    default:
      return state;
  }
};

// ====== Criar a Store ==========
const store = Redux.createStore(reducer);
//====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
  //   // Leia a variável do estado global
  const {count} = store.getState()
  console.log(store.getState());


  //   // atualizar
  const h1Element = document.getElementById("counter");
  h1Element.innerText = count;
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");

incrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch(aumentar())
});
decrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch(diminuir())
});

import React from 'react'

export class MeuComponente1 extends React.Component {

        state = {
          usuario: "",
          mensagem: "",
          texto: [
            {
              usuario: "",
              mensagem: ""
            }
             
          ]
        };
      
        changeUsuario = (event) => {
          this.setState({
            usuario: event.target.value
            
          });
        };
      
        changeMensagem = (event) => {
          this.setState({
            mensagem: event.target.value
            
          });
        };
       
        addTexto = () => {
          if (this.state.usuario === "") {
            return alert("campo vazio");
          }
      
          if (this.state.name === "") {
            return alert("campo vazio");
          }
      
          const newTexto = [
            ...this.state.texto,
            {
              usuario: this.state.usuario,
              mensagem: this.state.mensagem
            }
          ];
         
          this.setState({
            texto: newTexto,
            usuario: "",
            mensagem: ""
          });
        };

        guardarDadosELimparCapos = () => {
            const dados = {
                usuario: this.state.usuario,
                mensagem: this.state.mensagem
            }
            console.log(dados)
            this.setState({
              valorInputUsuario: "",
              valorInputMensagem: "",
              
            })
        }

       
        render() {
          const listaDeTexto = this.state.texto.map((texto, index) => {
              return (
                <texto key={index}>
                  <span>{texto.usuario}</span>
                  <span>{texto.mensagem}</span>
                </texto>
                

              );
          }); 

          return (
            <div className="App">
              <div>
                <input
                  placeholder="Usuario"
                  value={this.state.usuario}
                  onChange={this.changeUsuario}
                />
                <input
                  placeholder="Mensagem"
                  value={this.state.mensagem}
                  onChange={this.changeMensagem}
                />
                <button onClick={this.addTexto}>Adicionar</button>

              </div>
              
              <hr />
              

            </div>
          );
         
        }
      }

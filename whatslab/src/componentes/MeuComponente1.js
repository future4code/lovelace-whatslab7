import React from 'react'

export class MeuComponente1 extends React.Component {
    state = { 
        
        usuario: "",
        mensagem: ""
    }

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



   render () {

       return (
           <div>
               <input type="texto" placeholder="Usuario" value={this.state.usuario}
            onChange={this.changeUsuario} ></input>
               
               <input type="texto" placeholder="Mensagem" value={this.state.mensagem}
            onChange={this.changeMensagem}></input>

               <button onClick={this.addMensagem}>Enviar</button>
           </div>
       )
   }
}

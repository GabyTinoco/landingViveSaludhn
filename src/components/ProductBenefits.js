import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
	super(props);
    this.state = {
      name: '',
      email: '',
      telefono: ''
    }
  }

render() {
 return(
   <section className = "product-features" id ="inscribirse">
      <div className="product-benefits-group">
        <div className="product-benefit-1-tagline"> 
           <h2>¿Te interesa formar parte de nuestra red de profesionales?</h2>
              <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="field half first">
                      <label htmlFor="name">Nombre</label>
                      <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="field half first">
                      <label htmlFor="exampleInputEmail1">Correo</label>
                      <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="field half first">
                      <label htmlFor="name">Teléfono</label>
                      <input type="number" name="telefono" id="telefono" value={this.state.telefono} onChange={this.onTelefonoChange.bind(this)} />
                 </div>
                  <div className="field half first">
                      <label htmlFor="name">Quiero formar parte de la red de:</label>  
                      <div className = "radio">         
                        <input type="radio" id="especialistas" name="especialistas" value="Especialistas"/>
                        <label for="especialistas" className = "radio-label">Especialistas</label>
                      </div>
                      <div className = "radio">    
                        <input type="radio" id="teleconsultantes" name="teleconsultantes" value="Teleconsultantes" />
                        <label for="teleconsultantes" className = "radio-label">Teleconsultantes</label>
                      </div>
                  </div>
                  <button type="submit" className="btn btn-primary submmit">Enviar</button>
                  </form>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfiwWUWqSkafn3xq1YZhI4snqC6QMR2Hzx8WqorjRw_lG-lMw/viewform?embedded=true" width="430" height="808" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                </div>

          </div>
          <div className="product-benefit-1-image"></div>
      </div>
    </section>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onTelefonoChange(event) {
    this.setState({telefono: event.target.value})
  }

handleSubmit(e) {
  e.preventDefault();
  const api = 'https://x9wlczb4i2.execute-api.us-east-1.amazonaws.com/formularioPrueba';
  const data = { "data" : JSON.stringify(this.state)};
  axios
    .post(api, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
}

export default App;
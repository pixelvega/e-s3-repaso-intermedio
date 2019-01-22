import React, { Component } from 'react';
import ClubList from './components/ClubList';
import './App.css';

const url = 'https://raw.githubusercontent.com/Adalab/e-s3-repaso-intermedio/master/data/cool-clubs.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      clubs: [],
      query: ''
    }
    console.log('Inicializo el estado a []');
    this.filter = this.filter.bind(this);
  }

  

  getClubs() {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        const newData = data.map((item, index) =>{
          return {...item, id: index}
        });

        this.setState({
          clubs: newData
        });
      });
  }

  filter(e) {
    const query = e.currentTarget.value;
    this.setState({
      query: query
    })
  }

  render() {
    if (this.state.clubs.length < 1) {
      console.log('Pinto lo que haya pero no hay na, porque de primeras hay un array vacío, pero luego va a haber datos y este mensaje va a salir dos veces. DOS!!!');
    } else {
      console.log('Hola, soy yo de nuevo, pero ahora con datos. Toma ya!');
    }
    
    const {clubs} = this.state;
    return (
      <div className="App">
        <input type="text" onKeyUp={this.filter}/>
        <ClubList clubs={clubs.filter(item=>item.name.includes(this.state.query))} />
      </div>
    );
  }
  
  componentDidMount() {
    console.log('Ya se ha pintado todo, pero sin datos, y ahora entro yo y los pido, y lo hago todo')
    this.getClubs();
  }
}

export default App;

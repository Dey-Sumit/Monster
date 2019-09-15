import React, {
  Component
} from 'react';
import {
  CardList
} from './components/CardList/card-list.component';
import {
  SearchBox
} from './components/SearchBox/SearchBox.compo';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }))
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }


  render() {
    /*Destructuring */
    const {
      monsters,
      searchField
    } = this.state;
    /* filter() returns an array */
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className='header'>Monster Rolodex</h1>
      <SearchBox
        placeholder='Seach Monster'
        handleChnage={this.handleChange} />

      <CardList monsters={filteredMonster}/>

      </div>
    )

  }
}

export default App;
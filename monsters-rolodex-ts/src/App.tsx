import { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import { getData } from './utils/data.utils';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export type Monster = {
  id: string,
  name: string,
  email: string
}

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  //console.log(searchField);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className={'monsters-search-box'} placeholder={'Search Monsters'} onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;

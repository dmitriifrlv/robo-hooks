import React, { useState, useEffect } from 'react';
import CardList from '../components/cardlist/CardList'
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll'
import './App.css'

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // useEffect(async() => {
    //     const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    //     const data = await response.json;
    //     const [user] = data;
    //     setRobots(user)
    // }, [])

    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users =>{setRobots(users)})
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return (
        !robots.length ? 
        <h1>Loading...</h1> :
        <div className="App">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
    )
        
}

export default App;
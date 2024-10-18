import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Stack } from './layout/sections/stack/Stack';
import { Projects } from './layout/sections/projects/Projects';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Stack/>
            <Projects/>
        </div>
    );
}

export default App;


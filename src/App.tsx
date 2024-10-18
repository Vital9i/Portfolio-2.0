import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Stack } from './layout/sections/stack/Stack';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Stack/>
        </div>
    );
}

export default App;


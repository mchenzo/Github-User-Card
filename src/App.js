import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import SearchBar from './components/searchbar';
import Card from './components/card';
import store from './store/store';

class App extends Component {



    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <div className='header'>
                        <h1 className='app-header'>GITHUB USERNAME SEARCH UTILITY</h1>
                    </div>
                    <SearchBar />
                    <Card />
                </div>
            </Provider>
        );
    }
}

export default App;
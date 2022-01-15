import React, { Component } from 'react';
import TopHeader from './Component/TopHeaderComponent/TopHeader';
import Header from './Component/Header/Headercomp'
class App extends Component {
    render() {
        return (
            <div>
            
                <TopHeader/>
               <Header/>
            </div>
        );
    }
}

export default App;

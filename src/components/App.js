import React from 'react';
import SongsList from "./SongsList";

class App extends React.Component {
    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongsList />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
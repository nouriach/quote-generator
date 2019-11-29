import React from 'react';
import Joke from './Joke';
import BespokeJoke from './BespokeJoke';
import Header from './Header';
import IntroContainer from './IntroContainer';
import Contact from './Contact';

// import Button from './Button';
import { type } from 'os';

class RandomJoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            isLoaded: false,
            fname: '',
            lname: '',
        };
    }
    componentDidMount = () => {
        fetch("http://api.icndb.com/jokes/random/50")
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                jokes: json.value,
                randJoke: ''
            })
            console.log(this.state);
            console.log(this.state.jokes);
        });
    }
    
    render () {
        let { isLoaded, jokes } = this.state;
        if (!isLoaded){
            return (
                <p>Loading...</p>
            )
        }
        else {
            return (
            <>
                <div className="app-container">
                    <Header />
                    <IntroContainer />
                    <div className="middle-container">
                        <Joke allJokes={this.state} />
                        <BespokeJoke firstName={this.state.fname} secondName={this.state.lname} />
                    </div>
                </div>
                <Contact />
            </>
        )
        }
    }
}



export default RandomJoke;
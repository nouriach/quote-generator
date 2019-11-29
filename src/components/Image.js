// NOTE: unused

// Ambition was to fetch a random photo from the unsplash api to display on the front end.

import React from 'react';
import Joke from './Joke';
import BespokeJoke from './BespokeJoke';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            laughingImage: "",
            isLoaded: false
        }
        this.state = this.initialState
    }
    componentDidMount = () => { 
        console.log('fetchUnsplashData is running');
        let clientId = "67afdad9c8137cbef0d00475624ff9d09356e201e6909479f9bf96a6268f0ccc";
        let unsplashUrl = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=laughing`
        
        fetch(unsplashUrl)
        .then(res => res.json())
        .then(json => {
            this.setState ({ 
                laughingImage: json.results,
                isLoaded: true,
            })
        });
       }
        render () {
            // const { laughingImage } = this.state;
        
            return (
                <>
                    <Joke jokeImages={this.state.laughingImage[4]} />
                    <BespokeJoke bespokeJokeImages={this.state.laughingImage} />
                </>
        );
    }
}

export default Image;


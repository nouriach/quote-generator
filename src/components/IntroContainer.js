import React from 'react';

class IntroContainer extends React.Component {
    render () {
        return (
            <div class="intro-container">
                <div>
                    <h1>Chuck Norris Joke Generator</h1>
                    <p>Carlos Ray "Chuck" Norris is an American martial artist, actor, film producer and screenwriter.</p>
                    <p>After serving in the United States Air Force, he won many martial arts 
                        hips and later founded his own school of fighting named Chun Kuk Do.</p> 
                    <p>Norris is a black belt in Tang Soo Do, Brazilian jiu jitsu and Judo</p>
                    <p>There are also <em>a lot</em> of jokes about him.</p>
                </div>
                <div>
                    <img src="https://cdn1-www.musicfeeds.com.au/assets/uploads/Chuck-Norris-671x377.png" />
                </div>

            </div>
        )
    }
} 

export default IntroContainer;
import React, { Component } from 'react';

class Joke extends Component {
    mouseOverShowJoke() {
        console.log("Mouse out!!!");
        let showJokeBtn = document.getElementsByClassName('showJoke');
        showJokeBtn[0].innerHTML = "<span style='color:white'>Show Me a Joke</span><img src='https://via.placeholder.com/45'/>"    
      }
      
      mouseOutShowJoke() {
        console.log("Mouse over!!!");
        let showJokeBtn = document.getElementsByClassName('showJoke');
        showJokeBtn[0].innerHTML = "<span style='color:#046AB8'>Show Me a Joke</span><img src='https://via.placeholder.com/45'/>"    
        }

        mouseOverReset() {
            console.log("Mouse over reset!!!");
            let showJokeBtn = document.getElementsByClassName('resetJoke');
            showJokeBtn[0].innerHTML = "<span style='color:white'>Reset</span><img src='https://via.placeholder.com/45'/>" 
        }
    
        mouseOutReset() {
            console.log("Mouse out reset!!!");
            let showJokeBtn = document.getElementsByClassName('resetJoke');
            showJokeBtn[0].innerHTML = "<span style='color:#046AB8'>Reset</span><img src='https://via.placeholder.com/45'/>"    
        }

    render () {
        const punchline = this.props.allJokes.jokes;
        
        function handleClick(e) {
            e.preventDefault();
            let jokeResult = document.getElementById("showJoke-container").innerHTML;
            console.log(jokeResult)
            if (!jokeResult) {
                console.log('no joke')
                displayJoke()
            }
            else {
                document.getElementById("showJoke-container").innerHTML = "";
                console.log('joke')
                displayJoke()
            };
        }

        function handleDelete (e) {
            e.preventDefault();
            console.log('delete function');
            let deleteJoke = document.getElementById("showJoke-container");
            deleteJoke.innerHTML = "";
            console.log(deleteJoke.innerHTML)
        };

        function displayJoke () {

            let randNum = Math.floor(Math.random() * Math.floor(50));
            let jokeBox = document.getElementById('showJoke-container');
            let newJoke = document.createElement("h3")
            newJoke.innerHTML = punchline[randNum].joke;
            jokeBox.appendChild(newJoke);
        }


        return (
            <div className="joke-container">
				<div>
                    <img src="https://images.unsplash.com/photo-1546071267-5cfb1e0e8f41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwNDEyMn0" />
                    {/* <Image /> */}
				</div>
                <div>
                    <h2>Chuck Norris Joke Generator</h2>
                    <p>Simply hit the button and get yourself a joke. Laughs aren't guarenteed.</p>
                </div>
                <div>
                    <div className="button-container">
                        <button className="showJoke" onMouseOut={() => this.mouseOutShowJoke()} onMouseOver={() => this.mouseOverShowJoke()} onClick={handleClick}>
                            <span>Show Me a Joke</span>
							<img src="https://via.placeholder.com/45" />
                        </button>
                        <button className="resetJoke" onMouseOut={() => this.mouseOutReset()} onMouseOver={() => this.mouseOverReset()} onClick={handleClick} onClick={handleDelete}>
							<span>Reset</span>
							<img src="https://via.placeholder.com/45" />
                        </button>
                    </div>
                    <div id="showJoke-container" />
                </div>

            </div>        
        )   
    };
}
export default Joke;
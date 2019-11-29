import React, { Component } from 'react';

class BespokeJoke extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            fname: '',
            lname: '',
            jokes: [],
            isLoaded: false,
        }
        this.state = this.initialState
    }

    mouseOverSubmit() {
        console.log("Mouse out!!!");
        let showJokeBtn = document.getElementsByClassName('submitJoke');
        showJokeBtn[0].innerHTML = "<span style='color:white'>Submit</span><img src='https://via.placeholder.com/45'/>"    
      }
      
      mouseOutSubmit() {
        console.log("Mouse over!!!");
        let showJokeBtn = document.getElementsByClassName('submitJoke');
        showJokeBtn[0].innerHTML = "<span style='color:#046AB8'>Submit</span><img src='https://via.placeholder.com/45'/>"    
        }

    handleChange = event => {
        console.log('handleChange is running');
        const { name, value } = event.target
        // can i set the values to upper case here?
        this.setState({
            [name]: value,
        });
    } 

    validateForm = (submit) => {
        submit.preventDefault();
        const submitFname = document.forms["myForm"]["fname"].value;
        const submitLname = document.forms["myForm"]["lname"].value;
        if (submitFname == '' || submitLname == '') {
            document.getElementById("bespokeJoke-container").innerHTML = "";
            console.log ('no content');
            this.displayErrorMessage();
            return false;
        }
        else {

            document.getElementById("bespokeJoke-container").innerHTML = "";
            this.submitForm();
        }
    }

    submitForm = () => {
        console.log('submitForm is running');
        this.setState(this.initialState)
        let newJoke = document.getElementById("bespokeJoke-container").innerHTML;
        if (!newJoke) {
            console.log('there is no joke')
        }
        else {
            document.getElementById("bespokeJoke-container").innerHTML = "";
            console.log('there is a joke')
        }
        this.fetchData();
    }

    fetchData = () => { 
    console.log('fetchData is running');
    let fname = this.state.fname;
    let lname = this.state.lname;
    fetch(`http://api.icndb.com/jokes/random/50?firstName=${fname}&lastName=${lname}`)
    .then(res => res.json())
    .then(json => {
        this.setState ({ 
            jokes: json.value,
            isLoaded: true,
        })
        console.log(this.state);
        this.displayBespokeJoke()
    });
   }

   displayBespokeJoke = () => {
       console.log('in displayJoke')
       console.log(this.state)
       let randNum = Math.floor(Math.random() * Math.floor(50));
       let jokeBox = document.getElementById('bespokeJoke-container');
       let newJoke = document.createElement("h3")
       newJoke.innerHTML = this.state.jokes[randNum].joke;
       console.log (newJoke.innerHTML)
       jokeBox.appendChild(newJoke);
   }

   displayErrorMessage = () => {
        console.log('display error');
        let errorBox = document.getElementById('bespokeJoke-container');
        let errorMessage = document.createElement("h4")
        errorMessage.innerHTML = "You must add both a First Name and a Surname";
        errorBox.appendChild(errorMessage);
    };

    render () {
        const { fname, lname } = this.props;
        // const { jokes } = this.state;

        return (
            <div className="bespokeJoke-container">
				<div>
                    <img src="https://images.unsplash.com/photo-1546071267-5cfb1e0e8f41?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwNDEyMn0" />
                    {/* <Image /> */}
				</div>
				<div>
					<h2>Make Your Own</h2>
					<p>Enter a full name below to create your own Chuck Norris inspired "joke".</p>		
				</div>
				<div>
					<form name="myForm" id="formContainer">
						<div>
                            <div>
                                <label>First Name: </label>
                                <input 
                                    type="text" 
                                    name="fname"
                                    value={fname} 
                                    onChange={this.handleChange} 
                                    onBlur="upperCaseFirstLetters(this.id)"
                                />
                                <label>Surname: </label>
                                <input 
                                    type="text"
                                    name="lname"
                                    value={lname}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <button className="submitJoke" onMouseOut={() => this.mouseOutSubmit()} onMouseOver={() => this.mouseOverSubmit()} onClick={this.validateForm}>
                                    <span onClick={this.submitForm}>Submit</span>
                                    <img src="https://via.placeholder.com/45" onClick={this.submitForm}/>
                                </button>
                            </div>
						</div>
					</form>
				</div>
				<div id="bespokeJoke-container" />
            </div>
        )
    };
}
export default BespokeJoke;
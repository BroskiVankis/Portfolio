import React, { Component } from "react";
import Projects from './Projects';
import SocialProfiles from "./SocialProfiles";
import profilePic from './assets/profilePic.PNG';

class App extends Component {
    state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
    <div>
     <img src={profilePic} alt= 'profile' className='profilePic' />
     <h1>Hello!</h1>
     <p>My name is Ivan. I'm a software engineer.</p>
     <p>I'm always looking forward to working on a meaningful projects.</p>
        {
            this.state.displayBio ?  (
                <div>
                     <p>I live in Plovdiv, Bulgaria, and code every day.</p>
                     <p>My favorite language is JavaScript, and i think React.js is awesome</p>
                     <p>Besides coding, I also love music and Basketball!</p>
                     <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                    )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
    </div>
    );
  }
}

export default App;

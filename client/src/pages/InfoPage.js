import React from 'react';
import Maps from './MapsPage';
import './InfoPage.css'

class InfoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
                <div className = "col-12 center">
                    <h1> Welcome To The Towers At CCNY!</h1>
                </div>
            </div>
            <div className="row justify-content-left">
                <Maps/> 
                <div class="col align-self-start"></div>
                <div class="col align-self-center"></div>
                <div className = "col-6 align-self-end">
                    <h2>What Is The Towers?</h2>
                    <p>The Towers is an apartment-style residence hall on campus that
                         will help you make the most of your college experience in an environment which encourages residents to explore opportunities academically, socially and culturally.
                         The community offers free wireless internet service throughout the entire building (including resident rooms and lounges),
                          a multi-purpose seminar room, a fitness center, a central laundry facility, a community kitchen and lounge area with a billiards table and large 
                          TV with comfortable seating. All residents are issued an access card for entry at the 24-Hour Security Desk and there are closed-circuit security 
                          cameras located throughout the building. The Residence Life Staff strives to create a sense of community through educational and social programming 
                          and serves as a resource to all residents.</p>
                    <h2>Where Are We Located?</h2>
                    <p> We're located on 401 W 130th St, New York, NY 10027. <br/> It could also be found on the map on the left.</p>
                    <h2>Our Website: </h2><a href="http://ccnytowers.com/" target="_blank">http://ccnytowers.com/</a>
                    <h2> Our Developers: </h2>
                    <a href="https://github.com/ChibiKev" target="_blank">Kevin Chen</a>
                    <br/>
                    <a href="https://github.com/yukkeechang" target="_blank">Yukkee Chang</a>
                    <br/>
                    <a href="https://github.com/abravo3641" target="_blank">Anthony Bravo</a>
                    <br/>
                    <a href="https://github.com/josueh6758" target="_blank">Josue Hernandez</a>
                    <br/>
                    <a href="https://github.com/bhavrish" target="_blank">Bhavesh Shah</a>

                </div>
            </div>
        </div>
    );
  }
}

export default InfoPage;
import React, { Fragment, Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import { Button } from './styled.js';
import styled from '@emotion/styled'

class Ads extends Component {
	constructor(props) {
    super(props);
      this.state = {
        showAds: false,
      }
	    this.clickHandler = this.clickHandler.bind(this);
  	};

	clickHandler() {
	    this.setState(oldState => ({ showAds: !oldState.showAds }));
	}

	componentDidMount() {
		let googletag;
		googletag = googletag || {};
	    googletag.cmd = googletag.cmd || [];
   	 	googletag.cmd.push(function() {
    		googletag.display('gpt-leaderboard-ad' && 'gpt-ad-landing-mpu-1');
    	});
	  }

render() {
	const { showAds } = this.state;
	const BigBox = styled.div({
	  backgroundColor: "#FF0000",
	  cursor: "pointer",
	  maxHeight: "250px",
	  maxWidth: "300px",
	});
	const Banner = styled.div({
	  backgroundColor: "#1e0784",
	  cursor: "pointer",
	  maxHeight: "90px",
	  maxWidth: "728px",
	  margin: "2% 24%",
	});
    return (
    	<Fragment>
        <Button type="button" onClick={this.clickHandler}>Click me!</Button>
        	<div className="ads">
		        <DFPSlotsProvider dfpNetworkId="344101295/SI/www.silive.com/news/index.ssf">
		        	{showAds ? (
		        	<Fragment>
		            <div className="gpt-leaderboard-ad">
			        	<Banner><AdSlot adUnit={"home/leaderboard"} sizes={[ [728, 90]]} /></Banner>
			        </div>
			        <div className="gpt-ad-landing-mpu-1">
			        	<BigBox><AdSlot adUnit={"home/1"} sizes={[ [300, 250] ]} /></BigBox>
			        </div>
			        </Fragment> 
			          ) : (
			            <div></div>
			        )}
			      </DFPSlotsProvider>
	      	</div>
      	</Fragment> 
    );
  }
}

export default Ads;
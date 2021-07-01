import React, { Component } from 'react'
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';

export class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            fitems:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://ard.stage.bmj.com/pages/wp-json/menus/v1/menus/content')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                fitems:json,
                
            })
        });
    }
    render() {
        var {isLoaded, fitems} = this.state;
        console.log(fitems)
        
        if(!isLoaded){
            return <div>Loading...</div>;

        }
        else{
            return(
                <div className='main'>
                <div className='footermenu'>
                
                <div className='footerfirst'>
                    
                    <ul>
                    <h3>CONTENT</h3>
                    <li>{fitems.items[0].title}</li>
                    <li>{fitems.items[1].title}</li>
                    <li>{fitems.items[2].title}</li>
                    <li>{fitems.items[3].title}</li>
                    <li>{fitems.items[4].title}</li>
                    <li>{fitems.items[5].title}</li>
                    <li>{fitems.items[6].title}</li>
                    
                    </ul>
                    
                    </div>
                    <Footer2/>
                    <Footer3/>
                    <Footer4/>
                    </div>
                </div>
            )
        }
        return (
            <div>
                ss
            </div>
        )
    }
}

export default Footer

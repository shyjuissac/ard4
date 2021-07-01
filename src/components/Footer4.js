import React, { Component } from 'react'

export class Footer4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            f4items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://ard.stage.bmj.com/pages/wp-json/menus/v1/menus/help')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                f4items:json,
                
            })
        });
    }
    render() {
        var {isLoaded, f4items} = this.state;
        console.log(f4items)
        
        if(!isLoaded){
            return <div>Loading...</div>;

        }
        else{
            return(
              
                <div className='footer4'>
                    <ul>
                    <h3>HELP</h3>
                    <li>{f4items.items[0].title}</li>
                    <li>{f4items.items[1].title}</li>
                    <li>{f4items.items[2].title}</li>
                    <li>{f4items.items[3].title}</li>
                    <li>{f4items.items[4].title}</li>
                    
                    </ul>
                    
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

export default Footer4

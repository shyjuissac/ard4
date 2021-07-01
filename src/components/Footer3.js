import React, { Component } from 'react'

export class Footer3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            f3items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://ard.stage.bmj.com/pages/wp-json/menus/v1/menus/authors')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                f3items:json,
                
            })
        });
    }
    render() {
        var {isLoaded, f3items} = this.state;
        console.log(f3items)
        
        if(!isLoaded){
            return <div>Loading...</div>;

        }
        else{
            return(
             
                
                <div className='footer3'>
                    <ul>
                    <h3>AUTHORS</h3>
                    <li>{f3items.items[0].title}</li>
                    <li>{f3items.items[1].title}</li>
                    <li>{f3items.items[2].title}</li>
                    <li>{f3items.items[3].title}</li>
                    <li>{f3items.items[4].title}</li>
                    
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

export default Footer3

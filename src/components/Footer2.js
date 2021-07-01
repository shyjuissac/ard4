import React, { Component } from 'react'

export class Footer2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            f2items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://ard.stage.bmj.com/pages/wp-json/menus/v1/menus/journal')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                f2items:json,
                
            })
        });
    }
    render() {
        var {isLoaded, f2items} = this.state;
        console.log(f2items)
        
        if(!isLoaded){
            return <div>Loading...</div>;

        }
        else{
            return(
               
                
                <div className='footer2'>
                    <ul>
                    <h3>JOURNAL</h3>
                    <li>{f2items.items[0].title}</li>
                    <li>{f2items.items[1].title}</li>
                    <li>{f2items.items[2].title}</li>
                    <li>{f2items.items[3].title}</li>
                    <li dangerouslySetInnerHTML={{ __html:f2items.items[4].title}}></li>
                    <li>{f2items.items[5].title}</li>
                    <li>{f2items.items[6].title}</li>
                    
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

export default Footer2

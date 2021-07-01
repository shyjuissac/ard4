import React, { Component } from 'react';

export class Menu2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch('https://ard.stage.bmj.com/pages/wp-json/menus/v1/menus/journal-menu')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items:json,
                
            })
        });
    }
    render() {
        var {isLoaded, items} = this.state;
        console.log(items)
        
        if(!isLoaded){
            return <div>Loading...</div>;

        }
        else{
            return(
                <div className='main'>
                <nav className='nav-journal primary-color'>
                <div className='leftmenu'><img src='//resources.bmj.com/repository/journals-network-project/images/journal-logos/logo-ard.png'></img></div>
                <div className='rightmenu'>
                    <ul>
                    <li>{items.items[0].title}</li>
                    <li>{items.items[1].title}</li>
                    <li>{items.items[2].title}</li>
                    <li>{items.items[3].title}</li>
                    <li>{items.items[4].title}</li>
                    <li>{items.items[5].title}</li>
                    
                    </ul>
                    </div>
                    </nav>
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

export default Menu2

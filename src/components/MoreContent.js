import React, { Component } from 'react'

export class MoreContent extends Component {

        constructor(props){
            super(props);
            this.state = {
                citems:[],
                isLoaded:false,
            }
        }
        componentDidMount(){
            fetch('https://ard.stage.bmj.com/pages/wp-json/wp/v2/pages/')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    citems:json,
                    
                })
            });
        }
        render() {
            var {isLoaded, citems} = this.state;
            console.log(citems)
            
            if(!isLoaded){
                return <div>Loading...</div>;
    
            }
            else{
                return(
                    <div >
                    <div className="container">
                    
                    <div className='MoreContent'>
                        <h1 dangerouslySetInnerHTML={{ __html:citems[2].title.rendered}}></h1>
                        <div className="metrix-d" dangerouslySetInnerHTML={{ __html:citems[2].metrics_data}}></div>
                        <div dangerouslySetInnerHTML={{ __html:citems[2].content.rendered}}></div>
                       
                        </div></div></div>
                       
                )
            }
            return (
                <div>
                    ss
                </div>
            )
        }
    }
export default MoreContent

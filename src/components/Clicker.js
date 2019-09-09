import React from 'react';
import { AppClicker } from '../Clickers/components/AppClicker';
import { withRouter } from 'react-router-dom';


class Clicker extends React.Component {
    constructor() {
        super();
        this.state = {
            counter:[]
        };
    }

    goToHomePage = () => {
        this.props.history.push({
            pathname: "/"
        })
    }

    addClicker = () => {
        const {counter} = this.state;
        const arr = counter;
        const counterNum = counter.length
        arr.push({counterNum:0});
        this.setState({counter:arr});
        // console.log('click', counter.length)
    };

    render() {

        const addClickerApp = () =>{
            const {counter} = this.state;
            console.log('1')
            if(counter.length>0){
                return counter.forEach((counter)=>{
                    return(
                        <AppClicker counter={counter}/>
                    )
                })
            }
        }



        return (
            <div>
                {addClickerApp}
                <button className="btn btn-secondary" onClick={this.addClicker}>Add Clicker</button>
                <button className="btn btn-secondary" onClick={this.goToHomePage}>Return Home</button>
            </div>
        )
    }
}


export default withRouter(Clicker);
import React from 'react';
import { AppClicker } from '../Clickers/components/AppClicker';
import { withRouter } from 'react-router-dom';


class Clicker extends React.Component {
    constructor() {
        super();
        this.state = { data: AppClicker }
    }

    goToHomePage = () => {
        this.props.history.push({
            pathname: "/"
        })
    }

    addClicker = () => {
        // this.setState({

        // })
        console.log('click')
    };



    render() {

        return (
            <div>
                <button className="btn btn-secondary" onClick={this.addClicker}>Add Clicker</button>
                <button className="btn btn-secondary" onClick={this.goToHomePage}>Return Home</button>
            </div>
        )
    }
}


export default withRouter(Clicker);
import React from 'react';
import { AppClicker } from '../Clickers/components/AppClicker';
import { withRouter } from 'react-router-dom';
import './clicker.css';


class Clicker extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: []
        };
    }

    goToHomePage = () => {
        this.props.history.push({
            pathname: "/"
        })
    }

    addClicker = () => {
        const { counter } = this.state;
        const arr = counter;
        if (arr.length <= 4) {
            arr.push(0);
        }
        this.setState({ counter: arr });
        console.log(this.state.counter);
    };

    render() {
        const { counter } = this.state;
        const appClicker = [];
        if (counter.length > 0 && counter.length <= 5) {
            counter.forEach((item, index) => {
                appClicker.push(<AppClicker key={`counter${index}`} />);
            });
        }

        return (
            <div>
                <button className="btn btn-secondary" onClick={this.addClicker}>Add Clicker</button>
                <button className="btn btn-secondary" onClick={this.goToHomePage}>Return Home</button>
                <div className="myClickers">
                    {appClicker}
                </div>
            </div>
        )
    }
}


export default withRouter(Clicker);
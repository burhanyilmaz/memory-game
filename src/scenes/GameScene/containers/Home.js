import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { shufle , checkCards } from '../actions/GameAction'
import { STATE_GAME } from '../constant';
import Card from '../component/Card';
import Button from '../component/Button';
import '../style/style.css';

class Home extends Component {
    componentDidMount() {
        this._shuffle();
    }

    _shuffle() {
        this.props.shufle();
    }

    render() {
        return(
            <div className="container">
                <div className="title"> <i className="icon" class="fas fa-gamepad"></i>   Memory Game</div>
                <div key={this.props.shuffledCards}>
                    <Card data={this.props.shuffledCards} checkCards={this.props.checkCards} />
                </div>
                <Button onClick={() => this._shuffle()} title="Shuffle" icon="fas fa-random"/>
                <Button title={this.props.counter} icon="fas fa-mouse-pointer"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { shuffledCards, counter } = state[STATE_GAME];
    return { shuffledCards, counter };
}

export default connect(mapStateToProps, { shufle, checkCards })(Home);
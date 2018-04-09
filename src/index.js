import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import styledComponent from 'styled-components';
import styled from 'styled-components';
import { Provider} from 'react-redux';
import './style.scss';
import store from './src/config/redux/configureStore';

const Greeting = styled.h1`
    text-align: center;
    color: crimson;
    font-size: 20px;
`
type Props = {
    foo: number,
    bar: string,
}

const cards = ['a', 'b', 'c', 'ç', 'd', 'e'];
let mixed = {};
let recentNumber = null;
console.clear();
const checkUniqNum = (number, x ,z) => {
    console.log(z);
    return !mixed.number;type Props = {
        foo: number,
        bar: string,
    }
}
let sayi = 0;
cards.map((data, index) => {
    // console.log(index);
    // console.log(data);
    let number = 0;
    let randNum = [];
    let uniqNum = {};
    while(number < 2) {
        const randomNumber = Math.floor((Math.random() * 12) + 1);
        recentNumber = randomNumber;
        if (!mixed[randomNumber]) {
            mixed = Object.assign(mixed, {[randomNumber]: { icon: data, display: false} });
            number++; 
        }
    }
    number = 0;
});
console.log(Object.assign(mixed, {1: {icon: mixed[1].icon, display: true }}));

//console.log(mixed);



const test = (a: string, b: number, c: boolean) => {};

class Hello extends React.Component<Props> {
    componentWillMount() {
        test("undefined", 4, false);
    }
    render() {
        return(
            <Greeting>Hello {this.props.foo}</Greeting>
        );
    }
}

class Hello1 extends React.Component<Props> {
    componentWillMount() {
        test("undefined", 4, false);
    }
    render() {
        return(
            <Greeting>Hello 1 {JSON.stringify(this.props)}</Greeting>
        );
    }
}

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={Hello} />
        </div>
    </BrowserRouter>
);

const app = document.getElementById('app');
if (app === null) {
    throw new Error("no app element");
}
render(
    routes,
    app
);


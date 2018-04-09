import React from 'react';
import _ from 'lodash';

export default (props) => {
    return _.values(props.data).map((data, index) => {
        const key = `${data.icon}-${index}-${data.display}-${index*5}`;
        if (!data.display) {
            return <p className="card"  key={key} onClick={() => { props.checkCards(index+1) }} />
        }
        return <p className="card" style={{ backgroundColor: 'rgb(86, 72, 204)'}} key={key} onClick={() => { if(!data.display) { props.checkCards(index+1) } }}><i className={data.icon}></i></p>
    })

}
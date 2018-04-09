import React from 'react';
import _ from 'lodash';

export default (props) => {
    const { title, onClick, icon, color } = props;
    return (
        <div
        className="button"
        style={{ backgroundColor: color && color}}
        onClick={onClick ? () => onClick() : () => {} }
        >
        {icon && <i className={icon}></i>}  {title && title}
        </div>
    );
}
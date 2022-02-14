import React from 'react';
import * as C from './styles';

export const GlobalFilter = ({ filter, setFilter }) => {

    const handleChange = (e) => {
        setFilter(e.target.value);
    };
    return (
        <C.SeachInput
            type="text"
            placeholder="Search"
            value={filter || ''}
            onChange={handleChange}
        />
    );
};
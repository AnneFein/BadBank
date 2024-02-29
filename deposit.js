import React from 'react';
import { Card, UserContext } from './context';

function Deposit(){
    const ctx = React.useContext(UserContext);
    return (
        <h1>Deposit<br/>
            {JSON.stringify(ctx)}
            </h1>
    );
}

export default Deposit;
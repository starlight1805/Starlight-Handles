import React from 'react';
import { render } from '@testing-library/react';
import Chatcomponent from './Chatcomponent';

function Messages(){
    render();{
        return(
            <div className="messgdiv">
                <Chatcomponent/>
            </div>
        );
    }
    
}
export default Messages;
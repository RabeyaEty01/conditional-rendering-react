import React from 'react';
import Player from '../Player/Player';
import Teacher from '../Teacher/Teacher';

const User = (props) => {
    const { familiar } = props;

    //1. element variable

    let greeting;
    if (familiar) {
        greeting = <h5>Hello friend ,How are you ?</h5>
    }
    else {
        greeting = <h5>I don't know you.</h5>
    }

    //2. ternary operator
    //condition ?(display this part if condition true):(if condition false)
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {familiar? <h4>Biriyani</h4>: <h4>
                    Taka nai pocket e</h4>}
            </div>
            <div>
                <h2>A lot of things</h2>
                {
                    familiar? <div>
                        <h3>My Title</h3>
                        <p>This is paragraph</p>
                    </div>
                    :
                    <div>
                        <h3>Door closed</h3>
                        <p>Chabi haray felsi</p>
                    </div>
                }

            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <div>
                        <h5>frnd tomar phone number ta de</h5>
                    </div>
                }
                {
                    familiar && <Player></Player>
                }
            </div>
            <div>
                <h2>Profession</h2>
                {familiar? <Teacher></Teacher> 
                : <Player></Player>}
            </div>
            <div>
                <h2>Share Drink</h2>
                {familiar || <h4>Khamu daab er pani haramu tk poisha shob khani</h4>}
            </div>
        </div>
    );
};

export default User;
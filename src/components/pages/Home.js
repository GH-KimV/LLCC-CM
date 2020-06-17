import React from 'react';

const Home = () => {
    return (
        <div className='container'>
            <div className='teal-container'>
                <div className='row'>
                    <div className='picture'>PICTURE  <br/> HERE</div>
                    <div className='text-box-pink'>Welcome</div>
                </div>
                <div className='row'>
                    <div className='text-box-yellow'>Sunday @11:00 AM</div>
                    <div className='picture'>PICTURE  <br/> HERE</div>
                </div>
            </div>
            <div>
                <button className='action-btn'>
                    <strong>WHAT TO EXPECT</strong>
                </button>
            </div>
            <div className='pink-container'>
                <div className='row'>
                    <div className='text-box-shadow-teal'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia quidem eligendi nisi voluptatibus et ratione ad,
                        commodi deleniti
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

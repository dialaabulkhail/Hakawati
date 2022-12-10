import React from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const MyCountdown = () => {
  return (
    <div className='font-extrabold mt-2'>
        <Countdown date={Date.now() + 7200000} />
    </div>
  )
}

export default MyCountdown
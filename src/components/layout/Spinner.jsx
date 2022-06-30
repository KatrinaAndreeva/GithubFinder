import React from 'react'
import SpinnerImg from './assets/spinner.gif'

function Spinner() {
  return (
    <div className="mt-20 w-100">
      <img width={180} className="mx-auto text-center" src={SpinnerImg} alt="Loading" />
    </div>
  )
}

export default Spinner
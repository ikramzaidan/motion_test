import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="flex w-full gap-5">
            <Link className="hover:text-blue-400" to="/counter">Counter</Link>
            <Link className="hover:text-blue-400" to="/crawler">Crawler</Link>
            <Link className="hover:text-blue-400" to="/time">Time</Link>
        </div>
    </div>
  )
}

export default Home;

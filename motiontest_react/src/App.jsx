import { useState } from 'react'
import { Outlet, useNavigate  } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {location.pathname !== '/' && (
        <button onClick={handleBack} className="fixed top-1 left-1 text-black hover:font-semibold p-3">
          Kembali
        </button>
      )}
      <Outlet></Outlet>
    </div>
  )
}

export default App;

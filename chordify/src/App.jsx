import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Button from './components/Button'
import TimeDisplay from './components/Time'

function App() {
  const [name, setName] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      setShowGreeting(true)
    }
  }

  const resetForm = () => {
    setShowGreeting(false)
    setName('')
  }

  return (
    <div className="h-screen max-w-screen bg-[#F3F4F4] flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8">
       

        <div className="bg-white rounded-2xl p-8">
          {!showGreeting ? (
            <form onSubmit={handleSubmit}>
              <div className="">
              <h1 className="text-4xl font-bold text-teal-600 text-center">
                Welcome to Dynamic Greeter
              </h1>
               <div className="bg-teal-light rounded-2xl pb-10 ">
          <TimeDisplay />
        </div>

              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="What's your name?"
                    className="flex-1 px-6 py- 3 rounded-xl bg-white border-2 border-teal-200
                             focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-200
                             text-lg text-teal-600 placeholder-teal-300"
                    required
                  />
                  <Button color="teal-light" className="" type="submit">
                    Send
                  </Button>
                </div>
                <div className="flex justify-center gap-4">
                  
                  <Button color="teal-light" onClick={resetForm} type="button">
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <Greeting name={name} />
              <div className="flex justify-center">
                <Button color="teal" onClick={resetForm}>
                  Start Over
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

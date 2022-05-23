import Quote from './components/Quote'
import Footer from './components/Footer'
import { data } from './data/data'
import { useState, useEffect } from 'react'

function App() {
  const showYear = true

  const [quote, setQuote] = useState(data[0])
  const [isLoading, setIsLoading] = useState(true)

  const randomise = () => {
    const randomNumber = Math.floor(Math.random() * data.length)
    setQuote(data[randomNumber])
  }

  useEffect(() => {
    randomise()
    setIsLoading(false)
  }, [])

  return (
    <section>
      <div className='App'>
        <h1>Hi there</h1>
        {isLoading ? <p>Quote now loading...</p> : <Quote data={quote} />}
        <button onClick={randomise}>Generate</button>
      </div>
      {/* {Footer} */}
      <Footer year={showYear} />
    </section>
  )
}

export default App

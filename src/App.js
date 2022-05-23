import Quote from './components/Quote'
import Footer from './components/Footer'

function App() {
  return (
    <section>
      <div className='App'>
        <h1>Hi there</h1>
        {/* {quote} */}
        <Quote />
        <button>Generate</button>
      </div>
      {/* {Footer} */}
      <Footer />
    </section>
  )
}

export default App

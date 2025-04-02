import data from './components/data.json';
import Listing from './components/Listing';
import './App.css'

function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  )
}

export default App
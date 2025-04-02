import data from './components/data.json';
import Listing from './components/Listing';
import './App.css'

const itemsWithImage = data.filter(item => item.MainImage); //оставим только те объекты, которые имеют свойство MainImage

function App() {
  return (
    <div className="App">
      <Listing items={itemsWithImage} />
    </div>
  )
}

export default App

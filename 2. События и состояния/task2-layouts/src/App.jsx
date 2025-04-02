import './App.css'
import Store from './componets/Store/Store';
import products from './componets/data/Products';

function App() {
  const list = products;

  return (
      <div>
        <Store products={list}/>    
      </div>
  )
}

export default App

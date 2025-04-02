import MovieCard from './components/MovieCard';
import './App.css'

function App() {
  return (
    <div>
      <MovieCard
        title="Супермен"
        rating={4}
      />
      <MovieCard
        title="Одинокий странник"
        rating={2}
      />
    </div>
  );
}

export default App

// import React from 'react';
import Card from './components/Card'; 
// import './image/image.jpg';
import './App.css';


  function App() {
  return (
    <div>
      <Card
        title="Card title"
        imageUrl="/image/image.jpg"
        linkUrl="#"
        linkText="Go somewhere"
      >
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </Card>

      <Card title="Special title treatment"
        linkText="Go somewhere"
      >
        This card has no image.
      </Card>
    </div>
  );
};

// export default MyComponent;

// function App() {
//     return (
  
//   )
// }

export default App

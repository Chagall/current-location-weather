import './App.css';

function App() {

  function test () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("O serviço de geolocalização não é suportado por este navegador.");
    }
  }

  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude) 
    console.log("Longitude: " + position.coords.longitude);
  }

  return (
    <div className="App">
      {test()}
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/card.component';

function App() {
  return (
    <div className="App">
      <h1>Mulearn project done so far:</h1>
			<hr></hr>
			<Card title={"Django Todo Backend"} description={"Build a django project in which users can signup/login and create TODOs."}/>
			<hr></hr>
			<Card title={"Django Todo REST API"} description={"Build APIs for all the features of the TODO app and tested it with postman"}/>
			<hr></hr>
			<Card title={"React App CRA"} description={"Made a card component to display what you see right now"}/>
			<hr></hr>
    </div>
  );
}

export default App;

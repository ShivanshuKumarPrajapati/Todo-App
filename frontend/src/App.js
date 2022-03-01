import './App.css';
import Header from './component/header/Header'
import CreateNote from './component/CreateNote/CreateNote'
import SavedNote from './component/savedNote/SavedNote';
function App() {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <SavedNote/>
    </div>
  );
}

export default App;

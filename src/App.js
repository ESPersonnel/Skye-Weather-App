import './App.css';
import Search from './components/search/Search';

function App() {

  const handleOnSearchChange = (value) => {
    console.log(value);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;

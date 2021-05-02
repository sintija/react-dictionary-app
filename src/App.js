import Container from '@material-ui/core/Container'
import Illustration from './Illustration'
import Dictionary from './Dictionary'
import './App.css';


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Illustration />
        <Dictionary defaultKeyword="hello" />
      </Container>
    </div>
  );
}

export default App;

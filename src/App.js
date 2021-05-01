import Container from '@material-ui/core/Container'
import Illustration from './Illustration'
import Dictionary from './Dictionary'


function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Illustration />
        <Dictionary />
      </Container>
    </div>
  );
}

export default App;

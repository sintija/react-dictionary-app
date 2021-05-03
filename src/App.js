import Container from "@material-ui/core/Container";
import Illustration from "././PhotosComponent/Illustration";
import Dictionary from "./Dictionary";
import "./App.css";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Illustration />
        <Dictionary defaultKeyword="hello" />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

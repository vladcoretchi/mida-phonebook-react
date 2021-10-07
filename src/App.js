import { Container } from "react-bootstrap";
import PBNavbar from "./components/navbar";
import PhoneCommands from "./components/commands";
import Phonebook from "./components/phonebook";
import axios from 'axios';

const GetPhonebook = () => {
  try {
    let { data } = axios.get('/api/phonebook');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

function App() {
  return (
    <div className="App">
      <PBNavbar />
      <Container>
        <PhoneCommands />
        <Phonebook data={GetPhonebook()} />
      </Container>
    </div>
  );
}

export default App;

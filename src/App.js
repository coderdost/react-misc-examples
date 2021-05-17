import logo from './logo.svg';
import './App.css';
import {Modal, ModalContent} from './modal';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Modal>
        <ModalContent></ModalContent>
      </Modal>
    </div>
  );
}

export default App;

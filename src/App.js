import './App.css';
import image from './Binder23.jpg';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={image} className="App-logo" alt="logo" />
        <div className='centered'>
          <p>Сайт на реконструкции</p>

          <p>ООО "ФасКон"</p>

          <p>8 (812) 677-61-98</p>

          <a href="mailto: info@faskon.su">info@faskon.su</a>
        </div>
      </div>
    </div>
  );
}

export default App;

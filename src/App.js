import './style.css';
import NavBar from './component/navbar';
import Card from './component/card';
import ItemListContainer from './component/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <NavBar/>
    <div className="App">    
      <ItemListContainer greeting={"BlueButterfly"}/>
      <div className="ofertas">
        <Card/> <Card/> <Card/> <Card/>
      </div>
    </div>
    </>
  );
}

export default App;
import './style.css';
import NavBar from './component/navbar';

// import ItemListContainer from './component/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './component/ItemDetailContainer';
function App() {
  return (
    <>
    <NavBar/>
    {/* <ItemListContainer greeting={"BlueButterfly"}/> */}
    <div className="App"> 
       
    </div>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
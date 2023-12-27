import './App.css';
import Footer from './general/Footer';
import Body from './general/Body';
import Header from './general/Header';

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <div style={{ position: 'sticky', top: 0, backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
          <Header />
        </div>
        
        <div style={{ flex: 1, backgroundColor: 'turquoise', padding: '0 5%', boxSizing: 'border-box' }}>
          <Body />
        </div>

        <div style={{ backgroundColor: 'lightblue',bottom:0 ,color: 'white', padding: '10px', textAlign: 'center' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

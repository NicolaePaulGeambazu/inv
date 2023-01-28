import './App.css';
import styled from 'styled-components';
import image from '../src/img/image.svg';
import dateEvent from '../src/img/date.svg'
import "typeface-calligraffitti"


function App() {
  return (
   <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height:812,width:'100%' }}>
    <div style={{margin: 'auto', width: '80%', paddingTop:'60%'}}>
      <div style={{ width:'60%', textAlign: 'center', margin: 'auto', fontFamily: 'Roboto',  paddingBottom: '10px'}}>
      You are warmly invited to the wedding of
    </div>
    <div style={{ width: '64%', textAlign: 'center', margin: 'auto'}}>
    <div style={{fontFamily: 'Calligraffitti'}}>
      Paul Nicolae Geambazu
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Calligraffitti'}}>&</div>
    <div style={{fontFamily: 'Calligraffitti'}}>Camelia Geambazu</div>
    <div>
      Impreuna cu  nasii nostri
    </div>
    <div style={{  paddingBottom: '10px'}}>
     <div>
      Catalin  Jiga
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>&</div>
    <div>Roxana Jiga</div>
      
    </div>
    </div> 
    <div style={{  paddingBottom: '10px', marginLeft: '-25px'}}>
      <img src={dateEvent} alt="" />
    </div>
    <div style={{ margin: 'auto', textAlign: 'center'}}>
      <div>
      La Nasu
      </div>
      <div style={{ width: '40%', margin: 'auto'}}>166 Tolladine Rd, Worcester</div>
      </div> 
    </div>
    </div>
  );
}

export default App;

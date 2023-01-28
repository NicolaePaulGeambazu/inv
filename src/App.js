import './App.css';
import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import image from '../src/img/image.svg';
import dateEvent from '../src/img/date.svg'
import "typeface-calligraffitti"


function App() {
  const [showComponent, setShowComponent] = useState(false)
  const [names, setNames] = useState([]);
  /**Text in Romanian */
  const text1Ro= 'Va asteptam cu mare drag sa ne fiti alaturi la';
  const mire = 'Paul Nicolae Geambazu';
  const mireasa = 'Camelia Geambazu';
  const impreunaCuRo = 'Impreuna cu nasii nostri';
  const nasu = 'Catalin Jiga';
  const nasa = 'Roxana Jiga';
  const firstMsgRo = 'vrem sa va spunem prin acest link urmatoarele'
  /**Text in English */
  const text1Eng= 'We look forward to having you join us at';
  const impreunaCuEng = 'Toghether with our godparents';
  const firstMsgEng = 'we want to tell you the following through this link';


  /**Text in Italian */
  const text1It= 'Non vediamo la ora di averti con noi a';
  const impreunaCuIt = 'Insieme ai nostri antenati spirituali';
  const firstMsgIt = 'vogliamo dirvi quanto segue attraverso questo link'

  useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponent(true);
      }, 4000);
      return () => clearTimeout(timer);
  }, [names]);

useEffect(() => {
var regex = /[?&]([^=#]+)=([^&#]*)/g,
        url = window.location,
        params = {},
        match;
    while(match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    setNames(params)
}, [window.location])
const showTextLng = () => {
  if (names.lng === 'it') {
    return text1It;
  }
  if (names.lng === 'ro') {
    return text1Ro;
  } else return text1Eng;
}

const showTextWithLng = () => {
    if (names.lng === 'it') {
    return impreunaCuIt;
  }
  if (names.lng === 'ro') {
    return impreunaCuRo;
  } else return impreunaCuEng;
}

const firstMsg = () => {
      if (names.lng === 'it') {
    return firstMsgIt;
  }
  if (names.lng === 'ro') {
    return firstMsgRo;
  } else return firstMsgEng;
}
const showNames = (names) => {
  const name1 = names.name1;
  const name2 = names.name2;
  const numeString = name1 + " si " + name2;
  return(
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: 'auto', width: '90%', textAlign: 'center'}}>{numeString} {firstMsg()}</div>
  )
}
  return (
    <div>
    {!showComponent ? showNames(names) :
   <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height:812,width:'100%' }}>
    <div style={{margin: 'auto', width: '80%', paddingTop:'60%'}}>
      <div style={{ width:'60%', textAlign: 'center', margin: 'auto', fontFamily: 'Roboto',  paddingBottom: '10px'}}>
      {showTextLng()}
    </div>
    <div style={{ width: '64%', textAlign: 'center', margin: 'auto'}}>
    <div style={{fontFamily: 'Calligraffitti'}}>
      {mire}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Calligraffitti'}}>&</div>
    <div style={{fontFamily: 'Calligraffitti'}}>{mireasa}</div>
    <div>
      {showTextWithLng()}
    </div>
    <div style={{  paddingBottom: '10px'}}>
     <div>
      {nasu}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>&</div>
    <div>{nasa}</div>
      
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
 }
    </div>
  );
}

export default App;

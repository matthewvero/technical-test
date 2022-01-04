import './App.css';
import { io } from 'socket.io-client';
import {useEffect, useState} from 'react';
import MatchTable from './components/match-table.component';
function App() {
  
  const [matchData, setMatchData] = useState([]);
  useEffect(() => {
    const socket = io('https://mst-full-stack-dev-test.herokuapp.com/');

    socket.on("connect_error", () => {
      setTimeout(() => {
        console.log('Connection failed')
        socket.connect();
      }, 1000);
    });

    socket.on('data-update', (data) => {
      setMatchData(matchData => [...matchData, data]);
    })
 
    return () => {
      socket.disconnect();
    }
  }, [])

  return (
    <div className="App">
      <MatchTable matchData={matchData}/>
    </div>
  );
}

export default App;

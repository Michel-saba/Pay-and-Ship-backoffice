import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import MainPageLayout from './pages/Backoffice/MainPageLayout';


function App() {
  const [IsUser, setIsUser] = useState(false);
  function onSignIn() {
    setIsUser(true);
  }
  const onDisconnect = () => {
    setIsUser(false);
  };
  return (
    <div className='App'>
      {!IsUser && <SignIn onSignIn={onSignIn} />}
      {IsUser && <MainPageLayout onSignOutUser={onDisconnect} />}
    </div>
  );
}

export default App;

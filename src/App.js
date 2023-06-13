import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import MainPageLayout from './pages/Backoffice/MainPageLayout';
import Footer from './components/Footer';

function App() {
  const [IsUser, setIsUser] = useState(false);
  function onSignIn() {
    setIsUser(true);
  }
  return (
    <div className='App'>
      {!IsUser && <SignIn onSignIn={onSignIn} />}
      {IsUser && <MainPageLayout />}
    </div>
  );
}

export default App;

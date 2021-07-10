import './App.css';
import Main from './components/Main/Main';
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from "./components/Login/Login"
import { auth, createUserProfileDocument } from './firebase'
import { useEffect } from 'react';


function App() {

  const [user, loading] = useAuthState(auth);

  useEffect(()=>{
    createUserProfileDocument(user);
  }, [user])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!user) 
      return <Login />
      
  return (
    <div className="App">
        <Main user={user} />
    </div>
  );
}

export default App;

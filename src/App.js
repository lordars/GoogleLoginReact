import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
function App() {

const [perfil, setPerfil] = useState({
  givenName: null,
  email: null,
  imageUrl: null
}
)



 const  responseGoogleSussesLogin = response =>{
    return  setPerfil( response.profileObj)


  }

  const  FailGoogleLogin = response =>{
    return  console.log("fail #465" ,response )
  }
  return (
    <div className="App">
      <div className="botaoGoogleLogin">

     <GoogleLogin 
     clientId={process.env.REACT_APP_GOOGLE_API_A0TEST }
     buttonText="Pode cambiar o nome do botão"
     onSuccess= {responseGoogleSussesLogin}
     onFailure={FailGoogleLogin}
     cookiePolicy={'single_host_origin'}
     />

     <div className="dadosPosLogin">
       <h1>{perfil.givenName}</h1>
       <h1>{perfil.email}</h1>
      <img src={perfil.imageUrl} className="imagemLogin"       />
     </div>
      </div>
    </div>
  );
}

export default App;

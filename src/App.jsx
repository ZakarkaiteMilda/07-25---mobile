import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import { useState } from 'react';
import style from './App.module.css';
import { Burger } from "./pages/Burger";
import { CreateAccount } from "./pages/CreateAccount";
import { HomeFirstStep } from "./pages/HomeFirstStep";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { Page } from "./pages/Page";
import { Page404 } from "./pages/Page404";
import { HomeFirstStepSecondStep } from "./pages/HomeFirstStepSecondStep";
import { TermsService } from "./pages/TermsService";
import { HomeFirstStepSecondStepThirdStep } from "./pages/HomeFirstStepSecondStepThirdStep";
import { Layout } from "./layout/Layout";
import { Layout2 } from "./layout/Layout2";

function App() {

// const [name, setName] = useState('');
// const [surname, setSurname] = useState('');
// const fullname = `${name} ${surname}`.trim();

// function updateName(event) {
//   setName(event.target.value);
// }

// function updateSurname(event) {
//   setSurname(event.target.value);
// }

  return (
    <div className={style.app}>
    <BrowserRouter>
      <Routes>
         <Route index path="/" element={<Home /> } /> 
        <Route Component={Layout}>
              <Route path="/FirstStep" element={<HomeFirstStep /> } />
              <Route path="/FirstStep/SecondStep" element={<HomeFirstStepSecondStep /> } />
              <Route path="/FirstStep/SecondStep/ThirdStep" element={<HomeFirstStepSecondStepThirdStep /> } />
        </Route>


        <Route Component={Layout2}>
            <Route path="CreateAccount" element={<CreateAccount /> } />
            <Route path="LogIn" element={<LogIn /> } />
            <Route path="TermsService" element={<TermsService /> } />
        </Route>

        <Route path="Burger" element={<Burger /> } />
       

        <Route path="Page" element={<Page /> } />
     
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    {/* <form className={style.form}>
      <div className={style.row}>
        <label htmlFor='name'>Name</label>
        <input onChange={updateName} value={name} id='name' type="text" required placeholder="Name" />
      </div>
      <div className={style.row}>
        <label htmlFor='surname'>Surname</label>
        <input onChange={updateSurname} value={surname} id='surname' type="text" required placeholder="Surname"/>
      </div>
      <div className={style.row}>
        <button type='submit'>Create</button>
      </div>
    </form>
    <div className={style.preview}>"{fullname}"</div> */}
    </div>
  );
}

export default App;

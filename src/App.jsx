import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import { useState } from 'react';
import style from './App.module.css';
import { Burger } from "./pages/Burger/Burger";
import { CreateAccount } from "./pages/CreateAccount/CreateAccount";
import { Home } from "./pages/Home/Home";
import { HomeFirstStep } from "./pages/HomeFirstStep/HomeFirstStep";
import { HomeFirstStepSecondStep } from "./pages/HomeFirstStepSecondStep/HomeFirstStepSecondStep";
import { HomeFirstStepSecondStepThirdStep } from "./pages/HomeFirstStepSecondStepThirdStep/HomeFirstStepSecondStepThirdStep";
import { LogIn } from "./pages/LogIn/LogIn";
import { Page } from "./pages/Page/Page";
import { Page404 } from "./pages/Page404/Page404";
import { TermsService } from "./pages/TermsService/TermsService";

import { Layout } from "./layout/Layout/Layout";
import { Layout2 } from "./layout/Layout2/Layout2";
import { Layout3 } from "./layout/Layout3/Layout3";

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
        <Route Component={Layout3}>
            <Route path="Page" element={<Page /> } /> 
        </Route>
        <Route path="Burger" element={<Burger /> } />
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

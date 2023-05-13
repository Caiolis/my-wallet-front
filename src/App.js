// Librarys
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { GlobalStyle } from "./styles/GlobalStyles";

// Pages
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import NewInputPage from "./pages/NewInputPage/NewInputPage";
import NewOutputPage from "./pages/NewOutputPage/NewOutputPage";

export default function App() {
  return (
   <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/newinput" element={<NewInputPage />} />
        <Route path="/newoutput" element={<NewOutputPage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
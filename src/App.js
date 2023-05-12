// Librarys
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { GlobalStyle } from "./styles/GlobalStyles";

// Pages
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  return (
   <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
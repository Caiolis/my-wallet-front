// Librarys
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { GlobalStyle } from "./styles/GlobalStyles";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

export default function App() {
  return (
   <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}
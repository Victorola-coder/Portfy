import { Analytics } from "@vercel/analytics/react";
import Hero from "./pages/hero/hero";
import Navbar from "./assets/components/Navbar";
// App.jsx
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <>
    //   <Navbar />
    //   <Hero />
    // <Analytics />
    // </>

    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;

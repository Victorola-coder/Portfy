import { Analytics } from "@vercel/analytics/react";
import Navbar from "./assets/components/navbar/navbar";
import Hero from "./assets/components/hero/hero";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Analytics/>
    </>
  );
}

export default App
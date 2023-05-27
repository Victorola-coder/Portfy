import { Analytics } from "@vercel/analytics/react";
import Navbar from "./assets/components/navbar/navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Analytics/>
    </>
  );
}

export default App
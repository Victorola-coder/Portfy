import { useEffect } from "react";
// import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./Error";
import Navbar from "./components/Navbar";
// import Test from "../Test";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Update the title tag on route change
    const currentRoute = location.pathname;

    // Define the route-title mappings
    const routeTitleMappings = {
      "*": "VickyJay || page not found",
      "/": "VickyJay || Creative Frontend Engineer",
      // Add more routes and titles as needed
    };

    // Set the default title
    let pageTitle = "VickyJay";

    // Check if the current route has a corresponding title mapping
    if (routeTitleMappings.hasOwnProperty(currentRoute)) {
      // Update the page title
      pageTitle = routeTitleMappings[currentRoute];
    }

    // Set the updated title tag directly in the HTML document
    document.title = pageTitle;
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </>
  );
};

export default App;

// => VICKYJAY CODES THE WEB✌😎

import { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("page1");
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {currentPage === "page1" && <Page1 navigateToPage={navigateToPage} />}
      {currentPage === "page2" && <Page2 navigateToPage={navigateToPage} />}
      {currentPage === "page3" && <Page3 navigateToPage={navigateToPage} />}
      {currentPage === "page4" && <Page4 navigateToPage={navigateToPage} />}
      {currentPage === "page5" && <Page5 navigateToPage={navigateToPage} />}
      {currentPage === "page6" && <Page6 navigateToPage={navigateToPage} />}
      {currentPage === "page7" && <Page7 navigateToPage={navigateToPage} />}
    </div>
  );
}

export default App;

import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import {useState} from 'react';
import Ghost from './components/ghost/Ghost';
import Photos from './components/photos/Photos';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const handlePageChange = (page) => {
      let linkEls = document.querySelectorAll(".navlink")
      linkEls.forEach(item => {
          item.classList.add("hidden");
      })
      setCurrentPage(page)
  };

  const renderPage = () => {
    switch(currentPage) {
      case "ghost":
        return <Ghost />
      case "photos":
        return <Photos />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

export default App;

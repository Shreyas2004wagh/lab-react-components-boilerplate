import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './Components/GallaryFooter.jsx';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx'

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <Header />

      <Body imageData={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;

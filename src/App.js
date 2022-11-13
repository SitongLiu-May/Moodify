
import './App.css';


// function Image({src}) {
//   return (
//     <div className={"Image"}>
//       <img src={src} alt="Image" />
//     </div>
//   )
// }



function App() {
return (
<div className="App">
<p className="App-WelcomeGreating">Welcome to Moodify. We're here to help you</p>
<p className = "App-WelcomeGreating">Hello.</p>


<p className = "Heading">How do you feel?</p>
<p className = "Good">Good morning</p>
  <button className = "Happy"> <img src={"./Photos/Happy.png"} alt = "Image"/> </button>
  <button className = "Angry"> <img src={"./Photos/Angry.png"} alt = "Image"/> </button>
  <button className = "Sad"> <img src={"./Photos/Sad.png"} alt = "Image"/> </button>
  <button className = "Dead"> <img src={"./Photos/Dead.png"} alt = "Image"/> </button>




  {/*<button className = "Angry"> <img src={"./Photos/Angry.png"} /> </button>*/}
  {/*<button className = "Sad"> <img src={"./Photos/Sad.png"} /> </button>*/}
  {/*<button className = "Dead"> <img src={"./Photos/Dead.png"} /> </button>*/}



<p className="App-p">Welcome to Moodify. We're here to help you</p>

<p> Please tell us hofhfhw you feel hah husakhskahkhadw</p>
</div>
);
}
const genreNames = ['Action', 'Adventure', 'Animation', 'Comedy', 
  'Documentary', 'Drama', 'Family', 'Fantasy',
  'History', 'Horror', 'Music', 'Mystery',
  'Romance', 'Science Fiction', 'TV Movie', 'Thriller',
  'War', 'Western']




export default App;
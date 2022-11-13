import './App.css';

function App() {
return (
<div className="App">
<p className="App-WelcomeGreeting">Welcome to Moodify. We're here to help you</p>


<p className = "Heading">How do you feel?</p>
<p className = "Good">Good morning</p>


<button className = "Happy"> <img src={"./Photos/Happy.png"} /><div class="caption">Happy</div>
 </button>
<button className = "Angry"> <img src={"./Photos/Angry.png"} /> 
<div class="caption">Angry</div></button>
<button className = "Sad"> <img src={"./Photos/Sad.png"} /> <div class="caption">Sad</div>
</button>
<button className = "Dead"> <img src={"./Photos/Dead.png"} /> 
<div class="caption">Dead</div>
</button> 


</div>
);
}

const genreNames = ['Action', 'Adventure', 'Animation', 'Comedy', 
  'Documentary', 'Drama', 'Family', 'Fantasy',
  'History', 'Horror', 'Music', 'Mystery',
  'Romance', 'Science Fiction', 'TV Movie', 'Thriller',
  'War', 'Western']




export default App;
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
<p className="App-WelcomeGreeting">WELCOME TO MOODIFY. </p>
<p className="App-Here">We're here to help. </p>


<p className = "App-Heading">How are you feeling?</p>
<p className = "Good">Good morning</p>
  
  <button className = "Happy"> <img src={"./Photos/Happy.png"} alt = "Image"/> </button>
  <button className = "Angry"> <img src={"./Photos/Angry.png"} alt = "Image"/> </button>
  <button className = "Sad"> <img src={"./Photos/Sad.png"} alt = "Image"/> </button>
  <button className = "Dead"> <img src={"./Photos/Dead.png"} alt = "Image"/> </button>




  {/*<button className = "Angry"> <img src={"./Photos/Angry.png"} /> </button>*/}
  {/*<button className = "Sad"> <img src={"./Photos/Sad.png"} /> </button>*/}
  {/*<button className = "Dead"> <img src={"./Photos/Dead.png"} /> </button>*/}



<button className = "Happy"> <img src={"./Photos/Happy.png"} /><div class="caption">Happy</div>
 </button>
<button className = "Angry"> <img src={"./Photos/Angry.png"} /> 
<div class="caption">Angry</div></button>
<button className = "Sad"> <img src={"./Photos/Sad.png"} /> <div class="caption">Sad</div>
</button>
<button className = "Dead"> <img src={"./Photos/Dead.png"} /> 
<div class="dead-caption">Dead</div>
</button> 
<div class="footer"> "Hello</div>

</div>
);
}



export default App;
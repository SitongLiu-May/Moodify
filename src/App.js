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










<div className="footer"> Welcome to Moodify! We're a project made for Boston Hacks where we find you the best music 
based off of your mood. Give us a try and find your jam!</div>
</div>



);
}



export default App;
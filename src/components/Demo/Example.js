const quizData =[
    {
      key:"1",
      question:"1. What is the name of Jon Snow's Direwolf?",
      options:{
        A:"Grey Wind",
        B:"Graham",
        C:"Ghost",
        D:"Gargamel",
      },
      correct:"Ghost"
    },
    {
      key:"2",
      question:"2. Name the \"other\" Stark child: Robb, Brandon, Sansa, Arya. Jon Snow and…?",
      options:{
        A:"Rickon",
        B:"Dickon",
        C:"Ramsay",
        D:"Eddard",
      },
      correct:"Rickon"
    },
    {
      key:"3",
      question:"3. What's the name of Lysa Arryn's way-too-old-to-be-nursing son?",
      options:{
        A:"Edmore",
        B:"Hoster",
        C:"Robin",
        D:"Nedwell",
      },
      correct:"Robin"
    },
    {
      key:"4",
      question:"4. What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?",
      options:{
        A:"Wildfire",
        B:"Dragonfire",
        C:"Godsfire",
        D:"Pantsonfire",
      },
      correct:"Wildfire"
    },
     {
      key:"5",
      question:"5. Which Lannister song signalled doom at the Red Wedding?",
      options:{
        A:"The Rains Of Castermere",
        B:"A Golden Crown",
        C:"The Assassin's Dagger",
        D:"Tales Of Topographic Oceans",
      },
      correct:"The Rains Of Castermere"
    }
  ]
    
  
  const AppStyle = {
    question:{
      width:"50%",
      height:'60px',
      backgroundColor:'#222465',
      fontSize:'20px',
      margin:'10px auto',
      border:'2px solid yellow',
      borderLeft:'10px solid yellow',
      borderRight:'10px solid yellow',
      color:'white',
      display:'flex',
      justifyContent:'left',
      paddingLeft:'10px',
      alignItems:'center'
    },
    answers:{
      width:'50%',
      display:'flex',
      flexWrap:'wrap',
      margin:'10px auto',
      
    },
    answer:{
      width:'45%',
      height:'30px',
      backgroundColor:'#222465',
      display:'flex',
      flexDirection:'row',
      justifyContent:'left',
      color:'white',
      alignItems:'center',
      margin:'15px auto',
      borderLeft:'1px solid yellow',
      borderRight:'1px solid yellow',
      boxSizing:'border-box',
      cursor:'pointer',
      paddingLeft:'10px',
    },
    btnNext:{
      width:0,
      height:0,
      borderLeft:'30px solid yellow',
      borderTop:'10px solid transparent',
      borderBottom:'10px solid transparent',
      margin:'20px',
      display:'inline-block',
      cursor:'pointer'
    },
    btnPrevious:{
      width:0,
      height:0,
      borderRight:'30px solid yellow',
      borderTop:'10px solid transparent',
      borderBottom:'10px solid transparent',
      margin:'20px',
      display:'inline-block',
      cursor:'pointer'
    },
    results:{
      width:'300px',
      color:'gray',
      border:'2px solid gray',
      margin:'auto',
      padding:'10px'
    }
    
  }
  class Quiz extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        question:quizData[0].question,
        qsNo:0,
        options:quizData[0].options,
        correctAnswer:"Ghost",
        correctCount:0,
        incorrectCount:0, 
        flashMsg:""
      }
      this.handleNavigation = this.handleNavigation.bind(this);
      this.handleAnswerClick = this.handleAnswerClick.bind(this);
      
    }
   
    handleNavigation(event){
      
      if(event ==="next" && (this.state.qsNo < quizData.length-1) ){
        
        console.log(this.state.qsNo+1);
        this.setState({qsNo:(this.state.qsNo+1)},()=> {
          this.setState({
            question:quizData[this.state.qsNo].question,
            options:quizData[this.state.qsNo].options,
            correctAnswer:quizData[this.state.qsNo].correct
          })
        });
                     
        
      }
      if(event === "previous" && (this.state.qsNo>=1)){
        console.log("prvs");
        this.setState({qsNo:(this.state.qsNo-1)},()=> {
          this.setState({
            question:quizData[this.state.qsNo].question,
            options:quizData[this.state.qsNo].options
          })
        });
      }
    }
    handleAnswerClick(option){
      this.handleNavigation("next");
      console.log(option);
      if(this.state.correctAnswer ==option){
        console.log("correct");
       
        this.setState({correctCount:this.state.correctCount+1})
      }
      else{
       this.setState({incorrectCount:this.state.incorrectCount+1})
      }
    }
    render(){
      return(
       <div>
         <Question questionData = {this.state.question}/>
         <Answers options = {this.state.options} onAnswerClick ={this.handleAnswerClick}/> 
         <Navigation  onClickFromParent = {this.handleNavigation}/>
         <Results correctCount ={this.state.correctCount} incorrectCount = {this.state.incorrectCount}/>
       </div>
      )
    }
  }
  
  
  //question
  const Question = (props) =>{
      return(
        <div> 
          <div style ={AppStyle.question}>{props.questionData} </div>
        </div>
     )  
  }
  //Answers
  const Answers = (props) =>{
     function passOption(e){
     
       props.onAnswerClick(e);
    }
      return(
        <div style={AppStyle.answers}> 
          <div style={AppStyle.answer} onClick={() => { passOption(props.options.A) }}>A.{props.options.A}</div>
          <div style={AppStyle.answer} onClick={() => { passOption(props.options.B) }}>B.{props.options.B}</div>
          <div style={AppStyle.answer}  onClick={() => { passOption(props.options.C) }}>C. {props.options.C}</div>
          <div style={AppStyle.answer} onClick={() => { passOption(props.options.D) }}>D. {props.options.D}</div>
        </div>
    )  
  } 
  /*class Answers extends React.Component{
    constructor(props){
      super(props);
    }
  }*/
  //navigation
  const Navigation = (props) =>{
    const clickNext = ()=>{
      return (props.onClickFromParent("next"));
    }
    const clickPrvs = ()=>{
      return (props.onClickFromParent("previous"));
    }
    return(
      <div>
        <div style ={AppStyle.btnPrevious} onClick = {clickPrvs}></div>
        <div style ={AppStyle.btnNext} onClick = {clickNext}></div> 
      </div>
    )
  }
  
  // Results
  const Results = (props) =>{
    return(
      <div style={AppStyle.results}>
        <div>
         Correct: {props.correctCount} |  Incorrect:{props.incorrectCount}
        </div>
      </div>
    )
  }
  
  ReactDOM.render(
    <Quiz/>
   ,
  document.getElementById("root")
  )
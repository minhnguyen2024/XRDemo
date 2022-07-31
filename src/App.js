import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Lectures from './pages/Lectures';
import Quizzes from './pages/Quizzes';
import ReactQuizForm from './components/QuizForm/ReactQuizForm';
import LectureForm from './components/Lectures/LectureForm';
import Home from './pages/Home';
import DragNdrop from './components/DragNDrop/DragNDrop';
import ReactBootstrapNavbar from './components/Navbar/ReactBootstrapNavbar';
import SingleLectureDisplay from './components/Lectures/SingleLectureDisplay';
import EditLecture from './components/Lectures/EditLecture';

function App() {

    return (
   
      <div className="App">
            {/* <Navbar/> */}
            <ReactBootstrapNavbar/>



            <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/lectures-create' element={<LectureForm/>}></Route>
            <Route path='/lectures-display' element={<Lectures/>}></Route>
            <Route path='/lectures-edit' element={<EditLecture/>}></Route>
            <Route path='/quizzes-create' element={<ReactQuizForm/>}></Route>
            <Route path='/quizzes-display' element={<Quizzes/>}></Route>
            <Route path='/drag-and-drop-create' element={<DragNdrop/>}> </Route>
            <Route path='/single-lecture-display' element={<SingleLectureDisplay/>}> </Route>
          </Routes>
      </div>
      
      
    
      

     

   
        
 
     
    );
  
}

export default App;

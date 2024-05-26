import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { v4 as uuidv4 } from 'uuid';
import './index.css'
// const { UVicCourseScraper } = require('@vikelabs/uvic-course-scraper');



function App() {
  // const yearOneCoursees = ["CSC 110", "CSC 115", "MATH 100 or MATH 109", "MATH 101", "MATH 122", "ATWP 135, ENSH 101 or 102"]

  const [pickableYearOne, setPickableYearOne] = useState([
    { id: uuidv4(), name: "CSC 106", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "CSC 130", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "CSC 105", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "CSC 167", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "BIO 101", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "MAT 113", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "ENG 122", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "PHY 114", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "CHE 135", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "ART 107", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "MUS 118", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "HIS 110", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "GEO 145", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "ECO 121", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "SOC 111", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "PSY 109", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "PHI 134", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "POL 117", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "LIT 140", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "ANT 126", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "LAW 115", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "COM 139", units: 1.5, checked: false, pickable: true, selected: false },
    { id: uuidv4(), name: "BUS 108", units: 1.5, checked: false, pickable: true, selected: false },
]);



  const [yearOneCSC, setYearOneCSC] = useState([
    { id: uuidv4(), name: "CSC 110", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "CSC 115", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "MATH 100 or 109", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "MATH 101", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "MATH 122", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "ATWP 135, ENSH 101 or 102", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true }
  ]);
  
  const [yearTwoCSC, setYearTwoCSC] = useState([
    { id: uuidv4(), name: "CSC 225", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "CSC 226", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "CSC 230", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "SENG 265", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "ENGR 240", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "MATH 202 or 204", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "MATH 211", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "STAT 260", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true }
  ]);
  
  const [yearThreeCSC, setYearThreeCSC] = useState([
    { id: uuidv4(), name: "CSC 320", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "CSC 360", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), name: "CSC 370", units: 1.5, checked: false, pickable: false },
    { id: uuidv4(), default: "CSC 300-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "CSC 300-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "CSC 300-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "CSC or SENG 300-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true }
  ]);
  
  const [yearFourCSC, setYearFourCSC] = useState([
    { id: uuidv4(), default: "CSC 400-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "CSC 400-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "CSC or SENG 400-level", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective (300- or 400-level)", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective (300- or 400-level)", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective (300- or 400-level)", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective (300- or 400-level)", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true },
    { id: uuidv4(), default: "elective", name: null, units: 1.5, checked: false, pickable: true }
  ]);
  
  
  
  

  const [selectedCourse, setSelectedCourse] = useState({ id: uuidv4(), name: "elective", units: 1.5, checked: false, pickable: true })

  const handleCheckClick = (id, year)=> {
    console.log(`${id}`);
    console.log("THIS IS THE YEAR", year)
    if(year == "Year 1") {
      setYearOneCSC(prevYearOneCSC =>
        prevYearOneCSC.map(course =>
          course.id !== id ? course : { ...course, checked: !course.checked }
        )
      );
    }
    else if(year == "Year 2") {
      setYearTwoCSC(prevYearTwoCSC =>
        prevYearTwoCSC.map(course =>
          course.id !== id ? course : { ...course, checked: !course.checked }
        )
      );
    }
    else if(year == "Year 3") {
      setYearThreeCSC(prevYearThreeCSC =>
        prevYearThreeCSC.map(course =>
          course.id !== id ? course : { ...course, checked: !course.checked }
        )
      );
    }
    else if(year == "Year 4") {
      setYearFourCSC(prevYearFourCSC =>
        prevYearFourCSC.map(course =>
          course.id !== id ? course : { ...course, checked: !course.checked }
        )
      );
    }
  }
  const handlePickCourse = (id)=> {
    console.log(`${id}`);
    setSelectedCourse(pickableYearOne.find(course=>course.id == id))
    setPickableYearOne(pickableYearOne =>
      pickableYearOne.map(course =>
        course.id !== id ? { ...course, selected: false } : { ...course, selected: true }
      )
    );
  }
  const setPickedCourse = (id, year)=> {
    console.log(`${id}`);
    if(year == "Year 1") {
      const course = yearOneCSC.find(course=> selectedCourse.id == course.id)
      console.log(year)
      if(course) return
      setYearOneCSC(prevYearOneCSC =>
        prevYearOneCSC.map(course =>
        course.id !== id ? course : {...selectedCourse, default: course.default}
      ));
    }
    else if(year == "Year 2") {
      const course = yearTwoCSC.find(course=> selectedCourse.id == course.id)
      console.log(year)
      if(course) return
      setYearTwoCSC(prevYearTwoCSC =>
        prevYearTwoCSC.map(course =>
        course.id !== id ? course : {...selectedCourse, default: course.default}
      ));
    }
    else if(year == "Year 3") {
      const course = yearThreeCSC.find(course=> selectedCourse.id == course.id)
      console.log(year)
      if(course) return
      setYearThreeCSC(prevYearThreeCSC =>
        prevYearThreeCSC.map(course =>
        course.id !== id ? course : {...selectedCourse, default: course.default}
      ));
    }
    else if(year == "Year 4") {
      const course = yearFourCSC.find(course=> selectedCourse.id == course.id)
      console.log(year)
      if(course) return
      setYearFourCSC(prevYearFourCSC =>
        prevYearFourCSC.map(course =>
        course.id !== id ? course : {...selectedCourse, default: course.default}
      ));
    }
  }

  const deletePickedCourse = (id, year)=> {
    if(year == "Year 1") {
      setYearOneCSC(prevYearOneCSC =>
        prevYearOneCSC.map(course =>
          course.id !== id ? course : { id: uuidv4(), name: null, units: 1.5, checked: false, pickable: true, default: course.default }
        )
      );
    }
    else if(year == "Year 2") {
      setYearTwoCSC(prevYearTwoCSC =>
        prevYearTwoCSC.map(course =>
          course.id !== id ? course : { id: uuidv4(), name: null, units: 1.5, checked: false, pickable: true, default: course.default }
        )
      );
    }
    else if(year == "Year 3") {
      setYearThreeCSC(prevYearThreeCSC =>
        prevYearThreeCSC.map(course =>
          course.id !== id ? course : { id: uuidv4(), name: null, units: 1.5, checked: false, pickable: true, default: course.default }
        )
      );
    }
    else if(year == "Year 4") {
      setYearFourCSC(prevYearFourCSC =>
        prevYearFourCSC.map(course =>
          course.id !== id ? course : { id: uuidv4(), name: null, units: 1.5, checked: false, pickable: true, default: course.default }
        )
      );
    }
  }
  
  console.log(selectedCourse.name);
  
  
  return (
    <div>
      <h1>PROGRAM PLANNING WORKSHEET</h1>
      <div className='yearSection'>
      <Year year={"Year 1"} courses={yearOneCSC} handleCheck={handleCheckClick} setPickedCourse={setPickedCourse} deletePickedCourse={deletePickedCourse}/>
      <CourseCandidates courses={pickableYearOne} handlePickCourse={handlePickCourse}/>
      </div>
      <div className='yearSection'>
      <Year year={"Year 2"} courses={yearTwoCSC} handleCheck={handleCheckClick} setPickedCourse={setPickedCourse} deletePickedCourse={deletePickedCourse}/>
      <CourseCandidates courses={pickableYearOne} handlePickCourse={handlePickCourse}/>
      </div>
      <div className='yearSection'>
      <Year year={"Year 3"} courses={yearThreeCSC} handleCheck={handleCheckClick} setPickedCourse={setPickedCourse} deletePickedCourse={deletePickedCourse}/>
      <CourseCandidates courses={pickableYearOne} handlePickCourse={handlePickCourse}/>
      </div>
      <div className='yearSection'>
      <Year year={"Year 4"} courses={yearFourCSC} handleCheck={handleCheckClick} setPickedCourse={setPickedCourse} deletePickedCourse={deletePickedCourse}/>
      <CourseCandidates courses={pickableYearOne} handlePickCourse={handlePickCourse}/>
      </div>
    </div>
  )
}

const CourseCandidates = ({courses, handlePickCourse})=> {
  return (
    
    <div className='courseCandidates'>
    <h2>Electives</h2>
    <div className='pickableClasses'>

    {courses.map((course, index) => (
      <SelectableCourse key={course.id} course={course} handlePickCourse={handlePickCourse}/>
    ))}
      
    </div>
    </div>
  )
}

const SelectableCourse = ({course, handlePickCourse})=> {
  return (
    <div className ={course.selected ? "selectableCourseTrue" : "selectableCourseFalse"} onClick={()=>handlePickCourse(course.id)}>
      {course.name ? course.name : course.default}
    </div>
  )
}

const Year = ({year, courses, handleCheck, setPickedCourse, deletePickedCourse})=> {
  return (
    <div className='year'>

    <h2 style={{paddingLeft:"1rem"}}>{year}</h2>

    {courses.map((course, index) => (
      <Course year={year} key={course.id} course={course} handleCheck={handleCheck} setPickedCourse={setPickedCourse} deletePickedCourse={deletePickedCourse}/>
    ))}
      
    </div>
  )
}
const PickableCourse = ({course, setPickedCourse, deletePickedCourse, year})=> {
  return (
    <div className='pickableCourse' onClick={()=>setPickedCourse(course.id, year)} >
    <img src='./assets/delete2.svg' className='delete' onClick={()=> deletePickedCourse(course.id, year)} style={{ width: '20px', paddingRight: ".5rem", paddingBottom: ".2rem", margin: 0, height: 'auto' }}/>
    <div className='courseTitle'><p style={{paddingLeft: ".5rem"}}>{course.name ? course.name : course.default}</p></div>
  </div>
  )
}

const NewCourse = ()=> {
  
}

const Course =({course, handleCheck, setPickedCourse, deletePickedCourse, year})=> {
  console.log("*AS*DSA*D*SA* YEAR", year);
  return (
    <div className='course'>
      {course.pickable ? <PickableCourse year={year} course={course} setPickedCourse={setPickedCourse} deletePickedCourse={deletePickedCourse}/> : <div className='courseTitle' style={{paddingLeft: ".5rem"}}>{course.name ? course.name : course.default}</div>}
      <Units/>
      {course.checked ? <div className='courseCheckTrue' onClick={()=>handleCheck(course.id, year)}></div> : <div className='courseCheckFalse' onClick={()=>handleCheck(course.id, year)}></div>}
    </div>
  )
}


const Units = ()=> {
  let units = 1.5
  return (
    <div className='courseUnits'>
      <div>{units}</div>
    </div>
  )
}



export default App

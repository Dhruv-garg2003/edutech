// import React from "react"
// import "./courses.css"
// import { coursesCard } from "../../dummydata"

// const CoursesCard = () => {
//   return (
//     <>
//       <section className='coursesCard'>
//         <div className='container grid2'>
//           {coursesCard.map((val) => (
//             <div className='items'>
//               <div className='content flex'>
//                 <div className='left'>
//                   <div className='img'>
//                     <img src={val.cover} alt='' />
//                   </div>
//                 </div>
//                 <div className='text'>
//                   <h1>{val.coursesName}</h1>
//                   <div className='rate'>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <i className='fa fa-star'></i>
//                     <label htmlFor=''>(5.0)</label>
//                   </div>
//                   <div className='details'>
//                     {val.courTeacher.map((details) => (
//                       <>
//                         <div className='box'>
//                           <div className='dimg'>
//                             <img src={details.dcover} alt='' />
//                           </div>
//                           <div className='para'>
//                             <h4>{details.name}</h4>
//                           </div>
//                         </div>
//                         <span>{details.totalTime}</span>
//                       </>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className='price'>
//                 <h3>
//                   {val.priceAll} / {val.pricePer}
//                 </h3>
//               </div>
//               <button className='outline-btn'>ENROLL NOW !</button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }

// export default CoursesCard

import React, { useState } from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredCourses = coursesCard.filter((course) =>
    course.coursesName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <section className='coursesCard'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search courses...'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className='container grid2'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((val) => (
              <div className='items' key={val.id}>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <label htmlFor=''>(5.0)</label>
                    </div>
                    <div className='details'>
                      {val.courTeacher.map((details) => (
                        <React.Fragment key={details.id}>
                          <div className='box'>
                            <div className='dimg'>
                              <img src={details.dcover} alt='' />
                            </div>
                            <div className='para'>
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='price'>
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <button className='outline-btn'>ENROLL NOW !</button>
              </div>
            ))
          ) : (
            <div className="noouter">

            <div className='no-courses'>NO courses are listed based on search</div>
            </div>
          )}
        </div>
      </section>
      
    </>
  )
}

export default CoursesCard

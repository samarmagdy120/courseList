import React from 'react';


const CourseForm = (props) => {
    return(
    <form onSubmit={props.addCourse}>
        <input type="text" onChange={props.updateCourse} value={props.current}/>
        <button>Add Course</button>
    </form>
    )
}

export default CourseForm;

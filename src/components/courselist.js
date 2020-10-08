import React, { Component, Fragment } from 'react';

class CourseList extends Component {

  state = {
    isEdit: false
  }

  // render course
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => { this.toggleState()} }>Edit Course</button>
        <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
      </li>
    )
  }

  //update course
  updateCourseItem = (e) =>{
    e.preventDefault();
    this.props.editCourse(this.props.index,this.input.value);
    this.toggleState();

  }
  // render update form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input type="text" defaultValue={this.props.details.name} ref={(v) =>{this.input = v}  }/>
        <button>update Course</button>
      </form>
    )
  }

  // toggle state

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    })
  }
  render() {
    let { isEdit } = this.state;
    return (
      <Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}


      </Fragment>
    )
  }

}
export default CourseList;

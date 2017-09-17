import React from 'react';
import './AddTaskForm.css';

class AddTaskForm extends React.Component {
  render() {
    return (
      <form className="add-task">
        <input type="text" placeholder="Add a task.." /> {/*more placeholders*/} 
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default AddTaskForm;

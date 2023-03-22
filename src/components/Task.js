import React from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : 'non-reminder'}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <FaTrash style={{color: '#F00'}} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
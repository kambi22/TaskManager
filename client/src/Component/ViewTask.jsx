import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Modal } from "react-bootstrap";
import { Card, CardContent, Checkbox, TextField } from "@mui/material";


const API_URL = import.meta.env.VITE_API_URL;

const ViewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");


  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`${API_URL}/${task._id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = (task) => {
    setEditIndex(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setShowEditModal(true);
  };

  const saveEdit = async () => {
    try {
      await axios.put(`${API_URL}/${editIndex}`, { title: editTitle, description: editDescription });
      setShowEditModal(false);
      fetchTasks();
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };



  return (
    <div className="mt-3">

      <div> {tasks.map((task) => (
        <Container className="mt-3">
          <Card key={task._id} className="m-2 p-5 rounded-5 shadow">

            <div className="d-flex">
              <Checkbox className="text-end" checked={task.completed} onChange={() => toggleComplete(task)} />
              <CardContent className="text-start">{task.title}</CardContent>
            </div>

            <CardContent className="text-start">{task.description}</CardContent>
            <div className="d-flex  justify-content-end">
            <Button  className=" me-2" variant="warning"  onClick={() => handleEdit(task)}>Edit</Button>
            <Button  className="" variant="danger" onClick={() => deleteTask(task._id)}>Delete</Button>
            </div>
            
          </Card>
        </Container>
      ))}</div>
      <div>
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              className="mb-2"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              className="mb-2"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={saveEdit}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>

    </div>
  )
};

export default ViewTask;

import React, { useState } from "react";
import axios from "axios";
import { Container,  Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent, TextField } from "@mui/material";


const API_URL = import.meta.env.VITE_API_URL ;

const AddTask = (props) => {
      const [tasks, setTasks] = useState([]);
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
     

  const addTask = async () => {
    if (!title || !description) return;
    try {
      const response = await axios.post(API_URL, { title, description });
      setTasks([...tasks, response.data]);
      setTitle("");
      setDescription("");
      console.log("add called")
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  return (
    <div>
      <Container className="mt-4">
      <h2 className="">Task Manager</h2>
      
        <Form className="form mx-auto mt-5">
        <TextField
          label="Title"
          variant="outlined"
          placeholder='Enter task title'
          fullWidth
          className="mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          placeholder="Enter task description"
          fullWidth
          multiline
          rows={3}
          className="mb-2 mt-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button className="ms-auto w-100 mt-4" size='lg' variant="primary" onClick={addTask}>Add Task</Button>
      </Form>

      
    
    </Container>
    </div>
  )
};

export default AddTask;

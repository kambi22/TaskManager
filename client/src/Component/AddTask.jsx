import React, { useState } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Notify } from "./Notify";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const API_URL = import.meta.env.VITE_API_URL;

const AddTask = (props) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const addTask = async () => {
    setLoading(true)
    if (!title || !description) return;
    try {
      const response = await axios.post(API_URL, { title, description });
      setTasks([...tasks, response.data]);
      setTitle("");
      setDescription("");
      Notify('success', 'Success', 'Task successfully added')
      console.log("add called")
      navigate('/view')
    } catch (error) {
      console.error("Error adding task:", error);
      Notify('error', 'Error', 'Somthing wrong please try again')

    } finally {
      setLoading(false)
    }
  };
  return (
    <div>
      {loading && (
        <div className="m-auto  bg-successk" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, position: 'absolute' }}>
          <Player className="bg-k " src='https://lottie.host/5a71c736-8150-4cf0-b870-7d97d992f1bc/y3KFjegVpO.json' loop autoplay style={{ height: '150px', width: '150px' }} />
        </div>
      )}<Container className="mt-4">
        <h2 className="text-star">Add Task</h2>

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
          <Button className="ms-auto w-100 mt-4 " size="large" variant='contained' onClick={addTask} >
          <CircularProgress  size={20} className={loading?'d-block text-white me-2':'d-none' }/>  Add Task</Button>
        </Form>
        



      </Container>
    </div>
  )
};

export default AddTask;

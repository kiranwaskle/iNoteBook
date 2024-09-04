import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  const [show, setShow] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      
      getNotes(); // Fetch notes if the user is authenticated
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
    // eslint-disable-next-line 
  }, []); // No need for additional dependencies here
  

  const handleClose = () => setShow(false);
  const handleShow = (note) => {
    setCurrentNote({
      id: note._id,
      title: note.title,
      description: note.description,
      tag: note.tag,
    });
    setShow(true);
  };

  const handleChange = (e) => {
    setCurrentNote({ ...currentNote, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    editNote(
      currentNote.id,
      currentNote.title,
      currentNote.description,
      currentNote.tag
    );
    handleClose();
    props.showAlert("Updated successfully", "success");
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Modal content with form to edit the note */}
          <Form>
            <Form.Group controlId="formNoteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentNote.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNoteDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={currentNote.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formNoteTag" className="mt-3">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                name="tag" // Updated to lowercase
                value={currentNote.tag}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
<div className="row my-3">
  <h2>Your Notes</h2>
  <div className="container mx-2">
    {notes.length === 0 && "No notes to display!"}
  </div>
  {Array.isArray(notes) && notes.map((note) => (
    <NoteItem
      key={note._id}
      updateNote={() => handleShow(note)}
      showAlert={props.showAlert}
      note={note}
    />
  ))}
</div>

    </>
  );
};

export default Notes;

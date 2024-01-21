/* eslint-disable no-unused-vars */
import React, {  useEffect, useState } from "react";
import Modal from "react-modal";
import jethalal from "./images/jethu.gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import handledarkmode from "./handledarkmode";

const Event_Form = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [profilePic, setProfilepic] = useState("");
  const [link, setlink] = useState("");
  const [extra, setExtra] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    handledarkmode();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      date,
      profilePic,
      link,
      extra,
      // Assuming you store user ID in local storage
    };

    try {
      const response = await fetch("/event-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful contribution
        toast.success("Submitted Sucessfully"); // Redirect to a success page or handle it according to your needs
        setErrorText(false);
      } else {
        // Handle error
        setErrorText(true);
        setModalIsOpen(true);
        toast.error("Chal Nikal ");
        console.error("Contribution submission failed.");
      }
    } catch (error) {
      toast.error(error);
      console.error("Error submitting contribution:", error);
    }
  };
  return (
    <>
      <section class="form-container">
        <form
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          <h3>Event/Notes Update</h3>

          <p>&nbsp;&nbsp; Title </p>
          <input
            type="text"
            name="name"
            maxlength="1000"
            placeholder="Enter Title"
            class="box"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />

          <p>&nbsp;&nbsp; Description </p>
          <textarea
            name="msg"
            className="box"
            maxLength="1000"
            placeholder="Enter Description"
            cols="30"
            rows="6"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          ></textarea>

          <p>&nbsp;&nbsp; Date </p>
          <input
            type="date"
            name="date"
            class="box"
            onChange={(e) => setdate(e.target.value)}
            value={date}
          />

          <p>&nbsp;&nbsp; Image link </p>
          <input
            type="url"
            id="files"
            name="files"
            placeholder="Enter Image Link"
            multiple
            class="box"
            onChange={(e) => setProfilepic(e.target.value)}
            value={profilePic}
          ></input>

          <p>&nbsp;&nbsp; More Details link </p>
          <input
            type="url"
            id="files"
            name="files"
            placeholder="Optional"
            multiple
            class="box"
            onChange={(e) => setlink(e.target.value)}
            value={link}
          ></input>

          <p>&nbsp;&nbsp; Extra Text </p>
          <input
            type="text"
            name="name"
            placeholder="Enter Text"
            maxlength="50"
            class="box"
            onChange={(e) => setExtra(e.target.value)}
            value={extra}
          />

          <input type="submit" value="Submit" name="submit" class="btn" />
        </form>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Error Modal"
        className="custom-modal" // Apply custom class for styling
        overlayClassName="custom-overlay" // Apply custom class for overlay
        onAfterOpen={scrollToTop}
      >
        <button
          className="jethalal-close-button"
          onClick={() => setModalIsOpen(false)}
        >
          <span>&times;</span>
        </button>
        <h1>Error</h1>
        <p className="title-xclusive">Chal Nikal !!!</p>
        {/* Add your GIF here */}
        <img src={jethalal} className="jethalal" alt="Error GIF" />
      </Modal>
    </>
  );
};

export default Event_Form;
import React, { useEffect, useState } from "react";

import handledarkmode from "./handledarkmode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contributor_Form = () => {
 

  const [semester, setSemester] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [fileLinks, setFileLinks] = useState("");
  const [pdfDescription, setPdfDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      semester,
      subjectName,
      fileLinks,
      pdfDescription,
      // Assuming you store user ID in local storage
    };

    try {
      const response = await fetch("/contribute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful contribution
        toast.success("Submitted Sucessfully", {
          className: "custom-toast", 
        }); // Redirect to a success page or handle it according to your needs
      } else {
        // Handle error
        console.error("Contribution submission failed.");
      }
    } catch (error) {
      console.error("Error submitting contribution:", error);
    }
  };

  useEffect(() => {
    handledarkmode();
  }, []);

  return (
    <>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Contribute Now</h3>

          <p>
            Semester <span>*</span>
          </p>
          <select
            name="sem"
            id="sem"
            className="box"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>

          <p>
            Subject Name <span>*</span>
          </p>
          <input
            type="text"
            name="subject name"
            placeholder="Enter subject name"
            required
            maxLength="50"
            className="box"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />

          <p>
            Upload File Link <span>*</span>
          </p>
          <input
            type="url"
            placeholder="Drive, OneDrive, etc..."
            id="files"
            name="files"
            multiple
            required
            className="box"
            value={fileLinks}
            onChange={(e) => setFileLinks(e.target.value)}
          ></input>

          <p>
            Pdf Description <span>*</span>
          </p>
          <textarea
            className="box"
            rows="6"
            placeholder="Send your comments to the author..."
            value={pdfDescription}
            onChange={(e) => setPdfDescription(e.target.value)}
          ></textarea>

          <input
            type="submit"
            value="Contribute"
            name="submit"
            className="btn"
          />
        </form>
      </section>
    </>
  );
};

export default Contributor_Form;

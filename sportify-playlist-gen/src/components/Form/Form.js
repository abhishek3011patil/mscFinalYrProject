import React from "react";
import { useState } from "react";
import "./Form.css";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/contactQueries/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle successful submission
        const result = await response.json();
        setMessage("Your message has been submitted :");
        console.log("Your message has been submitted : ", result);
      } else {
        // Handle errors
        setMessage("Failed to submit Message.");
        console.error("Form submission error: ", response.statusText);
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form.");
      console.error("Error submitting form: ", error);
    }
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          type="text"
          className="feedback-input"
          placeholder="Name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="text"
          className="feedback-input"
          placeholder="Email"
        />

        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          className="feedback-input"
          placeholder="Comment"
        ></textarea>

        <button className="formButton" type="submit">
          Submit
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default Form;

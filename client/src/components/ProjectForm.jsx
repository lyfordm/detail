import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function ProjectForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message) {
      newErrors.message = "Message is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // send form data to server or external service
      console.log(name, email, message);
      // clear form fields
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex md:flex-row sm:flex-col gap-5 justify-between mb-5">
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          className={`md:w-1/2 sm:w-full px-3 py-2 appearance-none border-b-2 border-gray-400 font-jost text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${
            errors.name ? "border-red-500" : "border-gray-400"
          } `}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}

        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className={`md:w-1/2 sm:w-full  px-3 py-2 appearance-none border-b-2 border-gray-400 font-jost text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${
            errors.email ? "border-red-500" : "border-gray-400"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="mb-4 mt-10">
        <textarea
          placeholder="Hello I am interest in.."
          id="message"
          name="message"
          rows="5"
          className={`w-full px-3 py-2 appearance-none border-b-2 border-gray-400 font-jost text-gray-700 leading-tight focus:outline-none focus:border-blue-500 ${
            errors.message ? "border-red-500" : "border-gray-400"
          } `}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && (
          <span className="text-red-500">{errors.message}</span>
        )}
      </div>
      <div className="flex justify-center my-10">
        <button
          type="submit"
          className="flex items-center justify-center font-jost text-white bg-darkgrey text-whfontite -medium rounded-full px-6 py-3 shadow-lg hover:text-darkgrey hover:bg-white"
        >
          Send Now <FaAngleRight className="ml-2" />
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;

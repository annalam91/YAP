import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-purple-900 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/f37f0471-bb62-4981-b3e5-0e6ea2b0932a        "
        className="flex flex-col max-w-xl w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Contact
          </p>
          <p className="text-gray-300 py-4">Email me &#x1F60A;</p>
        </div>
        <input
          className="p-2 bg-purple-100"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-purple-100"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-purple-100"
          rows="5"
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-purple-400 hover:border-purple-400 hover:text-slate-800 px-4 py-3 my-8 mx auto flex items-center justify-center font-bold">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

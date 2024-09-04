import React from "react";

const About = () => {
  return (
    <div className="container my-4">
      <h2>About iNotebook</h2>
      <br></br>
      <p>
        iNotebook is a full-featured web application built using the MERN stack,
        which stands for MongoDB, Express.js, React, and Node.js. This
        application serves as a personal note-taking tool, allowing users to
        create, edit, delete, and organize their notes efficiently.
      </p>
      <p>
        The backend of iNotebook is powered by Node.js and Express.js, which
        provide a robust server environment to handle API requests and manage
        the application's business logic. MongoDB, a NoSQL database, is used to
        store user data securely, including notes, tags, and authentication
        details. The use of JWT (JSON Web Token) ensures secure user
        authentication and authorization, safeguarding personal information.
      </p>
      <p>
        On the frontend, React.js provides a dynamic and responsive user
        interface, allowing users to interact with their notes in real time.
        React components such as forms, modals, and navigation bars make the
        application intuitive and easy to use. React Router is used for
        efficient navigation between different pages of the app, such as the
        home page, login, and about sections.
      </p>
      <p>
        The MERN stack, with its seamless integration between frontend and
        backend, makes iNotebook a highly scalable and efficient application,
        offering users a reliable tool for managing their notes across devices.
      </p>
    </div>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";

export const Modal = ({ userName, closeModal }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            Greeting, {userName}, your registration was successful!
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeModal}
          ></button>
        </header>
        <section className="modal-card-body">
          {`Now you can go to`}
          <Link to="/todoList"> the page with task 2 </Link>
          {`of roadmap.
                It is a list of tasks (TODO list) with the possibility of adding, editing and deleting tasks.`}
          <br />
          {`You can also return to the registration form page.`}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">
            <Link to="/todoList" className="has-text-white">
              Go to List
            </Link>
          </button>
          <button
            className="button has-background-link-light"
            onClick={closeModal}
          >
            Go back to form
          </button>
        </footer>
      </div>
    </div>
  );
};

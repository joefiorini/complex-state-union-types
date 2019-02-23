import React, { useState } from "react";

import "./styles.css";

interface AlertProps {
  status: string;
  children: React.ReactNode;
  onClose: () => void;
}

function Alert({ status, children, onClose }: AlertProps) {
  const alertClass = `alert alert-dismissable alert-${status}`;

  return (
    <div className={alertClass} role="alert">
      {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

const preventDefault = e => e.preventDefault();

function UsernameForm() {
  const [status, setStatus] = useState(null as string | null);
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = (newValue: boolean) => {
    // Initial requirements are to clear the alert on the next submit
    setShowAlert(false);

    setTimeout(() => {
      setShowAlert(newValue);
    }, 900);
  };

  const handleSave = () => {
    setStatus("success");
    toggleAlert(true);
  };

  const handleSaveWithError = () => {
    setStatus("danger");
    toggleAlert(true);
  };

  return (
    <section>
      <h1>Change Your Username</h1>
      {showAlert ? (
        <Alert
          status={status}
          onClose={() => {
            setShowAlert(false);
          }}
        >
          {status === "success"
            ? "Your username has been updated"
            : "We could not save your username at this time."}
        </Alert>
      ) : null}
      <form onSubmit={preventDefault}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
          />
        </div>
      </form>
      <button onClick={handleSave} className="btn btn-primary mr-2">
        Save
      </button>
      <button onClick={handleSaveWithError} className="btn btn-secondary">
        Save (with error)
      </button>
    </section>
  );
}

export default UsernameForm;

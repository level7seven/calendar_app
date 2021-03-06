import React from "react";

const DeleteEventButton = props => {
  let showButton = false;
  if (
    (props.formType === "READONLY" && props.userOwnsEvent) ||
    props.formType === "EDIT"
  ) {
    showButton = true;
  }

  return (
    <span>
      {showButton ? (
        <button
          onClick={() => props.onClick("DELETE_EVENT")}
          type="button"
          className="btn btn-danger btn-block mt-3"
        >
          Delete Event
        </button>
      ) : null}
    </span>
  );
};

export default DeleteEventButton;

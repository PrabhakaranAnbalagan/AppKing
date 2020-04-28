import React from "react";
import PropTypes from "prop-types";

function TextArea(props) {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <div className="field">
        <textarea
          disabled={props.disabled}
          cols={props.cols}
          rows={props.rows}
          autoFocus="autofocus"
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextArea.defaultProps = {
  error: "",
};

export default TextArea;

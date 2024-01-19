// import { useState } from 'react';

export default function InputField(props) {
  return (
    <label>
      {props.label} <br />
      <input
        placeholder={props.placeholder}
        onChange={(event) => {
          props.setInputField(event.currentTarget.value);
        }}
      />
    </label>
  );
}

import { saveAs } from 'file-saver';
import { useState } from 'react';

// Declaration of variables. Every input field gets one, plus 2 const placeholders for the different image states.
// The different image states are required to avoid breaking the link (memeName and upperText are required).
// Use state of memeName is filled to show default picture on loading.
export default function MemeInput() {
  const [memeName, setMemeName] = useState('ll');
  const [upperText, setUpperText] = useState('_');
  const [lowerText, setLowerText] = useState('_');
  const defaultPic = `https://api.memegen.link/images/${memeName}/_/_.png`;
  const memePic = `https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`;

  return (
    <>
      {/* 3 input fields to change the state of the states of the first 3 variables */}
      <form>
        <label>
          Meme template <br />
          <input
            // The "value" is not needed here because the input field should be empty (task requirement). Same for input below.
            // value={memeName}
            placeholder="Name the Meme"
            onChange={(event) => {
              setMemeName(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          Top text <br />
          <input
            placeholder="Top text"
            onChange={(event) => {
              setUpperText(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          Bottom text <br />
          <input
            placeholder="Bottom text"
            onChange={(event) => {
              setLowerText(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      {/* Button with a function pointing to the file-saver library */}
      <button
        onClick={function () {
          saveAs(memePic, `${memeName}_${upperText}_${lowerText}.jpg`);
        }}
      >
        Download
      </button>
      <br />
      {/* Div container with ternary operator determining which image link variable to show.
        If either upperText or memeName are empty, a default picture gets show. */}
      <div id="meme">
        {upperText === '' || memeName === '' ? (
          <img src={defaultPic} alt="Meme test" data-test-id="meme-image" />
        ) : (
          <img src={memePic} alt="Generated Meme" data-test-id="meme-image" />
        )}
      </div>
    </>
  );
}

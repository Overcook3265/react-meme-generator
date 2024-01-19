import { useState } from 'react';
import DownloadButton from './DownloadButton';
import InputField from './InputField';
import styles from './MemeInputStyles.module.scss';

// Declaration of variables. Every input field gets one, plus 2 const placeholders for the different image states.
// The different image states are required to avoid breaking the link (memeName and upperText are required).
// Use state of memeName is filled to show default picture on loading.
export default function MemeInput() {
  const [memeName, setMemeName] = useState('ll');
  const [upperText, setUpperText] = useState('_');
  const [lowerText, setLowerText] = useState('_');
  // const [inputField, setInputField] = useState();
  const defaultPic = `https://api.memegen.link/images/${memeName}/_/_.png`;
  const memePic = `https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`;

  return (
    <>
      {/* 3 input fields to change the state of the states of the first 3 variables */}
      <div className={styles.background}>
        <div className={styles.frame}>
          <form className={styles.form}>
            <h4>
              ! FRESH MEMES !
              <br /> first come first serve
              <br />( ͡° ͜ʖ ͡°)
            </h4>
            {/* <label>
          Meme template <br />
          <input
            // The "value" is not needed here because the input field should be empty (task requirement). Same for input below.
            // value={memeName}
            placeholder="Name the Meme"
            onChange={(event) => {
              setMemeName(event.currentTarget.value);
            }}
          />
        </label> */}
            <InputField
              setInputField={setMemeName}
              label="Meme template"
              placeholder="Name your meme"
            />
            <br />
            {/* <label>
          Top text <br />
          <input
            placeholder="Top text"
            onChange={(event) => {
              setUpperText(event.currentTarget.value);
            }}
          />
        </label> */}
            <InputField
              setInputField={setUpperText}
              label="Top text"
              placeholder="Top text"
            />
            <br />
            {/* <label>
          Bottom text <br />
          <input
            placeholder="Bottom text"
            onChange={(event) => {
              setLowerText(event.currentTarget.value);
            }}
          />
        </label> */}
            <InputField
              setInputField={setLowerText}
              label="Bottom text"
              placeholder="Bottom text"
            />
            {/* Button with a function pointing to the file-saver library
      Here we use a component download button. The variable that it needs to function are defined in
      angular brackets in the name right below. It sends those variables-turned-into-props "down" to the
      component. The component receives the from above and then executes whatever function is defined with it.
    */}
            <DownloadButton
              memePic={memePic}
              memeName={memeName}
              upperText={upperText}
              lowerText={lowerText}
            />
          </form>
          <br />
          {/* Div container with ternary operator determining which image link variable to show.
        If either upperText or memeName are empty, a default picture gets show. */}
          <div>
            {upperText === '' || memeName === '' ? (
              <img
                src={defaultPic}
                alt="Where's the meme? ಠ_ಠ"
                data-test-id="meme-image"
                className={styles.picture}
              />
            ) : (
              <img
                src={memePic}
                alt="Generated Meme"
                data-test-id="meme-image"
                className={styles.picture}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

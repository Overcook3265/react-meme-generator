import { useState } from 'react';

// declaration of variables
export default function MemeInput() {
  const [memeName, setMemeName] = useState('doge');
  const [upperText, setUpperText] = useState('many_thought');
  const [lowerText, setLowerText] = useState('such_philosophy');

  return (
    <>
      <form>
        <label>
          Meme Template <br />
          <input
            id="memeName"
            value={memeName}
            onChange={(event) => {
              setMemeName(event.currentTarget.value);
            }}
          />
        </label>

        <br />
        <label>
          Top Text <br />
          <input
            id="upperText"
            value={upperText}
            onChange={(event) => {
              setUpperText(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          Bottom Text <br />
          <input
            id="lowerText"
            value={lowerText}
            onChange={(event) => {
              setLowerText(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      <br />
      <div>
        <img
          src={`https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`}
          alt="Meme test"
        />
      </div>
    </>
  );
}

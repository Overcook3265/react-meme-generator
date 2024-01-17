import { useState } from 'react';

// declaration of variables
export default function MemeInput() {
  const [memeName, setMemeName] = useState('doge');
  const [upperText, setUpperText] = useState('');
  const [lowerText, setLowerText] = useState('');
  //  const [imgAdress, setImgAdress] = useState(
  //     `https://api.memegen.link/images/doge/_/_.png`,
  //   );

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
        {upperText === '' ? (
          <img
            src={`https://api.memegen.link/images/${memeName}/_/_.png`}
            alt="Meme test"
          />
        ) : (
          <img
            src={`https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`}
            alt="Meme test"
          />
        )}
      </div>
    </>
  );
}
//   src={`https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`}
//   <div>{isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}</div>

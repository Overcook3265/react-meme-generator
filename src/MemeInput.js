// import fs from 'node:fs';
// import https from 'node:https';
import { useState } from 'react';

// declaration of variables
export default function MemeInput() {
  const [memeName, setMemeName] = useState('doge');
  const [upperText, setUpperText] = useState('');
  const [lowerText, setLowerText] = useState('');
  //  const [imgAddress, setImgAddress] = useState(
  //     `https://api.memegen.link/images/doge/_/_.png`,
  //   );

  // function downloadMeme() {
  //   const stream = fs.createWriteStream(
  //     `./memes/${memeName}_${upperText}_${lowerText}.jpg`,
  //   );
  //   https.get(
  //     `https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`,
  //     function (response) {
  //       response.pipe(stream);
  //     },
  //   );
  // }

  function downloadFile(url, fileName) {
    fetch(url, {
      method: 'get',
      mode: 'no-cors',
      referrerPolicy: 'no-referrer',
    })
      .then((res) => res.blob())
      .then((res) => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      })
      .catch((err) => alert(err));
  }

  return (
    <>
      <form>
        <label>
          Meme Template <br />
          <input
            // id="memeName"
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
            // id="upperText"
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
            // id="lowerText"
            value={lowerText}
            onChange={(event) => {
              setLowerText(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      <button onClick={downloadFile}>Download</button>
      <br />
      <div id="meme">
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

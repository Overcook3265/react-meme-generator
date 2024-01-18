import { saveAs } from 'file-saver';
// import fs from 'node:fs';
// import http from 'node:http';
import { useState } from 'react';

// declaration of variables
export default function MemeInput() {
  const [memeName, setMemeName] = useState('doge');
  const [upperText, setUpperText] = useState('_');
  const [lowerText, setLowerText] = useState('_');
  const defaultPic = `https://api.memegen.link/images/${memeName}/_/_.png`;
  const memePic = `https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`;

  //  const [imgAddress, setImgAddress] = useState(
  //     `https://api.memegen.link/images/doge/_/_.png`,
  //   );

  // function downloadFile(url, fileName) {
  //   fetch(url, {
  //     method: 'get',
  //     mode: 'no-cors',
  //     referrerPolicy: 'no-referrer',
  //   })
  //     .then((res) => res.blob())
  //     .then((res) => {
  //       const aElement = document.createElement('a');
  //       aElement.setAttribute('download', fileName);
  //       const href = URL.createObjectURL(res);
  //       aElement.href = href;
  //       aElement.setAttribute('target', '_blank');
  //       aElement.click();
  //       URL.revokeObjectURL(href);
  //     })
  //     .catch((err) => alert(err));
  // }

  return (
    <>
      <form>
        <label>
          Meme template <br />
          <input
            // id="memeName"
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
            // id="upperText"
            // value={upperText}
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
            // id="lowerText"
            // value={lowerText}
            placeholder="Bottom text"
            onChange={(event) => {
              setLowerText(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      {/* <button onClick={downloadMeme}>Download</button> */}
      <button
        onClick={function () {
          saveAs(memePic, `${memeName}_${upperText}_${lowerText}.jpg`);
        }}
      >
        Download
      </button>
      <br />
      {/* <div>
        <img
          src={`https://api.memegen.link/images/doge/${upperText}/${lowerText}.png`}
          alt="Meme test"
        />
      </div> */}

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
//   src={`https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`}
//   <div>{isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}</div>

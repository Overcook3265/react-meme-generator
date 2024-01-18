import { saveAs } from 'file-saver';

export default function DownloadButton(props) {
  return (
    <button
      className="downloadButton"
      onClick={function () {
        saveAs(
          props.memePic,
          `${props.memeName}_${props.upperText}_${props.lowerText}.jpg`,
        );
      }}
    >
      Download
    </button>
  );
}

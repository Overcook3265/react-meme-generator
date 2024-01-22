import { saveAs } from 'file-saver';

export default function DownloadButton(props) {
  console.log('props', props);
  return (
    <button
      className="downloadButton"
      onClick={function () {
        console.log('click');
        saveAs(
          props.memePic,
          `${props.memeName}-${props.upperText}-${props.lowerText}.jpg`,
        );
      }}
    >
      Download
    </button>
  );
}

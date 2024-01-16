import { useState } from 'react';

// declaration of variables
export default function MemeInput() {
  const [memeName, setMemeName] = useState('doge');
  const [upperText, setUpperText] = useState('many_thought');
  const [lowerText, setLowerText] = useState('such_philosophy');

  return (
    <div>
      <img
        src={`https://api.memegen.link/images/${memeName}/${upperText}/${lowerText}.png`}
        alt="Meme test"
      />
      ;
    </div>
  );
}

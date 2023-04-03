import React, { useState } from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

const AudioToText = () => {

  const [isListening, setIsListening] = useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const startListening = () => {
    SpeechRecognition.startListening();
    setIsListening(true);
  }

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  }

  let wordCount = null;
  if (transcript.length > 0) {
    wordCount = transcript.split(' ').length;
  }

  return (
    <div>
    <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <p>Output: {transcript}</p>
      {wordCount && <p>Word Count: {wordCount}</p>}
    </div>
  );
}

export default AudioToText;






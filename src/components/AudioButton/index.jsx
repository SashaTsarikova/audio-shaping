import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import './style.scss'

import { simpleSong } from '../../base/song';

const AudioContext = window.AudioContext || window.webkitAudioContext;

function sleep(delay){
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

function AudioButton() {
  const [dataPlaying, setDataPlaying] = useState(false);
  const [song] = useState(simpleSong);
  const audioContextRef = useRef();

  const playNotes = useCallback(async () => {
    const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();

    for (let note of song) {
      const [noteFrequency, length] = note;
      if (noteFrequency !== 'pause') {
        const audioContext = new AudioContext();
        const osc = audioContext.createOscillator();
        osc.frequency.value = noteFrequency;
    
        // Connect and start
        osc.connect(audioContext.destination);
        osc.start(audioContext.currentTime);
        
        osc.stop(audioContext.currentTime + length * 2);
    
        // Store context and start suspended
        audioContextRef.current = audioContext;
      }
      await sleep(2000 * length);
    }
    setDataPlaying(false);
    audioContext.suspend();
    osc.disconnect(audioContext.destination);
    
  })

  useEffect(() => {
    if (!audioContextRef.current) {
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
    }
  }, [playNotes]);

  const toggleOscillator = () => {
    if (dataPlaying) {
      audioContextRef.current.suspend();
    } else {
      audioContextRef.current.resume();
    }
    setDataPlaying((play) => !play);

    if (audioContextRef.current) {
      playNotes();
    }
  };

    return (
      <div className="AudioButton-container">
        <button  disabled={dataPlaying} className="AudioButton-button" onClick={toggleOscillator}>
          <span>{dataPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>
    );
}

export default AudioButton;
import React, { useContext, useEffect, useState } from 'react';
import AudioButton from '../AudioButton';

import './style.scss';

function Main() {
    return (
      <div className="Main minimize-height">
        <div className="main_content-block">
          <h2>Click to hear the music </h2>
          <AudioButton />
        </div>
      </div>
    );
}

export default Main;
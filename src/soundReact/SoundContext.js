import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

// creating the context of the sound to be globally available

export const SoundProvider = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

// setting the value of isSoundOn to be true.. exports SoundProvider 

  const toggleSound = () => {
    setIsSoundOn(prevState => !prevState);
  };

  // function to toggleSound of the global button to be the opposite of its previous state

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

/* Sound context has two properties, provider and consumer. SoundContext.Provider
passing a prop of children (meaning everything that this tag wraps)
and passing through the props of the state of isSoundOn and the function
toggleSound*/

export const useSoundContext = () => useContext(SoundContext);

/* This exports a custom hook to consume the context value provided by
SoundContext.Provider up above, eliminating need for useContext in
GlobalButton*/

import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";

const App = () => {
  const [password, setPassword] = useState("halo");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const passwordRef = useRef(null)

  const handleGeneratePassword = useCallback(() => {
    let pass = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers === true) {
      alphabet += "0123456789";
    }
    if (includeSpecialChars === true) {
      alphabet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * alphabet.length + 1);
      pass += alphabet.charAt(index);
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSpecialChars, setPassword]);

  useEffect(() => {
    handleGeneratePassword()
  }, [
    length,
    includeNumbers,
    includeSpecialChars
  ]);

  useEffect(() => {
    handleGeneratePassword()
  },[])

  const copyHandler = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
        <div className="mb-4">
          {password && (
            <div className="mt-4 flex items-center bg-gray-100 p-2 rounded">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full bg-transparent border-none focus:outline-none"
                ref={passwordRef}
              />
              <button
                onClick={copyHandler}
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <FaCopy />
              </button>
            </div>
          )}
          <label htmlFor="length" className="block text-gray-700">
            Length: {length}
          </label>
          <input
            type="range"
            id="length"
            min="6"
            max="24"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          <label htmlFor="numbers" className="text-gray-700">
            Include Numbers
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="specialChars"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            className="mr-2"
          />
          <label htmlFor="specialChars" className="text-gray-700">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;

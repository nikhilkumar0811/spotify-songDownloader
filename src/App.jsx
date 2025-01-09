import React from "react";
import { AiOutlineSpotify } from "react-icons/ai";
import axios from "axios";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [URL, setURL] = useState("");

  const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const download = async () => {
    const options = {
      method: "GET",
      url: "https://spotify-downloader9.p.rapidapi.com/downloadSong",
      params: {
        songId: URL,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "spotify-downloader9.p.rapidapi.com",
      },
    };
    try {
      const rspns = await axios.request(options);
      console.log(rspns.data.data.downloadLink);
      window.location.href = rspns.data.data.downloadLink;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-600 via-emerald-600 to-amber-500 flex items-center justify-center flex-col gap-y-8 p-4">
        <div className="flex items-center justify-center gap-x-2 text-2xl font-bold text-white">
          <AiOutlineSpotify size={50} />
          <p>Song Downloader</p>
        </div>
        <div className="w-full max-w-lg flex flex-col items-center gap-y-4">
          <input
            onChange={handleURL}
            type="url"
            placeholder="Enter Spotify URL"
            className="h-12 w-full rounded-md outline-none text-black px-4"
          />
          <button
            className="bg-white h-12 w-full rounded-md font-bold hover:bg-black hover:text-white transition duration-300"
            onClick={download}
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

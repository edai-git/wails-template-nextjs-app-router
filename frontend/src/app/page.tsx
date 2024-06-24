"use client";
import { useRef, useState } from "react";
import { Greet } from "@/wailsjs/go/main/App";

export default function Home() {
  const [text, setText] = useState<string>("");
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleGreet = () => {
    const name = nameRef.current?.value ? (nameRef.current.value).trim() : "";

    if (name) {
      Greet(name).then((text: string) => setText(text));
    } else {
      setText("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4"> Wails + NextJS</h1>
      <h4>{text || "Please enter your name below 👇"}</h4>
      <div className="flex flex-row my-4 gap-2">
        <input
          type="text"
          className="text-slate-800 text-center"
          ref={nameRef}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGreet}>
          Greet!
        </button>
      </div>
    </div>
  );
}
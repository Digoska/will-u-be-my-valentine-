"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Si si istý?",
      "Čo ak by som ťa pekne poprosil?",
      "Prosím vás",
      "S čokoládovým koláčom navyše",
      "Čo tak matcha frostie",
      "PROSÍM MILÁČKU",
      "Ale :*(",
      "Umriem",
      "Áno som mŕtvy",
      "ok rozprávam sa s Nathanovým duchom",
      "prosím zlatko",
      ":((((",
      "PROSÍM TE VEĽMI",
      "Estou muerto",
      "Nie :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmdoM2N5dW1xdzkzajlqc2p4aDZnamtqY3h6cHhzOG00bnJvbTB1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8iC5g6CUO04VyczOod/giphy.gif" />
          <div className="my-4 text-4xl font-bold">HOORAAAAAY!!! Milujem ťa zlatko!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={
              noCount === 0
                ? "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2hxdnFlM3lwMWptenRhOGVlazBpMGVsd29paTlnNXgwZWk4N2JsMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YPjVjujx9YApITud9F/giphy.gif"
                : "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnQxbGxzMGdraGZ2Mm1wZGRqcHhoMWhuYXdqZHlhcHRzMnZyNTQ0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a7rcoLmbhO9rWEgkT5/giphy.gif"
            }
          />
          <h1 className="my-4 text-4xl">Budeš moja valentínka?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Áno
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

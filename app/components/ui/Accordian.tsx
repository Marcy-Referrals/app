"use client";
import { useState, useEffect } from "react";

function Accordian({ title, body }: { title: string; body: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`border-y ${
        isOpen? "max-h-[10rem]  " :  "  max-h-[3rem] "
      } overflow-hidden   border-black`}
    >
      <div className="flex justify-between">
        <h1 className="text-[2rem]">{title}</h1>
        <img src={ isOpen? "https://www.iconpacks.net/icons/2/free-minus-icon-3108-thumb.png" :'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png'} className="h-[1.5rem] duration-300 self-center "></img>
      </div>

      <p>{body}</p>
    </div>
  );
}

export default Accordian;

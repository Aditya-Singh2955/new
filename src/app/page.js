"use client";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Home() {
  const [buttonStyle, setButtonStyle] = useState({
    marginTop: "0rem",
    height: "3rem",
    width: "6rem",
    visibility: "visible", 
  });

  let hoverTimeout;

  const handleButtonHover = () => {
    setButtonStyle({
      visibility: "hidden",
    });
  };

  const resetButtonPosition = () => {
    clearTimeout(hoverTimeout);
    setButtonStyle({
      marginTop: "0rem",
      height: "3rem",
      width: "6rem",
      visibility: "visible",
    });
  };

  const handleButtonHoverRecursive = () => {
    handleButtonHover();
    hoverTimeout = setTimeout(handleButtonHoverRecursive, 1000);
  };

  function play() {
    var audio = document.getElementById("a1");
    audio.play();
  }

  return (
    <div className="hello">
      <div className="child">Wanna Date Manjeet....?</div>
      <div className="photo">
        <img className="img-fix" src="manjeet.jpg" alt="Manjeet"></img>
      </div>
      <div className="option">
        <div className="btn1">
          <div className="btn-fix">
            <Stack direction="row" spacing={8}>
              <Link href="/about" passHref>
                <Button
                  className="aaa"
                  component="a"
                  variant="contained"
                  color="success"
                >
                  Yes
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
        <div className="btn2">
          <div className="btn-fix-2">
            <Stack direction="row" spacing={8}>
              <Button
                style={buttonStyle}
                variant="contained"
                color="success"
                onMouseEnter={handleButtonHoverRecursive}
                onMouseLeave={resetButtonPosition}
                onClick={play}
              >
                <audio id="a1">
                  <source src="hell.mp3" type="audio/mpeg" />
                </audio>
                No   
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

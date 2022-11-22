import react from "react";

export default function Footer() {
  return (
    <footer>
      {/* <img alt="" className="icons" src={require("./fb.png")} /> */}
      <a
        href="https://www.instagram.com/rohit_r0y/"
        target={"_blank"}
        rel="noreferrer"
      >
        <img alt="" className="icons" src={require("./insta.png")} />
      </a>
      <a rel="noreferrer" href="https://github.com/Rohit-rew" target={"_blank"}>
        <img alt="" className="icons" src={require("./git.png")} />
      </a>
      {/* <img alt="" className="icons" src={require("./twiter.png")} /> */}
    </footer>
  );
}

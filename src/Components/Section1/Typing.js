import { useEffect, useState } from "react";
import "./Typing.css";
function Typing({ text,typingSpeed=100,deleteSpeed=50,duration=1000}) {

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setisdeleting] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleTyping = () => {
        if (text && text.length > 0) { // Check if text is defined and has elements
          if (!isDeleting) {
            if (displayedText.length < text[index].length) {
              setDisplayedText((prev) => prev + text[index].charAt(displayedText.length));
            } else {
              setTimeout(() => setisdeleting(true), duration)
            } 
          } else {
            if (displayedText.length > 0) {
               setDisplayedText((prev) => prev.slice(0,-1))
            } else {
              setisdeleting(false);
              setIndex((prev) => (prev + 1) % text.length)
             }
          }
        }
      };
      

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); 
  },[displayedText, isDeleting, index, text, typingSpeed, deleteSpeed, duration] )
  return (
    <div className="typing-effect">
        <h1>Hi There!</h1>
        <h1>I'm <span class="name">Sanjana</span></h1>
      {displayedText}
      <span className="caret"></span>
    </div>
  )
}
export default Typing;
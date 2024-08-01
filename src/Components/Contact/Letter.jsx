import React from "react";
import { useState } from "react";
import "./letter.css"
import emailjs from "emailjs-com"
function Letter() {
  const [val, setVal] = useState({
    name:" ",
    subject:" ",
    msg :" ",
    mail : "",
    num : " "
  });
  const serviceid = "service_lp0fl5d";
  const templateid = "template_2s9acvf";
  const userid = "65jBapvXd7s4VpsWj";
  const handleSubmit =()=>{
    emailjs.send(serviceid,templateid,val,userid).then((res)=>{
      alert("Letter has been posted successfully" )
      window.location.reload()
    }).catch((er)=>{
      console.log(er)
    })
  }

  // Step 2: Create a Handler Function
  const handleName = (event) => {
    val.name = event.target.innerText;
    setVal(val)
  };
  const handleSubject = (event) => {
    val.subject = event.target.innerText;
    setVal(val)
  };
  const handleMsg = (event) => {
    val.msg = event.target.innerText;
    setVal(val)
  };
  const handleMail = (event) => {
    val.mail = event.target.innerText;
    setVal(val)
  };
  const handleNum = (event) => {
    val.num = event.target.innerText;
    setVal(val)
  };
  return (
    <div className="">
      <div class="toppest">
        <div class="wrapper">
          <h1 class="head">Contact us</h1>

          <div class="form__contact" >
            <fieldset>
              <p class="para">Hey, Iron Valley Solutions!</p>
              <p class="para">
                My name is{val.name}
                <span
                  onInput={handleName}
                  class="san form__field field--name"
                  data-placeholder="your name"
                  tabIndex="1"
                  contentEditable
                ></span>{" "}
                and I'm writting to you regarding {val.subject}
                <span
                onInput={handleSubject}
                  class="san form__field field--message"
                  data-placeholder="your subject"
                  tabIndex="2"
                  contentEditable
                ></span>
                {" "}
                 to enquire{val.msg}
                <span
                onInput={handleMsg}
                  class="san form__field field--message"
                  data-placeholder="your message"
                  tabIndex="2"
                  contentEditable
                ></span>
                {"."}
              </p>
              <p class="para">
                This is my {val.mail}
                <span
                onInput={handleMail}
                  class="san form__field field--email"
                  data-placeholder="your email address"
                  tabIndex="3"
                  contentEditable
                ></span>{" "}
                 and you can call me at  {val.num}
                <span
                onInput={handleNum}
                  class="san form__field field--message"
                  data-placeholder="your number"
                  tabIndex="2"
                  contentEditable
                ></span>{"."}
              </p>
              
              <p class="para">Hope to get in touch soon. Cheers!</p>
              <button type="submit" class="buton  buton--xlarge" tabIndex="4" onClick={handleSubmit}>
                Send message &#187;
              </button>
            </fieldset>
          </div>
        </div>

        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
        >
          <defs>
            <filter id="blur0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
            </filter>
            <filter id="blur1">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" />
            </filter>
            <filter id="blur2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
            </filter>
            <filter id="blur3">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0 15" />
            </filter>
            <filter id="blur4">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Letter;

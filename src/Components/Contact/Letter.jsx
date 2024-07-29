import React from "react";
import "./letter.css"
function Letter() {
  return (
    <div className="">
      <div class="toppest">
        <div class="wrapper">
          <h1 class="head">Contact us</h1>

          <form class="form__contact" >
            <fieldset>
              <p class="para">Hey, Iron Valley Solutions!</p>
              <p class="para">
                My name is{" "}
                <span
                  class="san form__field field--name"
                  data-placeholder="your name"
                  tabIndex="1"
                  contentEditable
                ></span>{" "}
                and I'm writting to you regarding {" "}
                <span
                  class="san form__field field--message"
                  data-placeholder="your subject"
                  tabIndex="2"
                  contentEditable
                ></span>
                {" "}
                 to convey{" "}
                <span
                  class="san form__field field--message"
                  data-placeholder="your message"
                  tabIndex="2"
                  contentEditable
                ></span>
                {"."}
              </p>
              <p class="para">
                This is my {"  "}
                <span
                  class="san form__field field--email"
                  data-placeholder="your email address"
                  tabIndex="3"
                  contentEditable
                ></span>{" "}
                 and you can call me at  {" "}
                <span
                  class="san form__field field--message"
                  data-placeholder="your number"
                  tabIndex="2"
                  contentEditable
                ></span>{"."}
              </p>
              
              <p class="para">Hope to get in touch soon. Cheers!</p>
              <button type="submit" class="buton  buton--xlarge" tabIndex="4">
                Send message &#187;
              </button>
            </fieldset>
          </form>
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

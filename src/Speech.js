import React from "react";
import { useState } from "react";

const Speech = () => {
  const [listen, setlisten] = useState(false);
  const [responce, setResponce] = useState("");

  async function hai() {
    try {
      let rego = await new window.webkitSpeechRecognition();
      if (!rego) {
        throw new Error("not support in your version");
      }
      rego.lang = `en`;
      rego.interimResults = false;
      rego.start();

      rego.onstart = () => {
        setlisten(true);
      };

      rego.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log(transcript.toLowerCase());
        if (
          transcript.includes("facebook") ||
          transcript.includes("facebook open")
        ) {
          window.open("https://www.facebook.com/", "_blank");
        }
        if (
          transcript.includes("whatsapp") ||
          transcript.includes("whatsapp open")
        ) {
          window.open("https://www.whatsapp.com/", "_blank");
        }
        if (
          transcript.includes("map") ||
          transcript.includes("google map open")
        ) {
          window.open("https://www.google.com/maps", "_blank");
        }
        if (
          transcript.includes("netflix") ||
          transcript.includes("netflix open")
        ) {
          window.open("https://www.netflix.com/in/", "_blank");
        }
        if (
          transcript.includes("amazon") ||
          transcript.includes("amazon open")
        ) {
          window.open("https://www.amazon.in/", "_blank");
        }
        if (
          transcript.includes("flipkart") ||
          transcript.includes("flipkart open")
        ) {
          window.open("https://www.flipkart.com/", "_blank");
        }
        if (
          transcript.includes("instagram") ||
          transcript.includes("instagram open")
        ) {
          window.open("https://www.instagram.com/", "_blank");
        }
        if (
          transcript.includes("twitter") ||
          transcript.includes("twitter open")
        ) {
          window.open("https://twitter.com/login", "_blank");
        }
        if (transcript.includes("github") || transcript.includes("get up")) {
          window.open("https://github.com/", "_blank");
        }
        if (
          transcript.includes("linkedin") ||
          transcript.includes("linkedin open")
        ) {
          window.open("https://www.linkedin.com/", "_blank");
        }
        if (
          transcript.includes("naukri") ||
          transcript.includes("naukri open")
        ) {
          window.open("https://www.naukri.com/mnjuser/homepage", "_blank");
        }
        if (
          transcript.includes("4 gpt") ||
          transcript.includes("open ai") ||
          transcript.includes("4 gpt")
        ) {
          window.open("https://chat.openai.com/", "_blank");
        }
        if (
          transcript.includes("pinterest") ||
          transcript.includes("pinterest open")
        ) {
          window.open("https://in.pinterest.com/", "_blank");
        }
        if (
          transcript.includes("stackoverflow") ||
          transcript.includes("stackoverflow open")
        ) {
          window.open("https://stackoverflow.com/", "_blank");
        }
        if (
          transcript.includes("leetcode") ||
          transcript.includes("leetcode open")
        ) {
          window.open("https://leetcode.com/problemset/", "_blank");
        }
        if (
          transcript.includes("zoho career page") ||
          transcript.includes("zoho career page open")
        ) {
          window.open("https://careers.zohocorp.com/candidateportal", "_blank");
        }
        if (
          transcript.includes("google.com") ||
          transcript.includes("google.com open")
        ) {
          window.open("https://www.google.com/", "_blank");
        }
        if (
          transcript.includes("rapido") ||
          transcript.includes("rapido open")
        ) {
          window.open("https://www.rapido.bike/", "_blank");
        }
        if (
          transcript.includes("swiggy") ||
          transcript.includes("swiggy open")
        ) {
          window.open("https://www.swiggy.com/", "_blank");
        }
        if (
          transcript.includes("justdial") ||
          transcript.includes("justdial open")
        ) {
          window.open("https://www.justdial.com/", "_blank");
        }
        if (
          transcript.includes("wikipedia") ||
          transcript.includes("wikipedia open")
        ) {
          window.open("https://www.wikipedia.org/", "_blank");
        }
      };

      rego.onend = () => {
        setlisten(false);
      };
    } catch (error) {
      setlisten(error.messaege);
    }
  }

  return (
    <div className="container outer">
      <div className="container images">
        <img
          src="https://i.pinimg.com/564x/4f/91/43/4f91436deaec33a3404db3da81e528a4.jpg"
          className="img-fluid image"
          onClick={() => hai()}
          width="300"
          height="200"
        />
      </div>
    </div>
  );
};

export default Speech;

let html = `
    <div class="bakameRecording" id="bakameRecording">
        <div class="bakameCounter">
            <label id="timerLabel">0:00</label>
        </div>
        <!-- <div  id="bakameRecorderControls"> -->
            <button id="bakameCancel" ><img src="./images/cancel.svg" alt="Cancel"></button>
            <button id="bakamePause" ><img src="./images/pause.svg" alt="Pause"></button>
            <button id="bakameAudio"><img src="./images/send.svg" alt="Send"></button>
        <!-- </div>  -->
    </div>
`;

let styles = `
    .mainContainer{
        color: #0000ff;
        background-color:#000;
    }
`;

// document.body.innerHTML=html;

// const readConfigs = () =>{
//     // Create a new XHR object
//     const xhr = new XMLHttpRequest();
  
//     // Open a GET request to the JSON file
//     xhr.open('GET', './index.html', true);
  
//     // Set the response type to JSON
//     xhr.responseType = 'json';
  
//     // Handle the onload event
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         // Parse the response as JSON and do something with the data
//         const data = xhr.response;
//         // return data;
//         let {chatbots} = data;
//         chatbots.map((chatbot,idx)=>{
//           let option = document.createElement('option');
//           option.setAttribute("value",chatbot.name);
//           option.setAttribute("languages",chatbot.languages);
//           option.innerHTML = chatbot.name;
//           bakameApiSelect.appendChild(option);
//           if(idx ==0){
//             bakameApiSelect.selectedIndex = 0;
//             option.setAttribute("selected",true);
//             setLanguagesFromConfigs(chatbot.languages);
//           }
  
  
//         })
//         console.log(data);
//       } else {
//         console.error('Failed to load JSON file');
//       }
//     };
  
//     // Send the request
//     xhr.send();
  
//   }


// read the css and include it

    const readIndexCss = ()=>{
        // Make an HTTP request to the CSS file
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "./bakame/index.css");
        xhr.onload = function() {
        const cssText = xhr.responseText;
        console.log("css",cssText);

        var head = document.getElementsByTagName('HEAD')[0];
        // creating a link 
        const style = document.createElement("style");
        let link = document.createElement("link");
        link.setAttribute("href", "./bakame/index.css");
        link.setAttribute("rel","stylesheet");
        head.appendChild(link);
        // let css = readIndexCss();
        // style.innerHTML= cssText;
        // head.appendChild(style);
        // return cssText;
        };
        xhr.send();

    }
     readIndexCss();


     // READ the java script and include it on the page
     const readIndexJS = () =>{
         const xhr = new XMLHttpRequest();
         xhr.open("GET", "./bakame/index.js");
         xhr.onload = function(){
        const jsText = xhr.responseText;
        console.log("js", jsText);
        

         }
     }

    const readIndexToExtractTheChatbot = (css) =>{

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./bakame/index.html");

    xhr.onload = function() {
        const responseText = xhr.responseText;
        const parser = new DOMParser();
        const doc = parser.parseFromString(responseText, "text/html");
        // const mainContainer = doc.querySelector(".mainContainer");
        // let mainContent = document.createElement("div");
        // mainContent.
        const chatbot = doc.querySelector(".chatbot");
        const smallDev = doc.querySelector(".smallDev");
        let head = document.getElementsByTagName('HEAD')[0];

        console.log("head",head); 
        // document.body.appendChild(mainContainer);
        document.body.appendChild(chatbot);
        document.body.appendChild(smallDev);

        let script = document.createElement("script");
        script.setAttribute("src","./bakame/index.js" );
    
        document.body.appendChild(script);
    };
    xhr.send();


    } 

  readIndexToExtractTheChatbot();



  // so far the chatbot is included but the images, links, and other path related features are to be done next
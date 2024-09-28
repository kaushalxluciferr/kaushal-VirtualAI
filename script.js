const btn=document.querySelector("#btn");
const content=document.querySelector(".content");
const kaush=document.querySelector("#voice");

function speak(text)
{
const text_speak=new SpeechSynthesisUtterance(text);  //helps in speaking 
text_speak.rate=1;
text_speak.pitch=1;
text_speak.volume=1;
text_speak.lang="hi-GB"
window.speechSynthesis.speak(text_speak);
}

//function for wishing me when i load my website 
function wishme()
{
    const day=new Date();
   const hours= day.getHours();
if(hours>=0&&hours<12){
    speak("Good morning sir,i am your assistant kaushal, how can i can i help you");
}
else if(hours>=12&&hours<17){
    speak("Good afternoon sir,,i am your assistant kaushal,  how can i can i help you");
}
else(hours>=17&&hours<0);{
    speak("Good night sir,,i am your assistant kaushal, how can i  help you");
}
}



//when my window loads then it wishes me 
// window.addEventListener('load',()=>{   
//     wishme();
// })


//listen wy speaking words and storing it
const speechrec=window.SpeechRecognition || window.webkitSpeechRecognition
const recognition=new speechrec();
recognition.onresult=(event)=>{

    let currentIndex=event.resultIndex   //location of the word spoken in teh data
   let transcript= event.results[currentIndex][0].transcript;  // aceess the spoken word 
   content.textContent=transcript; // what we speak is written in the text btn
    takecommand(transcript.toLowerCase());
console.log(event);

    
}
  //function to display the result
function takecommand(transcript)
{
    btn.style.display="block";
    kaush.style.display="none";

if(transcript.includes("hello")||transcript.includes("hii"))
{
    speak("hello sir, i am kaushal how can i help you");
}
else if(transcript.includes("who are you"))
{
    speak(" i am kaushal,your personal virtual assistant,Created by kaushal, how can i help you");
}

else if(transcript.includes("what is your name"))
    {
        speak(" i am kaushal,your personal virtual assistant,Created by kaushal");
    }
    else if(transcript.includes("open calculator"))
        {
            speak("opening calculator");
            window.open("calculator://")
        }
        else if(transcript.includes("open calculator"))
            {
                speak("opening calculator");
                window.open("calculator://")
            }
       
else if(transcript.includes("time"))
{
    const time = new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' });
    speak(time);
}
else if(transcript.includes("date"))
    {
        const date = new Date().toLocaleString(undefined, { day: 'numeric', month: 'short' });
        speak(date);
    }
else if(transcript.includes("open youtube"))
{
    speak("opening youtube");
    window.open("https://www.youtube.com/","_blank")
}
else if(transcript.includes("open google"))
    {
        speak("opening Google");
        window.open("https://www.google.com/","_blank")
    }
   else  if(transcript.includes("open facebook"))
        {
            speak("opening Facebook");
            window.open("https://www.facebook.com/","_blank")
        }
       else if(transcript.includes("open instagram"))
            {
                speak("opening instagram");
                window.open("https://www.instagram.com/","_blank")
            }
            else if(transcript.includes("open" )) {
                const kee = transcript.replace("open", "").trim();  // Remove "open" and trim any extra spaces
                speak(`opening ${kee}`);
                window.open(`https://www.${kee}.com/`, "_blank");
            }
            
            else{
                speak(`this is waht i found on internet regarding ${transcript.replace("kaushal")} ` )
                window.open(`https://www.google.com/search?q=${transcript.replace("kaushal")}`)
            }
}



//click on button
btn.addEventListener("click",()=>{
recognition.start();// when we click on btn then our mike start recordingour sound and store in data
btn.style.display="none";//disapppear the btn 
kaush.style.display="block"; //appear the gphy or the ai voice video
}
)
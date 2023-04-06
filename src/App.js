import './App.css';
import { Configuration, OpenAIApi } from "openai";
import { useState } from 'react';
import Header from './Header';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import PhotoOutput from './PhotoOutput';

function App() {
  const [prompt, setPrompt] = useState("");
  const [chatData, setChatData] = useState({ "history": [{ "type": "openai", "data": "Hello" }], "response": "" });
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateResponse = async () => {
    if (prompt === "")
      return false; 
    let newChatData = Object.assign({}, chatData) 
    if (chatData.response !== "")
    
    newChatData.history.push({ "type": "openai", "data": chatData.response }) 
    newChatData.history.push({ "type": "user", "data": prompt }) 

    let openAIPrompt = "Translate word by word from Romanian to english:\n" + prompt + ':';

    function randomPrompt(){
      let randint = Math.floor(Math.random()*3)+1;
      var promptRand
      switch(randint){
          case 1:
              promptRand = "Awesome Badass Biker Skull HD Wallpaper, Centered, by WallpaperAccess, by EnWallpaper";
              break;
          case 2:
              promptRand = "ultra HD realistic real lifelike badass angry rage ghost rider skeleton motorbike leather jacket horror scary dark night fire by Pinterest by WallpaperAccess by EnWAllpaper"
              break;
          case 3:
              promptRand = "realistic real life very real lifelike werewolf ripping clothes howling at the moon forest dark night wolfman dangerous"
              break;
          }
          return promptRand;
      }

    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: openAIPrompt,
      temperature: 0.3,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const imageResponse = await openai.createImage({
      prompt: randomPrompt(),
      n: 1,
      size: "512x512",
    });

    console.log(imageResponse);

    const imgUrl = imageResponse.data.data[0].url;

    let processedTranslationResponse = response.data.choices[0].text; 
    newChatData.response = processedTranslationResponse.length === 0 ? "Sorry, no response" : processedTranslationResponse;
    newChatData.imageResponse = imgUrl;
    setChatData(newChatData); //update the state
    console.log('imageResponse',imageResponse)
    console.log('response', response);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className='chat-container'>
        {/* <ChatHistory chatHistory={chatData.history} response={chatData.response} /> */}
        <PhotoOutput processedImageResponse={chatData.imageResponse} processedTranslationResponse={chatData.response} />
        <ChatInput handleChange={setPrompt} handleClick={generateResponse} ></ChatInput>
        
      </div>
    </div>
  );
}

export default App;
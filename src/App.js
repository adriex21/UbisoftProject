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
      prompt: "ultra HD realistic real lifelike badass angry rage ghost rider skeleton motorbike leather jacket horror scary dark night fire by Pinterest by WallpaperAccess by EnWAllpaper",
      n: 1,
      size: "512x512",
    });

    console.log(imageResponse);

    const imgUrl = imageResponse.data.data[0].url;

   
    let processedTranslationResponse = response.data.choices[0].text; // I'm only using the text in my example
    newChatData.response = processedTranslationResponse.length === 0 ? "Sorry, no response" : processedTranslationResponse;
    newChatData.imageResponse = imgUrl;
    setChatData(newChatData); //update the state
    console.log('imageResponse',imageResponse)
    console.log('response', response);

    

    // Mocked response
    // let response = { "data": {} }
    // response.data = { "id": "cmpl-6he4kCxIA8rF1IL9WcM5WbiSp2k48", "object": "text_completion", "created": 1675860174, "model": "text-davinci-003", "choices": [{ "text": " 🤺⚔️🗡️🗿", "index": 0, "logprobs": null, "finish_reason": "stop" }], "usage": { "prompt_tokens": 16, "completion_tokens": 14, "total_tokens": 30 } };
    
    

   

  };

  return (
    <div className="App">
      <Header></Header>
      <div className='chat-container'>
        <ChatHistory chatHistory={chatData.history} response={chatData.response} />
        <PhotoOutput processedImageResponse={chatData.imageResponse} processedTranslationResponse={chatData.response} />
        <ChatInput handleChange={setPrompt} handleClick={generateResponse} ></ChatInput>
        
      </div>
    </div>
  );
}

export default App;
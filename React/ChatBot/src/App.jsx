import { ChatInput, ChatMessage } from "./chatbot";

import "./App.css";

function App() {
  const chatmessages = [
    {
      message: "Hello Chatbot",
      sender: "User",
    },
     {
      message: "Hey",
      sender: "robot",
    }
  ];

      chatmessages.map((ChatMessage)=>{

          return(

            <ChatMessage

             message={ChatMessage.message}
             sender={ChatMessage.sender}

            />
          )
      })

  return (
    <>
      <ChatInput />
      <ChatMessage message="Hello ChatBot" sender="user" />
      <ChatMessage message="hey" sender="robot" />
    </>
  );
}

export default App;

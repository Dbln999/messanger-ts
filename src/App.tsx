import React, { useState } from "react";
import { Imessage } from "./interface";
import "./index.css";
import { MessageField } from "./MessageField";
import pudge from "./pudge.jpg";

function App() {
  const [messages, setMessages] = useState<Imessage[]>([
    {
      title: "Test message, Hello Viewer!",
      id: 0,
      avatar: pudge,
      size: 25,
      editState: false,
    },
  ]);

  const addMessage = (title: string, size:number) => {
    const newMessage: Imessage = {
      title: title,
      id: Date.now(),
      avatar: pudge,
      editState: false,
      size:size
    };
    setMessages((perv) => [...perv, newMessage]);
  };

  const removeMessage = (id: number) => {
    setMessages((prev) => prev.filter((mess) => mess.id !== id));
  };

  const editMessage = (title: string, id: number, size:number) => {
    messages.map((mess) => {
      if (mess.id === id) {
        mess.title = title;
        mess.size = size;
      }
    });
  };

  return (
    <div className="App">
      <MessageField
        messages={messages}
        removeMessage={removeMessage}
        addMessage={addMessage}
        editMessage={editMessage}
      />
    </div>
  );
}

export default App;

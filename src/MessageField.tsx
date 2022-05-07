import React, { useState } from "react";
import { Imessage } from "./interface";
import { Message } from "./Message";

type messagesProps = {
  messages: Imessage[];
  addMessage(title: string, size: number): void;
  removeMessage(id: number): void;
  editMessage(title: string, id: number): void;
};

export const MessageField: React.FC<messagesProps> = ({
  messages,
  ...props
}) => {
  const [title, setTitle] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const targetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setSize(event.target.value.length);
  };

  const btnHandler = () => {
    if (title.trim()) {
      props.addMessage(title, size);
      setTitle("");
    }
  };

  const enterKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      btnHandler();
    }
  };

  return (
    <div>
      {messages.map((mess) => {
        return (
          <Message
            mess={mess}
            key={mess.id}
            removeMessage={props.removeMessage}
            editMessage={props.editMessage}
          ></Message>
        );
      })}
      <div className="messageEnterContainer">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your message here..."
          className="messageInput"
          value={title}
          onKeyPress={enterKey}
          onChange={targetHandler}
        />
        <button onClick={btnHandler}>Send</button>
      </div>
    </div>
  );
};

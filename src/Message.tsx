import React, { useState } from "react";
import { Imessage } from "./interface";

type messProps = {
  mess: Imessage;
  removeMessage(id: number): void;
  editMessage(title: string, id: number, size:number): void;
};

export const Message: React.FC<messProps> = ({ mess, ...props }) => {
  const [title, setTitle] = useState<string>(mess.title);
  const [disable, setDisable] = useState<boolean>(true);
  const [titleLength, setTitleLength] = useState(mess.size);

  const editHandler = () => {
    setDisable(!disable);
  };

  const messHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setTitleLength(event.target.value.length)
    props.editMessage(title, mess.id, titleLength);
  };

  const className = !disable ? "completed" : "fieldContent";

  return (
    <div className="messageCont" key={mess.id}>
      <img className="messageAvatar" src={mess.avatar} alt="" />
      <div className="message">
        <input
          type="text"
          className={className}
          value={title}
          disabled={disable}
          size={mess.size}
          onChange={messHandler}
        />
        <div className="interactons">
          <p className="trash" onClick={() => props.removeMessage(mess.id)}>
            🗑️
          </p>
          <p className="pencil" onClick={editHandler}>
            &#9999;&#65039;
          </p>
        </div>
      </div>
    </div>
  );
};

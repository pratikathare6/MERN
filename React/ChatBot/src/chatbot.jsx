export function ChatInput() {
  return (
    <div>
      <input placeholder="Send a message to ChatBot"
             size="30"
       />


      <button>Send</button>
    </div>
  );
}

export function ChatMessage({ message, sender }) {
  //const message = props.message;
  //const sender = props.sender;

  //const {message,sender} = props; //destructuring

  /*if (sender === "robot") {
    return (
      <div>
        
        <img
          src="https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=000000"
          alt=""
        />
        {message}
      </div>
    );
  }*/

  return (
    <div>
      {sender === "robot" && (
        <img
          src="https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=000000"
          alt=""
        />
      )}

      {message}
      { sender ==="user" && <img
        src="https://img.icons8.com/?size=100&id=xXjlE05o3dcg&format=png&color=000000"
        alt=""
      />}
    </div>
  );
}

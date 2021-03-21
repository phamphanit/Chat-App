import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
const ChatFeed = (props) => {
  const { activeChat, messages, userName, chats } = props;
  const chat = chats && chats[activeChat];
  console.log(messages);
  console.log(chat);
  console.log(activeChat);
  console.log(chats);

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
          <div
            className="read-receipts"
            styles={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          ></div>
        </div>
      );
    });
  };
  if (!chat) return "Loading...";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }}></div>
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat}></MessageForm>
        </div>
      </div>
    </div>
  );
};
export default ChatFeed;

import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
const App = () => {
        return (
                <ChatEngine
                        height='100vh'
                        userName='Eugene'
                        userSecret='1qaz!QAZ'
                        projectID='aedcf9af-272d-4b12-8c9c-f53fbd583474'
                        renderChatFeed={(chatProps) => <ChatFeed {...chatProps}></ChatFeed>}

                />
        )
}
export default App;
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';
const App = () => {
        const userName = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if (!userName) return <LoginForm />
        return (
                <ChatEngine
                        height='100vh'
                        userName={userName}
                        userSecret={password}
                        projectID='aedcf9af-272d-4b12-8c9c-f53fbd583474'
                        renderChatFeed={(chatProps) => <ChatFeed {...chatProps}></ChatFeed>}

                />
        )
}
export default App;
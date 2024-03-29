
import { BrowserRouter , Route , Routes , Navigate} from "react-router-dom"
import './App.css'
import LoginPage from './pages/LoginPage'
import Layout from "./pages/Layout"
import ListPage from "./pages/ListPage"
import ChatPage from "./pages/ChatPage"
import ProfilePage from "./pages/ProfilePage"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

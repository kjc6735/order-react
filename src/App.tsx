import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MyPage from './pages/MyPage'
import Modal from './components/Modal'
import rootReducer from './slices'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer: rootReducer })

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/*" element={<>Page Not Found</>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App

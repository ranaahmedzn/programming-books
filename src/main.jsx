import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/books',
                element: <Books></Books>,
                loader: () => fetch('https://api.itbook.store/1.0/new')
            },
            {
                path: '/book/:bookId',
                element: <BookDetail></BookDetail>,
                loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
            },
            {
                path: '/about', 
                element: <About></About>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

import { useState, useEffect, createContext } from 'react'
import { supabase } from '../services/supabaseClient'

export const RedditContext = createContext();

export const RedditProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  useEffect(() => {
    const { user } = supabase.auth.session() || { user: null }
    setCurrentUser(user);

    // console.log({ user }, { context: 'Hii' })

    supabase.auth.onAuthStateChange((_event, authSession) => {
      setCurrentUser(user);
    })
  }, []);

  return (
    <RedditContext.Provider value={{ currentUser, fetcher, selectedPost, setSelectedPost }}>
      {children}
    </RedditContext.Provider>
  )
}
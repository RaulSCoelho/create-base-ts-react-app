import React from 'react'

import { ThemesProvider } from './ThemeContext'

const AppContext = ({ children }) => {
  return <ThemesProvider>{children}</ThemesProvider>
}

export default AppContext

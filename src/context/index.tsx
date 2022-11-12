import React from 'react'

import { ThemesProvider } from './ThemeContext'

interface Props {
  children?: React.ReactNode
}

const AppContext: React.FC<Props> = ({ children }) => {
  return <ThemesProvider>{children}</ThemesProvider>
}

export default AppContext

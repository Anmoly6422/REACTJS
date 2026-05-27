import React, { createContext } from 'react'

 export const ThemeDataContext = createContext()
const themecontes = (props) => {
  return (
    <div>
  <ThemeDataContext.Provider  value='Anmol Yadav'>
    {props.children}
  </ThemeDataContext.Provider>
    </div>
  )
}

export default themecontes

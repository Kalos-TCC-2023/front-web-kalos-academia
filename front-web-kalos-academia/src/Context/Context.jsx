import React, { createContext } from 'react'

const GlobalContext = createContext()

function globalContext  ({ children })  {
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>

}

export {GlobalContext, globalContext}

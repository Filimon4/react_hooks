import React, {useState} from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'
import {useThemeProvider} from './useThemeProvider'

const ThemeProvider = () => {
    return (
        <useThemeProvider >
            <div>Hi</div>
            {/* <FunctionContextComponent /> */}
        </useThemeProvider>
      )
}

export default ThemeProvider
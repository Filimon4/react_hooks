import React from 'react'
import InnverWidth from './useEffect/InnverWidth'
import Toggle from './useContext/ToggleButton/Toggle'
import PrintName from './useRef/PrintName'
import ElemLink from './useRef/ElemLink'
import ToggleCombine from './useContext/ToggleButton/ToggleCombine'
import ThemeProvider from './useContext/MultipleContext/LoginUser'
import HookLogin from './useContext/HookContext/HookLogin'
import Counter from './useReducer/Counter'
import Todos from './useReducer/Todos'
import FibList from './useCallback/FibList'
import SaveValues from './useCustomHook/useLocalStorage'
import MoveText from './useLayoutEffect/MoveText'
import PrintF from './useTransition/PrintF'
import PrintLoad from './useDeferredValue/PrintLoad'
import FocusText from './useImperativeHandle/TextFocus/FocusText'
import MultButtons from './useImperativeHandle/MultipleButtons/MultButtons'
import DebugComp from './useDebugValue/DebugComp'

const App = () => {
  return (<>
    <DebugComp />
  </>)
}

export default App
import { useState } from 'react'

import {TextField} from '@mui/material'
import './App.css'
import Rule from './Components/Rule'
import { IRule } from './constants/types'
import { allRules } from './constants/global'
function App() {
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [rules, setRules] = useState<IRule[]>(allRules)
  const validation = (password:string)=>{
    setPassword(password)
    for (let rule of rules.sort((a,b )=> a.id-b.id)){
      rule.shown=true
      if (!rule.validation(password, rule)){
        rule.status = 'error'
        setError(true)
        setRules(rules)
        return 
      } else {
        setError(false)
        rule.status = 'success'
        setRules([...rules])
      }
    }
  }
  return (
 <>
 <TextField
 error={error}
 fullWidth 
 id="fullWidth" 
 value={password} 
 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    validation(event.target.value);
  }}
  />
  {rules.filter(el=>el.status==='error' && el.shown===true).map((el:IRule)=> <Rule {...el}  key={el.id}></Rule>)}
  {rules.sort((a, b)=> b.id - a.id).filter(el=>el.status==='success'  && el.shown===true).map((el:IRule)=> <Rule {...el} key={el.id}></Rule>)}
 </>
  )
}

export default App

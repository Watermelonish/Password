import { useState, useEffect } from 'react'

import {TextField} from '@mui/material'
import './App.css'
import Rule from './Components/Rule'
import { IRule } from './constants/types'
import { allRules, sortHelper } from './constants/global'
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide'
import Zoom from '@mui/material/Zoom'
import * as React from 'react'

function App() {

  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [rules, setRules] = useState<IRule[]>(allRules)
  const containerRef = React.useRef<HTMLElement>(null);
  const validation = (password:string)=>{
    const first: IRule|undefined = rules.find(el=>el.id===0)
    first? first.shown = true : null
    setPassword(password)
    let rulesBuffer = rules.sort((a,b )=> a.id-b.id)
    for (let i=0; i<rulesBuffer.length; i++){
      rulesBuffer[i].prevStatus = rulesBuffer[i].status
      if (!rulesBuffer[i].validation(password, rulesBuffer[i])){
        rulesBuffer[i].status = 'error'
      } else {
        rulesBuffer[i].status = 'success'
      }
      rulesBuffer[i].firstTime = false
      setRules(rulesBuffer)
      const allDone = !rulesBuffer.filter(el=>el.shown).map((el, index)=>el.validation(password, rulesBuffer[index])).includes(false)
      if (rulesBuffer[i+1] && allDone){
        rulesBuffer[i+1].shown=true
      }
      if (!rulesBuffer[i+1]?.shown){
        return
      }
    }
  }
  return (
 <>
 <TextField
 sx={{ width: 600, margin:'1em' }}
 error={error}
 fullWidth 
 id="fullWidth" 
 value={password} 
 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    validation(event.target.value);
  }}
  />
  <Box  ref={containerRef}>
  <TransitionGroup>
  {sortHelper(rules)
  .filter(el=> el?.shown===true)
  .map((el:IRule)=>
  <Collapse key={`${el.id}a`} in={true}>
    <Rule rule={el}  setRules={setRules}></Rule>
    </Collapse>
    )
    
  }
 </TransitionGroup>
 </Box>
 </>
  )
}

export default App

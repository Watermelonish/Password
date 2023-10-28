import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { IRule } from "../constants/types"
import { red, green } from '@mui/material/colors';
import QRCode from "react-qr-code";
import RCG from 'react-captcha-generator';
import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
interface Iprops {
  rule: IRule,
  setRules: any
}
const Rule = function Rule(props: Iprops) {
    const {header, text, status, qr, capcha} = props.rule
    const setRules = props.setRules
    const result = (capchaText:string)=> {
      console.log(capchaText)
      setRules((prevState:IRule[])=>([...prevState.map(el=>el?.capcha? {...el, capcha:capchaText}:el)]))
    }
    return (
   <>
   <Card sx={{ width: 800, margin:'1em' }} style={{backgroundColor: status==='error'?red[50]:green[50], borderColor: status==='error'?red[900]:green[900]}}>
    <CardHeader subheader={header} style={{backgroundColor: status==='error'?red[100]:green[100]}}>
    </CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        {qr? 
        <div style={{ background: 'white', padding: '16px' }}>
           <QRCode value={qr|| ''}/>
           <JigsawPuzzle imageSrc="vite.svg" />
    </div>
    :
    null
}
{capcha? 
<RCG
    result={result} // Callback function with code
  />
  :null
  } 
      </CardContent>
    </Card>
   </>
    )
  }
  
  export default Rule
  
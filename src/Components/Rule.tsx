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
    const {header, text, status, qr, capcha, jigsawPuzzle, panorama} = props.rule
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
  { jigsawPuzzle? <JigsawPuzzle imageSrc="parallel.jpg" />:null}
  { panorama? <JigsawPuzzle imageSrc="parallel.jpg" />:null}
  <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps/43/kazan/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0px'}}></a><a href="https://yandex.ru/maps/43/kazan/?l=stv%2Csta&ll=49.253873%2C55.747215&mode=search&panorama%5Bdirection%5D=341.199175%2C-9.689073&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=49.075270%2C55.837786&panorama%5Bspan%5D=120.096961%2C60.000000&sll=49.197296%2C55.750589&text=55.750589%2C49.197296&utm_medium=mapframe&utm_source=maps&z=10.94" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>Офис — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?l=stv%2Csta&ll=49.253873%2C55.747215&mode=search&panorama%5Bdirection%5D=341.199175%2C-9.689073&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=49.075270%2C55.837786&panorama%5Bspan%5D=120.096961%2C60.000000&sll=49.197296%2C55.750589&text=55.750589%2C49.197296&z=10.94" style={{width:"560", height:"400", position:'relative'}}></iframe></div>
      </CardContent>
    </Card>
   </>
    )
  }
  
  export default Rule
  
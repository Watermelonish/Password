import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { IRule } from "../constants/types"
import { red, green } from '@mui/material/colors';
import QRCode from "react-qr-code";
function Rule(rule:IRule) {
    const {header, text, status, qr} = rule
    return (
   <>
   <Card sx={{ maxWidth: 345 }} style={{backgroundColor: status==='error'?red[100]:green[100], borderColor: status==='error'?red[900]:green[900]}}>
    <CardHeader subheader={header} style={{backgroundColor: status==='error'?red[200]:green[200]}}>
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
      </CardContent>
    </Card>
   </>
    )
  }
  
  export default Rule
  
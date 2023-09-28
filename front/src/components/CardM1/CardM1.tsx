import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './CardM1.css'
import { FC } from 'react';
import { tpCardM1 } from '../../types/typesComponents';

const CardM1: FC<tpCardM1> = ({title, body}) => {

    
    
    return <Card sx={{ boxShadow: "gray 1px 1px 10px "  }} className='CardMD1' >
        <CardHeader            
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={`${title}`}
        />
        <CardContent>
            {body.map((item, index)=>{
                return <Typography key={index} variant="body2" color="text.secondary">
                            {item}
                        </Typography>
            })}
        </CardContent>
    </Card>
}


export default CardM1   

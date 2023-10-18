import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FC } from 'react'
import { tpCalendarDates, tpDialogMUI1 } from '../../types/typesComponents';
import './DialogMUI1.css'


const DialogMUI1: FC<tpDialogMUI1> = ({ open, handlerClose, evento }) => {

  if (evento != null && typeof evento === 'object' && 'title' in evento && 'description' in evento) {
    const { title, description} = evento as tpCalendarDates;
    return (
      <div className='DialogMUI1'>

        <Dialog
          open={open}
          onClose={handlerClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlerClose} autoFocus>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogMUI1



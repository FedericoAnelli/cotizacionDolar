import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import "./ConversorMonedas.css";

const ConversorMoneda = ({ cotizacionDolar }) => {
    const [values, setValues] = useState({
        amountUSD: '',
        amountARS: ''
      });

      const [swap, setSwap] = useState(false);
    
      const handleChange = (prop) => (event) => {
        if(event.target.value === '')
        {
            setValues({
                amountUSD: '',
                amountARS: ''
              })
            return;
        }
        setValues({ [prop]: event.target.value });
      };

      const handleSwapClick = () => {
        setValues({
            amountUSD: '',
            amountARS: ''
          })
        setSwap(!swap);
      };

    return (
        <div className='contenedorConversor'>
            <h4>Convertir</h4>
            <div className={swap ? "conversor" : "conversorReverse"}>
            <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Cantidad</InputLabel>
                <OutlinedInput {...(!swap ? {disabled: true} : {disabled: false})}
                    id="outlined-adornment-amount"
                    value={swap ? values.amountARS : values.amountUSD / cotizacionDolar }
                    onChange={swap ? handleChange('amountUSD') : handleChange('amountARS')}
                    startAdornment={<InputAdornment position="start">U$D</InputAdornment>}
                    label="Cantidad"
                />
            </FormControl>
            <SwapVerticalCircleIcon className='swapIcon' onClick={() => handleSwapClick()} />
            <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">Cantidad</InputLabel>
                <OutlinedInput  {...(swap ? {disabled: true} : {disabled: false})}
                    id="outlined-adornment-amount"
                    value={swap ? values.amountUSD * cotizacionDolar : values.amountUSD}
                    onChange={swap ? handleChange('amountARS') : handleChange('amountUSD')}
                    startAdornment={<InputAdornment position="start">AR$</InputAdornment>}
                    label="Cantidad"
                />
            </FormControl>
            </div>
        </div>
    );
}

export default ConversorMoneda;
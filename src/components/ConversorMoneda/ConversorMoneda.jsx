import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import "./ConversorMonedas.css";

const ConversorMoneda = ({ cotizacionDolar }) => {
    const [values, setValues] = useState({
        amountUSD: 1,
        amountARS: 1,
      });

      const [swap, setSwap] = useState(false);
    
      const handleChange = (prop) => (event) => {
        setValues({ [prop]: event.target.value });
      };

      const handleSwapClick = () => {
        setValues({
            amountUSD: 1,
            amountARS: 1,
          })
        setSwap(!swap);
      };

    return (
        <div>
            <h5>Convertir</h5>
            <div className={swap ? "conversor" : "conversorReverse"}>
            <FormControl fullWidth sx={{ m: 1, width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Cantidad</InputLabel>
                <OutlinedInput
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
                <OutlinedInput
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
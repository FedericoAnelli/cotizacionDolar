import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

const ConversorMoneda = ({ cotizacionDolar }) => {
   
    const [values, setValues] = useState({
        amountUSD: 1,
        amountARS: 1,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <div className="conversor">
            <h5>Convertir</h5>
            <FormControl fullWidth sx={{ m: 1, width: "80%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={ values.amountUSD }
                    onChange={handleChange('amountUSD')}
                    startAdornment={<InputAdornment position="start">U$D</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1, width: "80%" }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={ values.amountUSD * cotizacionDolar}
                    onChange={handleChange('amountARS')}
                    startAdornment={<InputAdornment position="start">AR$</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
        </div>
    );
}

export default ConversorMoneda;
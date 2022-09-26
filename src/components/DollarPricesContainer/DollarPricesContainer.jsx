import DollarPrices from "../DollarPrices/DollarPrices";
import { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";

const DollarPricesContainer = () => {
    const [dollarBlue, setDollarBlue] = useState([]);
    const [dollarOficial, setDollarOficial] = useState([]);

    useEffect(() => {
        const getDollarPrice = async () => {
            const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
            const data = await response.json();
            setDollarBlue(data.blue);
            setDollarOficial(data.oficial);
        }       
        getDollarPrice();
    }, []);

    return (
        <Grid container spacing={2} padding={10}>
            <Grid item xs={12} sm={6} md={4}>
                <DollarPrices title="Blue" buy={dollarBlue.value_buy} sell={dollarBlue.value_sell} avg={dollarBlue.value_avg} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <DollarPrices title="Oficial" buy={dollarOficial.value_buy} sell={dollarOficial.value_sell} avg={dollarOficial.value_avg} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <DollarPrices title="Dolar Tarjeta" buy={(dollarOficial.value_sell*1.3*1.35).toFixed(2)} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <DollarPrices title="MEP" buy={dollarOficial.value_buy} sell={dollarOficial.value_sell} avg={dollarOficial.value_avg} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <DollarPrices title="Contado con Liqui" buy={dollarOficial.value_buy} sell={dollarOficial.value_sell} avg={dollarOficial.value_avg} />
            </Grid>
        </Grid>

    );
}

export default DollarPricesContainer;
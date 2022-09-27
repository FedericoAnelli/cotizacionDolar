import DollarPrices from "../DollarPrices/DollarPrices";
import { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const DollarPricesContainer = () => {
    const [dollarBlue, setDollarBlue] = useState([]);

    useEffect(() => {
        const getDollarPrice = async () => {
            const response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
            const data = await response.json();
            const filteredData = data.filter(function(dol){if (dol.casa.nombre === "Dolar Soja" || dol.casa.nombre === "Bitcoin" || dol.casa.nombre === "Argentina" || dol.casa.nombre === "Dolar"){return false} return true});
            setDollarBlue(filteredData);
        }
        getDollarPrice();
    }, []);

    return (
        <Grid container spacing={5} padding={10} columns={{ xs: 4, md: 12 }}>
            {dollarBlue.map((dollar) => (
                <Grid key={dollar.casa.nombre} item xs={12} sm={6} md={4} lg={3}>
                    <DollarPrices title={dollar.casa.nombre} icon={<PaidIcon />} buy={dollar.casa.compra} sell={dollar.casa.venta} variation={dollar.casa.variacion} />
                </Grid>
            ))}
        </Grid>

    );
}

export default DollarPricesContainer;
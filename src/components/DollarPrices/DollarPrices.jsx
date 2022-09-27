import { Card, CardContent, CardHeader, Icon } from '@mui/material';
import Typography from '@mui/material/Typography';
import ConversorMoneda from '../ConversorMoneda/ConversorMoneda';
import Box from '@mui/material/Box';

const headerStyle = {
    color: "white",
    background: "#134E5E",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #71B280, #134E5E)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #71B280, #134E5E)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    paddingRight: "15%"
}


const DollarPrices = ( { title, icon, buy, sell }) => {

    return (
        <div>
            <Card raised={true}>
                <CardHeader
                title={<Typography variant="subtitle1" component="h2"><Box fontFamily='' fontWeight='fontWeightBold'>{title}</Box></Typography>}
                avatar={icon}
                sx={headerStyle}
                />
                    <CardContent>
                        {sell === "0" ? null : <p><strong>Venta:</strong> ${sell}</p>}
                        {buy === "No Cotiza" ? null : <p><strong>Compra:</strong> ${buy}</p>}
                        <ConversorMoneda cotizacionDolar={parseFloat(sell)} />
                     </CardContent>
            </Card>
        </div>
    );

}

export default DollarPrices;

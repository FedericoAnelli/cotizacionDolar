import { Card, CardContent, CardHeader, Icon } from '@mui/material';
import ConversorMoneda from '../ConversorMoneda/ConversorMoneda';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./DollarPrices.css";

const headerStyle = {
    color: "white",
    background: "#134E5E",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #71B280, #134E5E)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #71B280, #134E5E)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    paddingRight: "15%"
}


const DollarPrices = ( { title, icon, buy, sell, variation }) => {
    
    const numberParser = (number) => {
        const numberDecimalChange = number.replace(",", ".");
        const numberParsed = ((parseFloat(numberDecimalChange)).toFixed(2));
        return numberParsed;
    }


    return (
        <div>
            <Card raised={true}>
                <CardHeader
                title={<h2 className='titleStyle'>{title}</h2>}
                avatar={icon}
                sx={headerStyle}
                />
                    <CardContent className='valoresDolar'>
                        <div className='valores'>
                        {sell === "0" ? null : <p><strong>Venta:</strong> ${sell}</p>}
                        {buy === "No Cotiza" ? null : <p><strong>Compra:</strong> ${buy}</p>}
                        </div>
                        <div className='variacion'> <p><strong>Variación: </strong></p> {numberParser(variation) < 0 ?  <p className='negative'> {variation} <ArrowDropDownIcon /></p> : <p className='positive'> {variation} <ArrowDropUpIcon /></p>} </div>
                        <ConversorMoneda cotizacionDolar={numberParser(sell)} />
                     </CardContent>
            </Card>
        </div>
    );

}

export default DollarPrices;

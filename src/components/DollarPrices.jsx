import { useEffect, useState } from 'react';

const DollarPrices = () => {

    const [dollarBluePrice, setDollarBluePrice] = useState([]);
    const [dollarOfficialPrice, setDollarOfficialPrice] = useState([]);

    useEffect(() => {
        console.log("hola");

        const getDollarPrice = async () => {
            const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
            const data = await response.json();
            setDollarBluePrice(data.blue);
            setDollarOfficialPrice(data.oficial);
        }       

        getDollarPrice();
    }, []);

    return (
        <div>
            <h1>Blue</h1>
            <p>Venta: $ {dollarBluePrice.value_sell}</p>
            <p>Compra: $ {dollarBluePrice.value_buy}</p>
            <p>Promedio: $ {dollarBluePrice.value_buy}</p>
            <h1>Oficial</h1>
            <p>Venta: $ {dollarOfficialPrice.value_sell}</p>
            <p>Compra: $ {dollarOfficialPrice.value_buy}</p>
            <p>Promedio: $ {dollarOfficialPrice.value_buy}</p>
        </div>
    );

}

export default DollarPrices;

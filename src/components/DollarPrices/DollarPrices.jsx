import { Card, CardContent, CardHeader } from '@mui/material';
import { useEffect, useState } from 'react';


const DollarPrices = ( { title, buy, sell, avg }) => {
    
    return (
        <div>
            <Card raised={true}>
                <CardHeader title={title} />
                    <CardContent>
                        {!sell ? null : <p><strong>Venta:</strong> ${sell}</p>}
                        {!buy ? null : <p><strong>Compra:</strong> ${buy}</p>}
                        {!avg ? null : <p><strong>Promedio:</strong> ${avg}</p>}
                    </CardContent>
            </Card>
        </div>
    );

}

export default DollarPrices;

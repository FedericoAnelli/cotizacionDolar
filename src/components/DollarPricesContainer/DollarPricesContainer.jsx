import DollarPrices from "../DollarPrices/DollarPrices";
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import PaidIcon from '@mui/icons-material/Paid';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
        <div>
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
                {dollarBlue.map((dollar) => (
                    <DollarPrices title={dollar.casa.nombre} icon={<PaidIcon />} buy={dollar.casa.compra} sell={dollar.casa.venta} variation={dollar.casa.variacion} />
            ))}
        </Carousel>
        </div>
    );
}

export default DollarPricesContainer;
import React, { useEffect, useMemo, useState } from "react";
function Crypto() {
  const [exchange1data, setexchange1data] = useState([]);
  const [exchange2data, setexchange2data] = useState([]);
  const [bankdata, setbankdata] = useState([]);

  useEffect(() => {
    setexchange1data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setexchange2data({
      returns: 200,
    });
  }, []);

  useEffect(() => {

    setTimeout(() => {
      setbankdata({
        income: 500,
      });

      
 }, 5000);
    }, []);

 

  const cryptoreturns = useMemo(() => {
    console.log("hii there before running the function");

    return exchange1data.returns + exchange2data.returns;
  }, [exchange1data, exchange2data]);

  const incometaxt = (cryptoreturns + bankdata.income) * 0.3;

  return (
    <div>
      <p>the returns after incometax is {incometaxt}</p>
    </div>
  );
}

export default Crypto;

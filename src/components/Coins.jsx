import React, { useEffect } from 'react'
import axios from "axios";
import { server } from "../index";
import { useState } from 'react';
import {Button, Container,Heading,HStack,Image,Text, VStack} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState(false);
  const [page,setPage] =useState(1);
  const [currency, setCurrency] =useState("inr");
  
// to make curruncy symbol with if and else statement
  const currencySymbol=
  currency==="inr"?"₹":currency==="usd"?"$":"€";
// 

// change page functionality
const  changePage =(page)=>{
  setPage(page);
  setLoading(true);
}

// pagination with the help of the array
const btns=new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error)
  return <ErrorComponent message={"Error While Fetching coins"} />;

return (
  <Container maxW={"container.xl"}>
    {loading ? (
      <Loader />
    ) : (
      <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinCard
            id={i.id}
              key={i.id}
              name={i.name}
              img={i.image}
              price={i.current_price}
              symbol={i.symbol}
              currencySymbol={currencySymbol}
            />
          ))}
        </HStack>
        <HStack w={"full"} overflow={"auto"} p={"8"}>
        {
        btns.map((item,index)=>(
            <Button bgColor={"blackAlpha.900"} color={"white"} onClick={()=>changePage(index+1)}>{index+1}</Button>
        ))}
        </HStack>
      </>
    )}
  </Container>
);
};



export default Coins;
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../Assets/btc.png"


const Home = () => {
  return (
    <Box bgColor={"blackAlpha.800"} w={"full"} h={"85vh"}>
     
     <Image
          w={"full"}  h={"full"} objectFit={"contain"} src={btcSrc} filter={"grayscale(1)"}/>
 <Text fontSize={"6xl"} textAlign={"left"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"} > Crypto Moniter
      </Text>
      <Text fontSize={"6xl"} textAlign={"right"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"} > Check out
      </Text>
    </Box>
  );
};

export default Home;

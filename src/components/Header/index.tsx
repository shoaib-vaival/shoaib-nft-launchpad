import { ReactNode } from "react";
import { useWeb3Context } from "../../context/Web3Provider";
import {Button} from '@chakra-ui/react'


export default function withAction() {
  const {account, connect, disconnect} = useWeb3Context()
  return (
    <>
    <Button variant="primary" size="xs">Button</Button>
    <Button variant="primary" size="sm">Button</Button>
    <Button variant="primary" size="md">Button</Button>
    <Button variantType="outline" variant="primary" size="lg">Button</Button>
    {/* <h1>{account}</h1> */}
       {/* {!account?  
              <Button
              variant="primary"
              onClick={()=>connect()}
              >Connect Wallet</Button>
              :
               <button 
              onClick={()=>disconnect()}
              >Disconnect Wallet</button>
              } */}
    
    </>
  );
}

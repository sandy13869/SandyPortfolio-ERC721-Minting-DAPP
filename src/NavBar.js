import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media/ic1.png";
import Twitter from "./assets/social-media/ic2.png";
import Email from "./assets/social-media/ic3.png";

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
            <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media Icons */}
            <Flex justify="space-around" width="40%" padding="0 75px">
             <Link href="https://www.facebook.com" target="_blank">
                <Image src={Facebook} boxSize="40px" margin="0 15px" />
             </Link>
             <Link href="https://www.twitter.com" target="_blank">
                <Image src={Twitter} boxSize="40px" margin="0 15px" />
             </Link>
             <Link href="https://www.instagram.com" target="_blank">
                <Image src={Email} boxSize="40px" margin="0 15px" />
             </Link>
            </Flex>

            {/* Right Side - Sections to connect */}
            <Flex
                justify="spac-around"
                align="center"
                width="40%"
                padding= "30px 30px 30px 30px"
            >
                <Box margin="0 15px"> <Link href="https://www.instagram.com" target="_blank">About</Link></Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
                <Spacer />

                {/* Connect */}

                {isConnected ? (
                     <Box margin="0 15px">Connected</Box>
                ) : (
                    <Button 
                        backgroundColor="#D65170"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0f0f0f"
                        color="#ffffff"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >Connect
                    </Button>
                )}

            </Flex>           
        </Flex>
    );
};

export default NavBar;
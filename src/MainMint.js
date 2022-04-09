import { useState } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
// import { ethers, BigNumber } from "ethers";
import samPunk from './SamPunk.json';

const samPunkAddress = "0x02E254612B6d5057Ba7CE041517E5f55B61A1b91";
const ethers = require("ethers");
const BigNumber = require("ethers");
const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Constract(
                samPunkAddress,
                samPunk.abi,
                signer
            );

            try {
                const response = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response);

            }catch(err) {
                console.log("error: ", err)
            };
        };
    };

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="45px" textShadow="0 5px #000003">Sandy Minting</Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"                    
                    >It's 2022 New Year Bro! Mint NFTs
                    </Text>
                </div>

        {isConnected ? (
            <div>
                <Flex justify="center" align="center">
                <Button 
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0f0f0f"
                        color="#ffffff"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="10px"
                        onClick={handleDecrement}
                    >-
                    </Button>
                    <Input
                        readOnly
                        fontFamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number"
                        value={mintAmount}
                    >
                    </Input>
                    <Button 
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0f0f0f"
                        color="#ffffff"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="10px"
                        onClick={handleIncrement}
                    >+
                    </Button>
                </Flex>
                <Button 
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0f0f0f"
                        color="#ffffff"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="10px"
                        onClick={handleMint}
                    >MINT NOW
                    </Button>
            </div>
        ) : (
            <Text
                marginTop="70px"
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 3px #000003"
                color="#D6517D"
            >You must be connected to Mint...

            </Text>
        )}
        </Box>
        </Flex>
    );
};


export default MainMint;

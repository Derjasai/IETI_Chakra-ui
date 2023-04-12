import { Button, ButtonGroup, Stack,Box, Flex, Heading } from '@chakra-ui/react';
import miImagen from './assets/atardecerBicicleta.jpg';

function Header(){
    return(
        <Flex  height="100vh" alignItems = "stretch" justifyContent="center" align="center" >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                flexDirection='column' 
                width={"100%"}
                py={20}
                bgImage={`url(${miImagen})`}
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
                backgroundSize="cover"
            >
                <Heading>DOMINA EL TERRENO</Heading>
                <ButtonGroup gap='4'>
                    <Button colorScheme='blackAlpha' variant='outline'>VER DETALLES</Button>
                    <Button colorScheme='teal' variant='outline'>VER VIDEO</Button>
                </ButtonGroup>
            </Box>

        </Flex>
    )
}

export default Header
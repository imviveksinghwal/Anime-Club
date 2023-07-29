import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerCloseButton,Button, useDisclosure, DrawerContent, VStack, HStack} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return(
    <>
        <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme='purple'
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        >
            <BiMenuAltLeft size={'20'}/>
        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Anime Club</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={'unstyled'} colorScheme='purple'>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={'unstyled'} colorScheme='purple'>
                            <Link to={'/anime'}>Anime</Link>
                        </Button>

                        <Button onClick={onClose} variant={'unstyled'} colorScheme='purple'>
                            <Link to={'/anime?category=free'}>Free Anime</Link>
                        </Button>

                        <Button onClick={onClose} variant={'unstyled'} colorScheme='purple'>
                            <Link to={'/upload'}>Upload Anime's</Link>
                        </Button>
                    </VStack>

                    <HStack pos={'absolute'} bottom={'10'} left={'5'}>
                        <Button onClick={onClose} colorScheme='purple'>
                            <Link to={'/login'}>Log In</Link>
                        </Button>

                        <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header;

import { Box,Button,HStack,Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

      <Stack direction={['column','row']}>

        <VStack alignItems={'stretch'} w={'full'} px={'4'}>

            <Heading size="md" textTransform={"uppercase"}>
                Contact Us For Services
            </Heading>

            <HStack
            borderBottom={'2px solid white'}>


                <Input 
                placeholder='Enter Your Email Here'
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor='none' />
                <Button
                p={'0'}
                variant={'outline'}>
                    <AiOutlineSend size={'20'}/>
                </Button>
            </HStack>

        </VStack>

        <VStack 
        w={'full'}
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}>
        <Heading textTransform={'uppercase'} textAlign={'center'}>
            ANIME CLUB
        </Heading>
        <Text>All rights recieved</Text>
        </VStack>

        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
                <a target='blank'>LinkedIN</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <a target='blank'>Instagram</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <a target='blank'>Email Address</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer

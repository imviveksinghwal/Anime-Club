import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from "../Assets/1.jpg"
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.png"
import img5 from "../Assets/5.png"

const headingOptions = {
    pos : "absolute",
    left : "50%",
    top : "50%",
    transform : "translate(-50%,-50%)",
    textTransform : "uppercase",
    p : "4",
    size : "4xl"
}

const Home = () => {
  return(
    <>
    <Box>
        <MyCarousel/>

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading 
            textTransform={"uppercase"} 
            m={"auto"} 
            py={'2'} 
            w={'fit-content'} 
            borderBottom={"2px solid"}>
            Services
            </Heading>

            <Stack 
            h={'full'}
            p={"4"}
            alignItems={"center"}
            direction={['column','row']}>
                <Image src={img5} h={['40','350']} />

                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                 Welcome to Our Anime World!
                </Heading>
                At Anime Hub, we are passionate about bringing you the best of the anime universe. Our goal is to be your one-stop destination for all things anime, providing a diverse range of services that cater to every anime enthusiast's needs. Whether you're a seasoned otaku or just stepping into the captivating world of Japanese animation, we have something special in store for you.


                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                 1. Anime Streaming:
                </Heading>
                Indulge in a vast library of anime titles available for streaming in high-definition. With our user-friendly interface, you can easily browse through the latest episodes and timeless classics. Immerse yourself in the captivating narratives, thrilling action, and heartwarming moments of your favorite anime series.


                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                2. Subtitle Options:
                </Heading>
                We understand that language should not be a barrier when it comes to enjoying anime. That's why we offer multiple subtitle options, allowing you to watch your favorite shows with subtitles in various languages. Whether you prefer English, Japanese, Spanish, or any other language, we've got you covered.


                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                 3. Dubbed Anime:
                </Heading>
                For those who prefer a more immersive experience, we provide an extensive collection of dubbed anime series. Our talented voice actors bring characters to life, ensuring you don't miss a single moment of the excitement and emotion that anime has to offer.

                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                 4. Community Forums:
                </Heading>
                Create your custom watchlists and curate your anime viewing experience. Stay organized and never lose track of the shows you want to watch next. Add, remove, and reorder titles with ease, making sure you're always up to date with the latest episodes.

                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                 5. Recommendations and Reviews:
                </Heading>
                Discover new anime that perfectly align with your preferences through our personalized recommendations. Our dedicated team of anime enthusiasts also curates insightful reviews, helping you decide which series to delve into next.

                <Heading 
                textTransform={"uppercase"} 
                m={"auto"} 
                py={'2'} 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                size={'4'}>
                 6.  Personalized Watchlists:
                </Heading>
                Create your custom watchlists and curate your anime viewing experience. Stay organized and never lose track of the shows you want to watch next. Add, remove, and reorder titles with ease, making sure you're always up to date with the latest episodes.
                </Text>
            </Stack>
        </Container>
    </Box>
    </>
  )
}

const MyCarousel = () =>(
    <Carousel 
    autoPlay
    infiniteLoop 
    interval={1500} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}>

    <Box w={'full'} h={'100vh'}>
        <Image src={img1}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Watch The Best Anime's
        </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
        <Image src={img2}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Anime is Future
        </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
        <Image src={img3}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Explore All Best Anime's Here
        </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
        <Image src={img4}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Tell Us Can We Improve
        </Heading>
    </Box>

    </Carousel>
)

export default Home;
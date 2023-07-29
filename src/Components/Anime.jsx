import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'

const Anime = () => {
  // const videosArr = ['a','b','c','d','e','f','g','h','i','j'];
  const videosArr = [
    {
      title: "Jujutsu Kaisen",
      link: "https://www.youtube.com/watch?v=zUXZNYiNwVw",
      description : "First Video"
    },
    {
      title: "One Punch Man",
      link: "https://example.com/videos/react-crash-course",
      description : "Second Video"
    },
    {
      title: "Naruto",
      link: "https://example.com/videos/python-basics",
      description : "Third Video"
    },
    {
      title: "Chainsaw Man",
      link: "https://example.com/videos/ml-fundamentals",
      description : "Fourth Video"
    },
    {
      title: "Demon Slayer",
      link: "https://example.com/videos/intro-to-data-science",
      description : "Fifth Video"
    }
  ];
  
  const [videoSrc,setVideoSrc] = useState(videosArr[0]);
  const [currentEpisodeTitle, setCurrentEpisodeTitle] = useState(videosArr[0].title);
  const [currentEpisodeDescription,setCurrentEpisodeDescription] = useState(videosArr[0].description);

  const handleEpisodeClick = (episode) => {
    setVideoSrc(episode);
    setCurrentEpisodeTitle(episode.title);
    setCurrentEpisodeDescription(episode.description)
  };
  return (
    <Stack direction={['column','row']} h={'100vh'}>
      <VStack w={'full'}>
        <video 
        controls
        controlsList='nodownload'
        src={videoSrc.link}
        style={{
          width : '100%',

        }}>

        </video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>{currentEpisodeTitle}</Heading>
          <Text>{currentEpisodeDescription}</Text>
        </VStack>
        </VStack>
        <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>

        {
          videosArr.map((item,index)=>(
            <Button variant={'unstyled'} colorScheme='purple' onClick={()=>handleEpisodeClick(item)}>
              Episode {index + 1}
            </Button>
          ))
        }
        </VStack>
    </Stack>
  )
}

export default Anime


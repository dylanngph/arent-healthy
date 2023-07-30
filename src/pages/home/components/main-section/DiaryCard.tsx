import {
  Text,
  Image,
  Box,
} from "@chakra-ui/react";


const DiaryCard = ({ image, date, category }: { image: string, date: string, category: string }) => {
    return (
      <Box w='fit-content' position='relative'>
        <Image
            src={image}
            alt=""
            boxSize={{base: '100%' , lg: "234px"}}
            aspectRatio={1}
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/234"
          />
        <Box position='absolute' bottom={0} left={0} bg='primary.300' p='7px 10px'>
          <Text color='white' fontSize={15}>
              {date} {category}
          </Text>
        </Box>
      </Box>
    );
  };

export default DiaryCard
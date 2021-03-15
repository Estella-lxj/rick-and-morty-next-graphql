import React from 'react';
import Image from 'next/image';
import { Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Characters = ({ characters }) => {
    return (
        <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
            {characters.map((item) => {
                return (
                    <div key={item.id}>
                        <Image src={item.image} width={300} height={300} />
                        <Heading as="h4" align="center" size="md">{item.name}</Heading>
                        <Text align="center">Origin: {item.origin.name}</Text>
                        <Text align="center">Location: {item.location.name}</Text>
                    </div>
                )
            })}
        </SimpleGrid>
    )
}

export default Characters;

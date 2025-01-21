import {Text, Flex} from '@mantine/core';
import {
  PlayerSkipBack, PlayerPlay
  , PlayerSkipForward, Trash, Scissors
} from 'tabler-icons-react';

export function PlayerControl() {
  return (
      <Flex className="justify-between items-center w-full h-10">
        <Text unstyled className="ml-5">
          08:32
        </Text>
        <Flex className="gap-2">
          <PlayerSkipBack size={20}/>
          <PlayerPlay size={20}/>
          <PlayerSkipForward size={20}/>
        </Flex>
        <Flex className="gap-2 mr-5">
          <Trash size={20}/>
          <Scissors size={20}/>
        </Flex>
      </Flex>
  );
}
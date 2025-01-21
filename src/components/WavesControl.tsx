import {CSSProperties, useState} from 'react';
import {useMove} from '@mantine/hooks';
import {Box, Flex, Text, UnstyledButton} from '@mantine/core';
import {ZoomIn, DeviceDesktop, Music} from 'tabler-icons-react';
import BlueWaves from "../assets/blueWaves.svg";
import PinkWaves from "../assets/pinkWaves.svg";

const ZoomButton = ({style}: { style: CSSProperties }) => {
  return (
      <UnstyledButton bg="#A6F0FC" className="rounded flex flex-row items-center justify-start gap-3" style={style}>
        <Box className="rounded ml-3" bg="#CAF6FD" bd="#21CCEE" p={3}>
          <ZoomIn
              size={16}
              style={{color: '#228be6'}}
          />
        </Box>
        <Text
            size="sm"
            c="#0C8AB2"
        >
          Zoom 2s
        </Text>
      </UnstyledButton>
  );
};


export const WavesControl = () => {
  const [value, setValue] = useState(0.2);
  const {ref} = useMove(({x}) => {
    if (x < 0.87)
      setValue(x)
  });

  return (
      <Flex className="w-full flex-col gap-2 my-4">
        <div className="mx-3 bg-[#D8E4FF] h-12 rounded flex flex-row items-center justify-start">
          <Box style={{
            boxShadow: '0px 3px 9px -3px #00000040'
          }} className="rounded ml-3" bg="#CAF6FD" bd="#0D4CE166" p={2}>
            <DeviceDesktop
                size={16}
                style={{color: '#228be6'}}
            />
          </Box>
          <BlueWaves/>
        </div>
        <div
            ref={ref}
            className="mx-3"
            style={{
              position: 'relative',
              height: '32px',
              background: '#FAFAFA',
              borderRadius: '4px',
            }}
        >
          {/* Thumb */}
          <ZoomButton
              style={{
                position: 'absolute',
                left: `calc(${value * 100}% - 8px)`,
                top: 0,
                width: 180,
                height: 32,
                boxShadow: '0px 3px 9px -3px #00000040'
              }}
          />
        </div>
        <div className="mx-3 bg-[#F670C71A] h-8 rounded flex flex-row items-center justify-start">
          <Box style={{
            boxShadow: '0px 3px 9px -3px #00000040',
            backdropFilter: 'opacity(20%)'
          }} className="rounded ml-3" bg="#FFDEF3" bd="#EE45BC" p={2}>
            <Music
                size={16}
                style={{color: '#EE45BC'}}
            />
          </Box>
          <PinkWaves/>
        </div>
      </Flex>
  );
};

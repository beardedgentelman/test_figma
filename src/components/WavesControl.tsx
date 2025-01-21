import {CSSProperties, useState} from 'react';
import {useMove} from '@mantine/hooks';
import {Badge, Flex, Text, UnstyledButton} from '@mantine/core';
import {ZoomIn, DeviceDesktop, Music} from 'tabler-icons-react';
import BlueWaves from "../assets/blueWaves.svg";
import PinkWaves from "../assets/pinkWaves.svg";

const ZoomButton = ({style}: { style: CSSProperties }) => {
  return (
      <UnstyledButton bg="#A6F0FC" className="flex flex-row items-center justify-start gap-2.5" style={style}>
        <Badge className="ml-1" radius="6px"
               style={{
                 border: '1px solid #21CCEE',
                 width: "24px",
                 minWidth: "24px",
                 height: "24px",
                 boxShadow: "0px 3px 9px -3px #00000040"
               }} bg="#CAF6FD" p={3}>
          <ZoomIn
              size={12}
              style={{color: '#228be6'}}
          />
        </Badge>
        <Text
            size="sm"
            c="#0C8AB2"
        >
          Zoom <span style={{color: "#06AED4"}}>2s</span>
        </Text>
      </UnstyledButton>
  );
};


export const WavesControl = () => {
  const [value, setValue] = useState(0.2);
  const {ref} = useMove(({x}) => {
    if (x < 0.87 && x > 0.02)
      setValue(x)
  });

  return (
      <Flex className="w-full flex-col gap-2 my-4">
        <div
            className="mx-3 bg-[#D8E4FF] h-12 rounded flex flex-row items-center justify-start relative overflow-hidden">
          <Badge className="ml-1" radius="6px"
                 style={{
                   border: '1px solid #0D4CE166',
                   minWidth: "24px",
                   height: "24px",
                   boxShadow: "0px 3px 9px -3px #00000040",
                   background: "linear-gradient(180deg, #D8E4FF 0%, #F6FFFF 100%)"
                 }} p={3}>
            <DeviceDesktop
                size={12}
                style={{color: '#228be6'}}
            />
          </Badge>
          <span className="gradient-box-blue overflow-hidden"><BlueWaves/></span>
          <span className="overflow-hidden"><BlueWaves/></span>
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
                background: "linear-gradient(180deg, #CAF6FD 0 %, #F4FDFE 100 %)",
                left: `calc(${value * 100}% - 8px)`,
                top: 0,
                width: 180,
                borderRadius: "8px",
                height: 32
              }}
          />
        </div>
        <div
            className="mx-3 bg-[#FEF0F9] h-8 rounded flex flex-row items-center justify-start relative overflow-hidden">

          <Badge className="ml-1" radius="6px"
                 style={{
                   border: '1px solid #EE45BC',
                   minWidth: "24px",
                   height: "24px",
                   boxShadow: "0px 3px 9px -3px #00000040",
                   background: "linear-gradient(180deg, #FFDEF3 0%, #FEF0F9 100%)"
                 }} p={3}>
            <Music
                size={12}
                style={{color: '#EE45BC'}}
            />
          </Badge>
          <span className="gradient-box-pink overflow-hidden"><PinkWaves/></span>
          <span className="overflow-hidden"><PinkWaves/></span>
        </div>
      </Flex>
  );
};

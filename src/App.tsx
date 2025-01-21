import "@mantine/core/styles.css";
import {
  AppShell,
  Button,
  Text,
  Image,
  MantineProvider,
  Flex,
  Avatar,
  Center,
  Divider,
  Box
} from "@mantine/core";
import {motion, AnimatePresence} from "motion/react"
import {theme} from "./theme";
import Toolbar from "./components/Toolbar";
import Video from "./assets/video.png";
import Doc from "./assets/doc.svg";
import ArrowLeft from "./assets/arrowLeft.svg";
import Side1 from "./assets/side1.svg";
import Side2 from "./assets/side2.svg";
import Side3 from "./assets/side3.svg";
import Side4 from "./assets/side4.svg";
import Side5 from "./assets/side5.svg";
import Side6 from "./assets/side6.svg";
import Side7 from "./assets/side7.svg";
import {PlayerControl} from "./components/PlayerControl.tsx";
import {Timeline} from "./components/Timeline.tsx";
import {WavesControl} from "./components/WavesControl.tsx";
import MediaUpload from "./components/MediaUpload.tsx";
import {useState} from "react";
import "./App.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened(o => !o);

  return <MantineProvider theme={theme}>
    <AppShell
        header={{
          height: 56,

        }}
        navbar={{
          breakpoint: "sm",
          width: 122,
        }}
        aside={{
          width: 48,
          breakpoint: "sm",
        }}
    >
      <AppShell.Header>
        <Flex
            className="h-full mx-4"
            gap="md"
            justify="space-between"
            align="center"
        >
          <Button h={28} px={14} fz="14px" c="#303030"
                  bg="#FFFFFF"
                  style={{boxShadow: "0px 9px 12px 0px #0000000A"}}
          >
            <Flex gap={10} align="baseline"><ArrowLeft/><span>Back</span></Flex>
          </Button>
          <Flex gap={10} align="center"><Doc/><Text fw={500}>Starter Project</Text></Flex>
          <Flex gap={10} align="center">
            <Center bd="2px solid #EFEFEF" styles={{root: {borderRadius: "10px"}}}>
              <Avatar
                  size={25}
                  m={3}
                  styles={{
                    root: {
                      backgroundColor: "#21CCEE",
                      borderRadius: "6px"
                    },
                  }}
              >
                <Text c="white" size="md" fw={500}>
                  C
                </Text>
              </Avatar>
            </Center>
            <Button className="flex gap-3" px={8} fz="14px" c="#FFFFFF" color="#2160FD">
              Export
            </Button>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="sm" bg="#FAFAFA">
        <Flex className="flex-col gap-3">
          {[Video, Video, Video].map((src, index) => (
              <div className="relative">
                <Image key={index} src={src} tabIndex={index + 1} radius="sm"
                       className="outline-[#2160FD] focus:outline outline-2 outline-offset-2"/>
                <span
                    className="absolute bg-black/30 backdrop-blur-sm rounded-2xl px-1.5 py-0.5 bottom-1 right-1 text-white"
                    style={{fontSize: "9px"}}
                >00:21</span>
                <span
                    className="absolute bg-black/30 backdrop-blur-sm rounded-full px-1.5 py-0.5 bottom-1 left-1 text-white"
                    style={{fontSize: "9px"}}
                >{index + 1}</span>
              </div>
          ))}
          <Button h={28} px={14} fz="14px" c="#303030"
                  bg="#FFFFFF"
                  style={{boxShadow: "0px 9px 12px 0px #0000000A"}}
                  className="text-2xl"
          >
            +
          </Button>
        </Flex>
      </AppShell.Navbar>

      <AppShell.Aside p={0} bg="#FAFAFA">
        <Flex className="flex-col">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <Flex onClick={toggleOpened} key={i}
                    className="m-1 py-2 bg-transparent hover:bg-[#EFEFEF] justify-center rounded">
                {i === 1 ? <Side1/> : i === 2 ? <Side2/> : i === 3 ? <Side3/> : i === 4 ? <Side4/> : i === 5 ?
                    <Side5/> : i === 6 ? <Side6/> : <Side7/>}
              </Flex>
          ))}
        </Flex>

      </AppShell.Aside>

      <AppShell.Main>
        <Flex className="overflow-hidden">
          <motion.div
              className="flex flex-col items-center"
              animate={{
                width: opened ? 'calc(100% - 300px)' : '100%',
              }}
          >
            <Toolbar/>

            <Divider className="w-full"/>

            <Box>
              <Image
                  src={Video}
                  w={830} h={465}
              />
            </Box>

            <Divider className="w-full"/>

            <PlayerControl/>

            <Divider className="w-full"/>

            <Timeline/>

            <Divider className="w-full"/>

            <WavesControl/>
          </motion.div>
          <Divider orientation="vertical"/>
          <AnimatePresence initial={false}>
            {opened && <motion.div
                initial={{width: 0}}
                animate={{width: 300}}
                exit={{width: 0}}>
                <MediaUpload onCloseClick={toggleOpened}/>
            </motion.div>}
          </AnimatePresence>
        </Flex>
      </AppShell.Main>
    </AppShell>
  </MantineProvider>;
}
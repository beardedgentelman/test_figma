import {Box, Tabs, Text, Image, SimpleGrid, Group, CloseButton, Divider, Flex} from '@mantine/core';
import {CloudUpload} from 'tabler-icons-react';

const MediaUpload = ({onCloseClick}: { onCloseClick: () => void }) => {
  return (
      <Box>
        {/* Header */}
        <Flex className="h-10 justify-between items-center mx-3">
          <Text size="md">Media</Text>
          <CloseButton onClick={onCloseClick}/>

        </Flex>
        <Divider className="w-full"/>
        {/* Upload Area */}
        <Text m={12} size="xs" c="#707070">Upload Media</Text>
        <Box
            className="m-3"
            style={(theme) => ({
              backgroundColor: theme.colors.gray[0],
              border: `2px dashed ${theme.colors.gray[3]}`,
              borderRadius: theme.radius.md,
              padding: theme.spacing.xl,
              marginBottom: theme.spacing.md,
              cursor: 'pointer'
            })}
        >
          <Group>
            <CloudUpload size={24} color="gray"/>
            <Text size="sm" c="dimmed">
              Drag and drop File
              <br/>
              or click to browse files
            </Text>
          </Group>
        </Box>

        {/* Media Tabs */}
        <Tabs defaultValue="images">
          <Tabs.List>
            <Tabs.Tab value="images">Images</Tabs.Tab>
            <Tabs.Tab value="video">Video</Tabs.Tab>
            <Tabs.Tab value="logo">Logo</Tabs.Tab>
            <Tabs.Tab value="unsplash">Unsplash</Tabs.Tab>
          </Tabs.List>

          <Box mt="md">
            <Text size="sm" c="#707070" m="sm">Media</Text>

            <SimpleGrid
                cols={2}
                spacing="md"
                verticalSpacing="md"
                m="sm"
            >
              {[
                'https://picsum.photos/400/300',
                'https://picsum.photos/401/300',
                'https://picsum.photos/402/300',
                'https://picsum.photos/403/300',
                'https://picsum.photos/404/300',
                'https://picsum.photos/405/300',
              ].map((src, index) => (
                  <Image
                      key={index}
                      src={src}
                      radius="md"
                      w={135}
                      h={65}
                      alt={`Image ${index + 1}`}
                  />
              ))}
            </SimpleGrid>
          </Box>
        </Tabs>
      </Box>
  );
};

export default MediaUpload;
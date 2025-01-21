import {Text, Flex, Box} from "@mantine/core";

export function Timeline() {
  return (
      <Flex bg="#FAFAFA" className="h-8 items-center justify-center w-full divide-x-2">
        {Array.from({length: 12}, (_, i) => (
            <Box className="w-1/12">
              <Text c="#707070" style={{fontSize: '11px'}}
                    className="text-center">{`0:${String(i * 2).padStart(2, '0')}`}</Text>
            </Box>
        ))}
      </Flex>
  );
}
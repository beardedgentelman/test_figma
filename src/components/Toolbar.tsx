import {Menu, Divider, UnstyledButton, Group} from '@mantine/core';
import ArrowDown from '../assets/arrowDown.svg'; // For dropdown icon
import Rectangle from "../assets/rectangle.svg"
import BlueCircle from "../assets/blueCircle.svg"
import Square from "../assets/square.svg"
import Blur from "../assets/blur.svg"

function Toolbar() {
  return (
      <div className="flex select-none items-center justify-center h-10">
        {/* Toolbar items */}
        <Group className="h-full">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <UnstyledButton
                  variant="subtle"
                  className="flex h-full items-center gap-2 text-gray-800"
              >
                <Rectangle/>
                Orientation
                <ArrowDown/>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Landscape</Menu.Item>
              <Menu.Item>Portrait</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Divider orientation="vertical"/>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <UnstyledButton
                  variant="subtle"
                  className="flex h-full items-center gap-2 text-gray-800"
              >
                <BlueCircle/>
                Background
                <ArrowDown/>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Solid</Menu.Item>
              <Menu.Item>Gradient</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Divider orientation="vertical"/>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <UnstyledButton
                  variant="subtle"
                  className="flex h-full items-center gap-2 text-gray-800"
              >
                <Square/>
                Opacity
                <ArrowDown/>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>50%</Menu.Item>
              <Menu.Item>75%</Menu.Item>
              <Menu.Item>100%</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Divider orientation="vertical"/>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <UnstyledButton
                  variant="subtle"
                  className="flex h-full items-center gap-2 text-gray-800"
              >
                <Blur/>
                Blur
                <ArrowDown/>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>No Blur</Menu.Item>
              <Menu.Item>Light Blur</Menu.Item>
              <Menu.Item>Heavy Blur</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
  );
}

export default Toolbar;

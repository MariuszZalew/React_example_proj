import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { parentPlatformList } from "../hooks/useGames";
import { IconType } from "react-icons/lib";
export const PlatformList = (Props: parentPlatformList) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack>
      {Props.parent_platform_list.map(({ platform }) => (
        // <Text>{platform.name}</Text>
        <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
// import { SkeletonPrev } from "./SkeletonPrev";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

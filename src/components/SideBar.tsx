'use client'

import { useState } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Image,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import GenerativeAI from './GenerativeAI'
import ObjectSegmentation from './ObjectSegmentation'
import Chatbot from './Chatbot'
import AboutUs from './AboutUs'


interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Generative AI', icon: FiCompass },
  { name: 'Object Segmentation', icon: FiHome },
  { name: 'Chatbot', icon: FiTrendingUp },
  { name: 'About Myself', icon: FiStar },
]


export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedNavItem, setSelectedNavItem] = useState('Generative AI');

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'Generative AI':
        return <GenerativeAI />;
      case 'Object Segmentation':
        return <ObjectSegmentation />;
      case 'Chatbot':
        return <Chatbot />;
      case 'About Myself':
        return <AboutUs />;
      default:
        return null;
    }
  };

  const handleNavItemClick = (itemName: string) => {
    setSelectedNavItem(itemName);
    onClose(); // Close the sidebar after a navbar item is clicked (optional)
  };

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
     {/* In SimpleSidebar component */}
    <SidebarContent onClose={onClose} handleNavItemClick={handleNavItemClick} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent handleNavItemClick={() => handleNavItemClick} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box marginLeft={350}>
        {/* Content */}
        {renderContent()}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
  handleNavItemClick: (itemName: string) => void;
}

const SidebarContent = ({ onClose, handleNavItemClick, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 80 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="16" justifyContent="space-between">
        <Image src='./logo.png'></Image>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
            key={link.name}
            icon={link.icon}
            onClick={() => handleNavItemClick(link.name)} // Change to onClick={handleNavItemClick}
        >
            {link.name}
        </NavItem>
        ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  onClick: () => void;
}
const NavItem = ({ icon, children,onClick, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        onClick={onClick}
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
        <Image src='./logo.png'></Image>
    </Flex>
  )
}
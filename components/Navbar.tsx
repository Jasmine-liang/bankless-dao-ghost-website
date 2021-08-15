import {
    Heading,
    Box,
    Flex,
    Link,
    Image,
    ListItem,
    ListIcon,
    List,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import { FaEllipsisH } from "react-icons/fa";

export default function Navbar() {
    return (
        <Box as="header" width="100%" color="white" overflowY="visible">
            <Flex className="header-wrap">
                <Box className="header-logo">
                    <Heading as="h1" margin="0" lineHeight="0">
                        <Link href="/" display="inline-block">
                            <Image src="bankless-logo.png" alt="Bankless" maxW="300px" maxH="60px" />
                        </Link>
                    </Heading>
                </Box>
                <Box className="header-nav">
                    <Flex as="nav" id="mobile-nav">
                        <Menu>
                            <MenuButton as={IconButton}
                                aria-label="site navigation menu"
                                icon={<HamburgerIcon />}
                                fontSize="32px"
                                backgroundColor="transparent"
                                sx={{
                                    _hover: { background: "transparent" },
                                    _active: { background: "transparent" }
                                }} />
                            <MenuList zIndex={1} borderRadius={0} background="var(--bg-nav)" border="none" fontSize="14px" width="200px">
                                <MenuItem justifyContent="flex-end">
                                    <Link href="/" >Home</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="/guilds" >Guilds</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="https://discord.gg/bjPz2w9Zts" >Discord</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="/mission" >Mission</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f" >Wiki</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="https://forum.bankless.community/" >Forum</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="https://snapshot.org/#/banklessvault.eth">Vote</Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="/signup">
                                        Register for Free
                                    </Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end">
                                    <Link href="/signin">
                                        Sign In
                                    </Link>
                                </MenuItem>
                                <MenuItem justifyContent="flex-end" color="var(--bg-nav)" background="var(--color-details)">
                                    Search<ListIcon as={Search2Icon} color="var(--bg-nav)" marginLeft="10px" />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Flex as="nav">
                        <List>
                            <ListItem>
                                <Link href="/">Home</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/guilds" >Guilds</Link>
                            </ListItem>
                            <ListItem >
                                <Link href="https://discord.gg/bjPz2w9Zts" >Discord</Link>
                            </ListItem>
                            <Menu>
                                <MenuButton as={IconButton} icon={<FaEllipsisH />}
                                    color="white"
                                    fontSize="32px"
                                    backgroundColor="transparent"
                                    sx={{
                                        _hover: { background: "transparent" },
                                        _active: { background: "transparent" }
                                    }} />
                                <MenuList zIndex={1} borderRadius={0} background="var(--bg-nav)" border="none" fontSize="14px" width="200px">
                                    <MenuItem as={Link} display="inline-block">
                                        <Link href="/mission" marginRight="18px">Mission</Link>
                                    </MenuItem>
                                    <MenuItem as={Link} display="inline-block">
                                        <Link href="https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f" marginRight="18px">Wiki</Link>
                                    </MenuItem>
                                    <MenuItem as={Link} display="inline-block" href="https://forum.bankless.community/" >
                                        Forum
                                    </MenuItem>
                                    <MenuItem display="inline-block">
                                        <Link href="https://snapshot.org/#/banklessvault.eth" marginRight="18px">Vote</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </List>
                        <List>
                            <ListItem className="signup global-button">
                                <Link href="/signup">Register for Free!</Link>
                            </ListItem>
                            <ListItem className="signin">
                                <Link href="/signin">Sign In</Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={Search2Icon} color="white" />
                            </ListItem>
                        </List>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
import {
    Box,
    Image,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import LogoSTAMP from '../assets/logo.png';

  const Logo = (props: any) => {
    return (
     <>
     <Box w='70%' h='50%' p={0} color='white'>
     <Image src={LogoSTAMP}></Image>
</Box>
    
     </>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

  const sendEmail = async (subject, recipient, body) => {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, recipient, body })
    });
    const data = await response.json();
    console.log(data.message);
  }
  
  
  export default function LargeWithNewsletter() {

    const [subject, setSubject] = useState('');
    const [recipient, setRecipient] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubject('Stay up to date');
      setBody('Thanks for subscribing to our newsletter!');
      
      // write emails in a file
      fetch('http://localhost:5000/write-file-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: recipient })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

      sendEmail(subject, recipient, body);
      
    };

    return (
      <>
      <Box
        bg={useColorModeValue('white.50', 'white.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
              Empowering Your Security, One Flight at a Time.
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'/about'}>About us</Link>
              <Link href={'#'}>Gallery</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Our Team</Link>
              <Link href={'#'}>Our Projects</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'/surveillance'}>Surveillance</Link>
              <Link href={'#'}>Security</Link>
              <Link href={'#'}>Tracking</Link>
              <Link href={'#'}>Setting</Link>
              <Link href={'#'}>Camera Viewing</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
                
                <IconButton
                  onClick={handleSubmit}
                  bg={useColorModeValue('blue.400', 'blue.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'blue.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

    </>
  );
};

// const SocialButton = ({
//   children,
//   label,
//   href,
// }: {
//   children: ReactNode;
//   label: string;
//   href: string;
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

// export default function LargeWithNewsletter() {
//   return (
//     <Box
//       bg={useColorModeValue('white.50', 'white.900')}
//       color={useColorModeValue('gray.700', 'gray.200')}>
//       <Container as={Stack} maxW={'6xl'} py={10}>
//         <SimpleGrid
//           templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
//           spacing={8}>
//           <Stack spacing={6}>
//             <Box>
//               <Logo color={useColorModeValue('gray.700', 'white')} />
//             </Box>
//             <Text fontSize={'sm'}>
//               Empowering Your Security, One Flight at a Time.
//             </Text>
//             <Stack direction={'row'} spacing={6}>
//               <SocialButton label={'Twitter'} href={'#'}>
//                 <FaTwitter />
//               </SocialButton>
//               <SocialButton label={'YouTube'} href={'#'}>
//                 <FaYoutube />
//               </SocialButton>
//               <SocialButton label={'Instagram'} href={'#'}>
//                 <FaInstagram />
//               </SocialButton>
//             </Stack>
//           </Stack>
//           <Stack align={'flex-start'}>
//             <ListHeader>Company</ListHeader>
//             <Link href={'/About'}>About us</Link>
//             <Link href={'#'}>Gallery</Link>
//             <Link href={'/About'}>Contact us</Link>
//             <Link href={'/About'}>Our Team</Link>
//             <Link href={'#'}>Our Projects</Link>
//           </Stack>
//           <Stack align={'flex-start'}>
//             <ListHeader>Support</ListHeader>
//             <Link href={'/Surveillance'}>Surveillance</Link>
//             <Link href={'/Security/ExistingRecord'}>Security</Link>
//             <Link href={'#'}>Tracking</Link>
//             <Link href={'#'}>Setting</Link>
//             <Link href={'#'}>Camera Viewing</Link>
//           </Stack>
//           <Stack align={'flex-start'}>
//             <ListHeader>Stay up to date</ListHeader>
//             <Stack direction={'row'}>
//               <Input
//                 placeholder={'Your email address'}
//                 bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//                 border={0}
//                 _focus={{
//                   bg: 'whiteAlpha.300',
//                 }}
//               />
//               <IconButton
//                 bg={useColorModeValue('blue.400', 'blue.800')}
//                 color={useColorModeValue('white', 'gray.800')}
//                 _hover={{
//                   bg: 'blue.600',
//                 }}
//                 aria-label="Subscribe"
//                 icon={<BiMailSend />}
//               />
//             </Stack>
//           </Stack>
//         </SimpleGrid>
//       </Container>
//     </Box>
//   );
// }
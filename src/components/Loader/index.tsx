import { Image, Box } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <>
      <Box>
        <Image src="/assets/images/spinner.svg" w="100px" />
      </Box>
    </>
  );
};

export const CustomLoader = () => {
  return (
    <>
      <Box w={'100%'} h={'100vh'} position={'fixed'} top='0' bottom='100%' bg={'#feedfc'} zIndex={'1'}>
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          height="250px"
          width="250px"
          zIndex='1'
        >
          <svg viewBox="0 0 100 100">
            <g
              fill="none"
              stroke="#6863F3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="6"
            >
              <path d="M 21 40 V 59">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values="0 21 59; 180 21 59"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 79 40 V 59">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values="0 79 59; -180 79 59"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 50 21 V 40">
                <animate
                  attributeName="d"
                  values="M 50 21 V 40; M 50 59 V 40"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 50 60 V 79">
                <animate
                  attributeName="d"
                  values="M 50 60 V 79; M 50 98 V 79"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
                <animate
                  attributeName="stroke"
                  values="rgba(104,99,243,2); rgba(104,99,243,0)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
              <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
                <animate
                  attributeName="stroke"
                  values="rgba(104,99,243,0); rgba(104,99,243,2)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0 0; 0 -19"
                dur="2s"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </Box>
      </Box>
    </>
  );
};

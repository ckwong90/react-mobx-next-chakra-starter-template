import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/core"
import Head from "next/head"
import { useRouter } from "next/router"

const customTheme = {
   ...theme,
   fonts: { ...theme.fonts, body: "'Open Sans', sans-serif", heading: "'Muli', sans-serif" }
}

const fontLink =
   "https://fonts.googleapis.com/css?family=Muli:200,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800&display=swap"

export default ({ Component }) => {
   const router = useRouter()

   return (
      <ThemeProvider theme={customTheme}>
         <CSSReset />
         <Head>
            <link href={fontLink} rel="stylesheet" />
         </Head>
         <Box bg="gray.400" w="100%" h="100vh" position="relative">
            <Component app={{ hello: "world" }} />
         </Box>
      </ThemeProvider>
   )
}

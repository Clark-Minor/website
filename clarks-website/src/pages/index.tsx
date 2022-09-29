import * as React from "react"
import type { HeadFC } from "gatsby"
import VerticalStack from "../components/HomeStack.tsx"

const styles = {
    powerslide: {
        backgroundImage: `../images/powerslide.JPG`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>

      <VerticalStack>
      </VerticalStack>

    </main>
  )
}

export default IndexPage


export const Head: HeadFC = () => <title>Home Page</title>

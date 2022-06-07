import type { NextPage } from 'next'

import Button from '../components/Button/Button'
import TextField from '../components/TextField/TextField'

const Home: NextPage = () => {
  return (
   <div>
     <p>
       This is the home page.
     </p>
     <Button label="My Button"></Button>
     <TextField label="Input text field"></TextField>
   </div>
  )
}

export default Home

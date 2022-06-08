import type { NextPage } from "next";

import Button from "../components/Button/Button";
import TextField from "../components/TextField/TextField";

const Home: NextPage = () => {
  return (
    <div>
      <p>This is the home page.</p>
      <Button label="My Button" variant="contained"></Button>
      <TextField label="My Text field" variant="filled" type="password"></TextField>
    </div>
  );
};

export default Home;

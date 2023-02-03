import GameComponent from "./components/GameComponent";
import Header from "./components/Header";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header />
      {user && <GameComponent />}
    </>
  );
}

export default App;

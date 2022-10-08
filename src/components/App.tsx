import * as React from 'react';
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = React.useState(false);
  const [userObj, setUserObj]: any = React.useState(null);

  React.useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return (
    <div>
      {init ? <AppRouter
        isLoggedIn={Boolean(userObj)}
        userObj={userObj}
      /> : "Initializing..."}
    </div>
  );
}

export default App;

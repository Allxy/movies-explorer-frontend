import { useState } from "react";
import { SessionContext } from "../../entities/Session";

export default function SessionContextProvider({ children }) {
  const [currentUser, serCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <SessionContext.Provider value={[currentUser, serCurrentUser, loading, setLoading]}>
      {children}
    </SessionContext.Provider>
  );
}

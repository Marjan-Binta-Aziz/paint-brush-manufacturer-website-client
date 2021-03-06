import { useState } from "react";

const useAdmin = (user) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useState(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/usersByEmail?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "admin") {
            setIsAdmin(true);
          }
          setLoading(false);
        });
    }
  }, [user]);

  return [isAdmin, loading];
};

export default useAdmin;

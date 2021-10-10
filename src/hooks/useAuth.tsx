import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (userId: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (response.data) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch((error) => alert("ログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  );

  return { login, loading };
};

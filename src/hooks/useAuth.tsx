import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router";
import { useMessage } from "./userMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (userId: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (response.data) {
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch((error) => showMessage({ title: "ログインできません", status: "error" }))
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );

  return { login, loading };
};

import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router";
import { useMessage } from "./userMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (userId: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (response.data) {
            // FIXME: append roles
            const isAdmin = response.data.id === 10 ? true : false;
            setLoginUser({ ...response.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch((error) => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};

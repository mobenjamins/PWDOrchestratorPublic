// import queryString from "query-string";
import qs from "qs";
import axiosInstance from "../../axios/axios";
import { setUser } from "./auth.slice";
import { setToast } from "../globals.slice";

export const loginAction = (loginData) => async (dispatch) => {
  try {
    const encodedData = qs.stringify({
      email: loginData.username,
      password: loginData.password,
    });
    console.log(encodedData);
    const { data } = await axiosInstance.post("/login", encodedData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (data.type === 1) {
      const formated = {
        token: data.data[0].r,
        ...data.data[0],
      };

      localStorage.setItem('UserSessionData', JSON.stringify(formated));
      dispatch(setUser(formated));
      dispatch(setToast({ message: data.message, type: "success" }));
      return;
    }
    dispatch(setToast({ message: data.message, type: "error" }));
  } catch (error) {
    console.log(error);
  }
};

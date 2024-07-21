import api from "@/config/api";
import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  FETCH_CHAT_BY_PROJECT_REQUEST,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_BY_PROJECT_FAILURE,
  FETCH_CHAT_MESSAGES_REQUEST,
  FETCH_CHAT_MESSAGES_SUCCESS,
  FETCH_CHAT_MESSAGES_FAILURE,
} from "./ActionType";

export const sendMessage = (messageData) => {
  return async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_REQUEST });

    try {
      const response = await api.post("/api/messages/send", messageData);

      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        message: response.data,
      });
      console.log("message sent",response.data)
    } catch (error) {
      console.log(error);
      dispatch({
        type: SEND_MESSAGE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchChatByProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });

    try {
      const response = await api.get(`/api/projects/${projectId}/chat`);

      console.log("fetch chat", response.data);
      dispatch({
        type: FETCH_CHAT_BY_PROJECT_SUCCESS,
        chat: response.data,
      });
    } catch (error) {
      console.log("error -- ", error);
      dispatch({
        type: FETCH_CHAT_BY_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchChatMessage = (chatId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST });

    try {
      const response = await api.get(`/api/messages/chat/${chatId}`);

      console.log("fetch message", response.data);
      dispatch({
        type: FETCH_CHAT_MESSAGES_SUCCESS,
        chatId,
        messages: response.data,
      });
    } catch (error) {
      console.log("error -- ", error);
      dispatch({
        type: FETCH_CHAT_MESSAGES_FAILURE,
        error: error.message,
      });
    }
  };
};

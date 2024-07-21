import * as actionType from "./ActionType";
import api from "@/config/api";

export const fetchIssues = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.FETCH_ISSUES_REQUEST
    });

    try {
      const response = await api.get(`/api/issues/project/${id}`);
      console.log("fetch issues", response.data);
      dispatch({
        type: actionType.FETCH_ISSUES_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionType.FETCH_ISSUES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchIssueById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.FETCH_ISSUES_BY_ID_REQUEST
    });

    try {
      const response = await api.get(`/api/issues/${id}`);
      console.log("fetch issues by id", response.data);
      dispatch({
        type: actionType.FETCH_ISSUES_BY_ID_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionType.FETCH_ISSUES_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssueStatus = ({ id, status }) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.UPDATE_ISSUE_STATUS_REQUEST
    });

    try {
      const response = await api.put(`/api/issues/${id}/status/${status}`);
      console.log("fetch issues status", response.data);
      dispatch({
        type: actionType.UPDATE_ISSUE_STATUS_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionType.UPDATE_ISSUE_STATUS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const assignedUserToIssue = ({ issuesId, userId }) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.ASSIGNED_ISSUE_TO_USER_REQUEST
    });

    try {
      const response = await api.put(`/api/issues/${issuesId}/assignee/${userId}`);
      console.log("assigned issue ---", response.data);
      dispatch({
        type: actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionType.ASSIGNED_ISSUE_TO_USER_FAILURE,
        error: error.message,
      });
    }
  };
};

export const createIssue = (issueData) => {
  return async (dispatch) => {
    dispatch({
      type: actionType.CREATE_ISSUE_REQUEST
    });
    try {
      const response = await api.post("/api/issues", issueData);
      dispatch({
        type: actionType.CREATE_ISSUE_SUCCESS,
        issue: response.data,
      });
      console.log("Issue created successfully", response.data);
    } catch (error) {
      dispatch({
        type: actionType.CREATE_ISSUE_FAILURE,
        error: error.message,
      });
      console.error("Issue creation failed", error.message);
    }
  };
};

export const deleteIssue = (issueId) => {
    return async (dispatch) => {
      dispatch({
        type: actionType.DELETE_ISSUE_REQUEST
      });
  
      try {
        await api.delete(`/api/issues/${issueId}`);
        dispatch({
          type: actionType.DELETE_ISSUE_SUCCESS,
          issueId,
        });
        console.log("Issue deleted successfully", issueId);
      } catch (error) {
        dispatch({
          type: actionType.DELETE_ISSUE_FAILURE,
          error: error.message,
        });
        console.error("Issue deletion failed", error.message);
      }
    };
  };

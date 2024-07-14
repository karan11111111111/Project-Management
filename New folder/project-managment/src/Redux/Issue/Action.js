
import * as actionType from "./ActionType";
import api from "@/config/api";

export const fetchIssues = (id) =>{
    return async (dsipatch)=>{
        dsipatch({
            type:actionType.FETCH_ISSUES_REQUEST
        });

        try {
            const response = await api.get(`/api/issues/project/${id}`);
            console.log("fetch issues", response.data);
            dsipatch({
                type: actionType.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            
            dsipatch({
                type: actionType.FETCH_ISSUES_FAILURE,
                error:error.message,
            });
        }
    }
}

export const fetchIssueByID = (id) =>{
    return async (dsipatch)=>{
        dsipatch({
            type:actionType.FETCH_ISSUES_BY_ID_REQUEST
        });

        try {
            const response = await api.get(`/api/issues/${id}`);
            console.log("fetch issues by id", response.data);
            dsipatch({
                type: actionType.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            
            dsipatch({
                type: actionType.FETCH_ISSUES_BY_ID_FAILURE,
                error:error.message,
            });
        }
    }
}

export const updateIssueStatus = ({id, status}) =>{
    return async (dsipatch)=>{
        dsipatch({
            type:actionType.UPDATE_ISSUE_STATUS_REQUEST
        });

        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log("fetch issues status", response.data);
            dsipatch({
                type: actionType.UPDATE_ISSUE_STATUS_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            
            dsipatch({
                type: actionType.UPDATE_ISSUE_STATUS_FAILURE,
                error:error.message,
            });
        }
    }
}

export const assignedUserToIssue = ({issuesId, userId}) =>{
    return async (dsipatch)=>{
        dsipatch({
            type:actionType.ASSIGNED_ISSUE_TO_USER_REQUEST
        });

        try {
            const response = await api.put(`/api/issues/${issuesId}/assignee/${userId}`);
            console.log("assigned issue ---", response.data);
            dsipatch({
                type: actionType.ASSIGNED_ISSUE_TO_USER_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            
            dsipatch({
                type: actionType.ASSIGNED_ISSUE_TO_USER_FAILURE,
                error:error.message,
            });
        }
    }
}
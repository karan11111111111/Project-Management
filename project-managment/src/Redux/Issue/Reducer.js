import IssueDetails from "@/pages/IssueDetails/IssueDetails";
import * as actionType from "./ActionType";

const initialState = {
    Issue: [],
    loading: false,
    error: null,
    IssueDetails:null
};


const issueReducer
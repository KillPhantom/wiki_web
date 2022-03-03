/* Services */
import SubmitCollaboratorInfoServices from "../../service/SubmitCollaboratorInfoService";
import FetchHomePageInitialDataService from "../../service/FetchHomePageInitialDataService";

export const SUBMIT_COLLABORATOR_INFO_SERVICES =
  "SUBMIT_COLLABORATOR_INFO_SERVICES" as const;

export const SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED =
  "SUBMIT_COLLABORATOR_INFO_SERVICES_FULFILLED" as const;

export const FETCH_HOME_PAGE_INITIAL_DATA =
  "FETCH_HOME_PAGE_INITIAL_DATA" as const;

export const FETCH_HOME_PAGE_INITIAL_DATA_FULFILLED =
  "FETCH_HOME_PAGE_INITIAL_DATA_FULFILLED" as const;

export const submitCollaboratorInfo = (email: string, detail: string) => ({
  type: SUBMIT_COLLABORATOR_INFO_SERVICES,
  payload: SubmitCollaboratorInfoServices(email, detail),
});

export const fetchHomePageInitialData = () => ({
  type: FETCH_HOME_PAGE_INITIAL_DATA,
  payload: FetchHomePageInitialDataService(),
});

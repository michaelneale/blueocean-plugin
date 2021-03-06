import { Enum } from '../../flow2/Enum';

/**
 * States for Bitbucket Cloud pipeline creation flow
 */
const BbCloudCreationState = new Enum({
    PENDING_LOADING_CREDS: 'pending_loading_creds',
    STEP_CREDENTIAL: 'step_credential',
    PENDING_LOADING_ORGANIZATIONS: 'pending_loading_organizations',
    STEP_CHOOSE_ORGANIZATION: 'step_choose_organization',
    PENDING_LOADING_ORGFOLDER: 'pending_loading_orgfolder',
    STEP_INVALID_ORGFOLDER: 'step_invalid_orgfolder',
    PENDING_LOADING_REPOSITORIES: 'pending_loading_repositories',
    STEP_CHOOSE_REPOSITORY: 'step_choose_repository',
    PENDING_CREATION_SAVING: 'pending_creation_saving',
    STEP_COMPLETE_SAVING_ERROR: 'step_complete_saving_error',
    PENDING_CREATION_EVENTS: 'pending_creation_events',
    STEP_COMPLETE_EVENT_ERROR: 'step_complete_event_error',
    STEP_COMPLETE_EVENT_TIMEOUT: 'step_complete_event_timeout',
    STEP_COMPLETE_MISSING_JENKINSFILE: 'step_complete_missing_jenkinsfile',
    STEP_RENAME: 'step_rename',
    STEP_COMPLETE_SUCCESS: 'step_complete_success',
    ERROR_UNKOWN: 'error_unkown',
});

export default BbCloudCreationState;

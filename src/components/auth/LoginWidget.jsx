import { useOktaAuth } from "@okta/okta-react";
import { Navigate } from "react-router-dom";
import { LoadingSpinner } from "../shared/ui/LoadingSpinner";
import OktaSignInWidget from "./OktaSigninWidget";

const LoginWidget = ({config}) => {
    console.log('here', useOktaAuth)
    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens)
    }

    const onError = (err) => {
        console.error("Could not log in... ", err)
    }

    if (!authState) {
        return <LoadingSpinner />;
    }

    return authState.isAuthenticated ? <Navigate to='/'/> : <OktaSignInWidget onSuccess={onSuccess} onError={onError} />
}

export default LoginWidget;
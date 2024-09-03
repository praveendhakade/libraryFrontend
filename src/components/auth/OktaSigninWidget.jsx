import OktaSignIn from "@okta/okta-signin-widget";
// import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

import {OktaConfig} from "./oktaConfig";
import { useEffect, useRef } from "react";

const OktaSignInWidget = ({onSuccess, onError}) => {
    const widgetRef = useRef();

    useEffect(() => {
        if (!widgetRef.current) {
            return false
        }
        const widget = new OktaSignIn(OktaConfig);
        widget.showSignInToGetTokens({
            el: widgetRef.current,

        }).then(onSuccess).catch(onError);

        return () => widget.remove();
    }, [])

    return <div className="p-5">
        <div ref={widgetRef}></div>
    </div>
}

export default OktaSignInWidget;
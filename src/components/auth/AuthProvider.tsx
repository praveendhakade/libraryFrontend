// import { Security } from "@okta/okta-react";
// import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
// import { OktaConfig } from "./oktaConfig";
// // import { useNavigate } from "react-router-dom";

// const oktaAuth = new OktaAuth(OktaConfig);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   //   const navigate = useNavigate();
//   const customAuthHandler = () => {
//     // navigate("/");
//     window.location.replace("/");
//   };

//   const restoreOrignUri = async (_oktaAuth: any, originalUri: any) => {
//     // navigate(toRelativeUrl(originalUri || "/", window.location.origin), {
//     //   replace: true,
//     // });
//     window.location.replace(
//       toRelativeUrl(originalUri || "/", window.location.origin)
//     );
//   };
//   return (
//     <Security
//       oktaAuth={oktaAuth}
//       restoreOriginalUri={restoreOrignUri}
//       onAuthRequired={customAuthHandler}
//     >
//       {children}
//     </Security>
//   );
// };

'use strict';

export const handler = async (event, context) => {
  const {response} = event.Records[0].cf;
  const {headers} = response;
  
  headers["strict-transport-security"] = [
    {key: "Strict-Transport-Security", value: "max-age=63072000; includeSubdomains; preload"}
  ];
  headers["content-security-policy"] = [
    {key: "Content-Security-Policy", value: "default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'; font-src 'self'; connect-src https://api.chucknorris.io; "}
  ];
  headers["x-content-type-options"] = [
    {key: "X-Content-Type-Options", value: "nosniff"}
  ];
  headers["x-frame-options"] = [
    {key: "X-Frame-Options", value:"DENY"}
  ];
  headers["x-xss-protection"] = [
    {key:"X-XSS-Protection", value:"1; mode=block"}
  ];
  headers["referrer-policy"] = [
    {key:"Referrer-Policy",value:"same-origin"}
  ];
  headers["server"] = [
    {key:"Server", value:"Chuck don't need no server"}
  ];
  
  return response
};

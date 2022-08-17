const serverAddress = "https://tstms.testrail.io/";
const path = "index.php?/api/v2";
export const base = `${serverAddress}${path}`;

const contentType = "application/json";
const authToken = "YXVzbXltb2c0ODVAZ21haWwuY29tOkF1c3RyYWxpYTI0JA==";
const auth = `Basic ${authToken}`;

export const header =
    {
        "Content-Type": contentType,
        "Authorization": auth,
    }
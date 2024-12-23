module.exports = {
    launch: {
        headless: false,
        //slowMo: 100,
        //dumpio: true, // Show browser console logs
        args: [
            "--proxy-server='direct://'",
            "--proxy-bypass-list=*",
            "--disable-gpu",
            // "--single-process", // Comment out this when running in head mode on Windows
            "--no-zygote",
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--start-maximized",
            "--disable-web-security",
            "--disable-features=TrackingProtection3pcd"
        ],
        // executablePath: 'google-chrome-stable',
    },
    exitOnPageError: false,
    viewport:{width: 1475, height: 687},
    browserContext: "incognito",
}



// --disable-web-security was added because of this error:
//    ERR Access to XMLHttpRequest at 'http://localhost:8082/api/userAuth/GetSecrets' from origin 'http://localhost:8083' has been blocked by CORS policy: Request header field authorization is not allowed by Access-Control-Allow-Headers in preflight response.
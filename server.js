const StaticServer = require("static-server");
const server = new StaticServer({
    rootPath: "dist/",
    port: 8080,
});
server.start(() => {
    console.log(`Server Started At Port => ${server.port}`);
});

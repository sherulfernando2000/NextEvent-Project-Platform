// module.exports = {
//     apps : [
//         {
//             name: "config-server",
//             script: "java",
//             args: "-jar ./config-server/target/Config-Server-1.0.0.jar",
//             watch: false
//         },
//         {
//             name: "service-register",
//             script: "java",
//             args: "-jar ./service-registry/target/Service-Registry-1.0.0.jar",
//             watch: false
//         },
//         {
//             name: "api-gateway",
//             script: "java",
//             args: "-jar ./api-gateway/target/Api-Gateway-1.0.0.jar",
//             watch: false
//         }
//     ]
// }


module.exports = {
  apps : [
      {
        name   : "config-server",
        script : "java -jar ./config-server/target/Config-Server-1.0.0.jar",
        log_file:  "./logs/config-server.log",
      },
      {
        name   : "api-gateway",
        script : "java -jar ./api-gateway/target/Api-Gateway-1.0.0.jar",
        log_file: "./logs/api-gateway.log",
      },
      {
        name   : "service-register",
        script : "java -jar ./service-register/target/Service-Registry-1.0.0.jar",
        log_file: "./logs/service-registry",
      }

   ]
}

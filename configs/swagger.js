import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Comercial API",
            version: "1.0.0",
            description: "API para una gestión comercial",
            contact:{
                name: "Omar Xocoy",
                email: "Omar.xocoy2007@gmail.com"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3002/comercialPF/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}
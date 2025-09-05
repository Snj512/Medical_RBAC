const { EntitySchema } = require("typeorm");


const passwordreset = new EntitySchema({
name: "PasswordResetOtp",
tableName: "password_reset_otps",
columns: {
        id: { 
            primary: true, 
            type: "int", 
            generated: true 
        },
        email: { 
            type: "varchar", 
            length: 150 
        },
        otp: { 
            type: "varchar", 
            length: 10 
        },
        expires_at: { 
            type: "timestamp" 
        },
        used: { 
            type: "boolean", 
            default: false 
        },
        created_at: { 
            type: "timestamp", 
            createDate: true 
        },
    },
});
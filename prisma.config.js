"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL"],
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21hLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaXNtYS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBdUI7QUFDdkIsMENBQTJDO2tCQUU1QixJQUFBLHFCQUFZLEVBQUM7SUFDeEIsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsbUJBQW1CO0tBQzVCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO0tBQ25DO0NBQ0osQ0FBQyJ9
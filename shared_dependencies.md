Shared Dependencies:

1. React, TypeScript, Node.js, Express: These are the main libraries and frameworks that will be used in both the front-end and back-end of the application.

2. MySQL: This is the database system that will be used for data storage in the back-end.

3. JWT: This is the authentication method that will be used in both the front-end and back-end.

4. User, Admin, Raffle: These are the main data schemas that will be used in both the front-end and back-end. They will be defined in the userModel.ts, adminModel.ts, and raffleModel.ts files respectively.

5. authService, raffleService, userService, adminService: These are the service files that will contain the main business logic for authentication, raffles, users, and admin respectively. They will be used in both the front-end and back-end.

6. userRoutes, adminRoutes, raffleRoutes: These are the route files that will handle the routing for users, admin, and raffles in the back-end.

7. userController, adminController, raffleController: These are the controller files that will handle the requests and responses for users, admin, and raffles in the back-end.

8. authMiddleware: This is the middleware that will handle the authentication in the back-end.

9. dbConfig, jwtConfig: These are the configuration files for the database and JWT respectively in the back-end.

10. UserRegistration, AdminDashboard, RaffleView, PhotoView, RemainingNumbersView: These are the main React components that will be used in the front-end.

11. index.tsx, App.tsx, index.ts, app.ts: These are the main entry points for the front-end and back-end respectively.

12. package.json, tsconfig.json: These are the configuration files for the project dependencies and TypeScript respectively in both the front-end and back-end.

13. DOM Element IDs: 'userRegistrationForm', 'adminDashboard', 'raffleView', 'photoView', 'remainingNumbersView'. These IDs will be used in the respective React components for manipulation.

14. Function Names: 'registerUser', 'createAdmin', 'viewRaffle', 'addPhoto', 'viewRemainingNumbers', 'customizeRaffleTickets'. These functions will be used in both the front-end and back-end for the respective features.
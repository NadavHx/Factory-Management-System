# Factory Management System

This is a Factory Management System that helps to manage employees, shifts, departments, and user actions within a factory setting. The application supports functionalities like operations for employees, shifts, departments, and user management.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JWT (JSON Web Token)
- **Web Service**: The project also connects to a web service for retrieving data https://jsonplaceholder.typicode.com/users
- **JSON Log**: Local JSON files are used as logs for storing system user actions

## Features

- **Employee Management**: Add, update, delete, and view employee data.
- **Shift Management**: Create, update, and assign shifts to employees.
- **Department Management**: Create and assign employees to departments, and set department managers.
- **User Actions**: Track actions performed by users with timestamps.
- **Authentication**: Secure login system for managing access to the application.


## Project Structure

- `Controllers`: Handles the HTTP requests and routes.
- `Services`: Contains business logic for processing data.
- `Repositories`: Handles data access and database queries.
- `Models`: Defines MongoDB schema for collections.

|---extracted_project
    |---client
    |       add_department.html
    |       add_employee.html
    |       department_page.html
    |       edit_department.html
    |       edit_employee.html
    |       employee_page.html
    |       login.html
    |       navigation_page.html
    |       shift_page.html
    |       styles.css
    |       user_page.html
    |---Server
    |       index.js
    |       package-lock.json
    |       package.json
        |---Config
        |       database.js
        |       secret_key.js
        |---Controllers
        |       authController.js
        |       checkTokenController.js
        |       departmentController.js
        |       employeeController.js
        |       shiftController.js
        |       userController.js
        |---data
        |       usersActionData.json
        |---Models
        |       departmentModel.js
        |       employeeModel.js
        |       shiftModel.js
        |       userModel.js
        |---Repositories
        |       departmentRepository.js
        |       employeeRepository.js
        |       shiftRepository.js
        |       userRepository.js
        |---Services
        |       departmentService.js
        |       employeeService.js
        |       shiftService.js
        |       userService.js
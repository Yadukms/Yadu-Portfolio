export const projects = [
  {
    id: 'canteen-ease',
    number: '01',
    title: 'Canteen Ease',
    category: 'Web App',
    tags: ['PHP', 'MySQL'],
    tagColor: '#1455F8',
    description:
      'A token-based food ordering system designed to streamline canteen operations and improve order management.',
    overview:
      'Canteen Ease is a web-based food ordering system built to solve the common problem of long queues and order mismanagement in college canteens. The system uses a token-based approach to allow students to pre-order food, reducing wait times and improving the overall canteen experience.',
    objective:
      'To design and develop a digital food ordering solution that replaces manual token systems, enables pre-ordering, and helps canteen staff manage orders efficiently.',
    role:
      'Designed the database schema, built the HTML/CSS/JavaScript frontend, implemented the PHP backend for order processing and token generation, integrated with MySQL for data persistence, and conducted manual testing of the ordering and token workflows.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    process:
      'The project began with identifying the pain points of the existing manual canteen system. A relational database was designed to store menu items, student orders, and token assignments. The frontend was built with plain HTML, CSS, and JavaScript, with PHP handling server-side logic for order creation, token generation, and status updates. Manual test cases were written and executed to validate the ordering workflow, token generation logic, and edge cases such as duplicate orders and empty menu states.',
    challenges:
      'Managing concurrent orders without token conflicts required careful database transaction design. Ensuring the interface remained simple enough for non-technical users while maintaining all necessary ordering functionality was a key UX challenge.',
    route: '/projects/canteen-ease',
  },
  {
    id: 'responsive-websites',
    number: '02',
    title: 'Responsive Websites',
    category: 'Frontend',
    tags: ['React', 'WordPress'],
    tagColor: '#1455F8',
    description:
      'Responsive web development, UI/UX design, website customization, and deployment experience gained across multiple client projects.',
    overview:
      'This entry represents the practical web development work carried out during internships at Ryzenforge Enterprises and Internpe. The work included building responsive websites from scratch, customizing WordPress themes, designing UI/UX prototypes in Figma, and deploying websites to production hosting environments.',
    objective:
      'To deliver responsive, cross-browser compatible websites that meet client specifications — from initial design to production deployment.',
    role:
      'Responsibilities included creating Figma prototypes, converting designs to responsive HTML/CSS/JavaScript and React frontends, managing WordPress customization and plugin configuration, and handling hosting and deployment tasks. Client and team communication was also a key part of the workflow.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'WordPress', 'Figma', 'Bootstrap'],
    process:
      'Each project typically began with gathering client requirements and creating low-fidelity wireframes in Figma before progressing to high-fidelity prototypes. The approved designs were then implemented as responsive web pages, tested across screen sizes and browsers, and deployed to the client\'s hosting environment. WordPress projects involved theme customization, plugin management, and content migration.',
    challenges:
      'Translating design prototypes accurately to code while maintaining cross-browser compatibility and mobile responsiveness across varying client requirements.',
    route: '/projects/responsive-websites',
  },
  {
    id: 'api-validation',
    number: '03',
    title: 'API Validation',
    category: 'QA',
    tags: ['Postman'],
    tagColor: '#1455F8',
    description:
      'Manual API validation and REST endpoint testing for web applications using Postman.',
    overview:
      'During the Techmindz MERN Stack internship, manual API testing was performed on the REST endpoints of the MERN stack application being developed. Postman was used to send HTTP requests, inspect responses, validate status codes, and identify discrepancies between expected and actual API behaviour.',
    objective:
      'To validate that all REST API endpoints of the application function correctly, return the appropriate HTTP status codes, and handle edge cases and error conditions gracefully.',
    role:
      'Designed and executed manual test cases for CRUD endpoints, validated JSON response structures and status codes, documented bugs and discrepancies, and collaborated with the development team to resolve issues.',
    technologies: ['Postman', 'REST APIs', 'Manual Testing', 'JSON'],
    process:
      'API endpoints were tested by constructing HTTP requests in Postman for each CRUD operation. Test cases were designed to cover happy-path flows, boundary conditions, and error scenarios such as missing required fields and invalid authentication tokens. Results were documented with the request method, endpoint, expected status code, actual status code, and pass/fail outcome.',
    testCases: [
      {
        label: 'Illustrative Example',
        method: 'POST',
        endpoint: '/api/users/register',
        objective: 'Verify successful user registration with valid credentials',
        expectedStatus: '201 Created',
        actualStatus: '201 Created',
        result: 'Pass',
      },
      {
        label: 'Illustrative Example',
        method: 'POST',
        endpoint: '/api/users/login',
        objective: 'Verify login with invalid password returns correct error',
        expectedStatus: '401 Unauthorized',
        actualStatus: '401 Unauthorized',
        result: 'Pass',
      },
      {
        label: 'Illustrative Example',
        method: 'GET',
        endpoint: '/api/items',
        objective: 'Retrieve all items — authenticated request',
        expectedStatus: '200 OK',
        actualStatus: '200 OK',
        result: 'Pass',
      },
      {
        label: 'Illustrative Example',
        method: 'GET',
        endpoint: '/api/items',
        objective: 'Retrieve all items — unauthenticated request',
        expectedStatus: '401 Unauthorized',
        actualStatus: '401 Unauthorized',
        result: 'Pass',
      },
    ],
    challenges:
      'Identifying edge cases that were not explicitly covered in the API specification required careful reasoning about how the application would behave under unexpected input conditions.',
    route: '/projects/api-validation',
  },
]

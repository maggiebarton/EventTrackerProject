# EventTrackerProject

## Overview
The SneakerStock app helps keep track of a sneaker collection. Currently, the application allows CRUD operations for Sneaker entries.

## REST API Endpoints
| HTTP Verb | URI             | Request Body | Response Body | Status |
|-----------|-----------------|--------------|---------------|---------|
| GET       | `/api/sneakers`    |              | List of sneaker collection | 200   |
| GET       | `/api/sneakers/{sneakerId}` |              | Single sneaker   | 200 or 404 |
| POST      | `/api/sneakers`    | JSON of new sneaker       | JSON of created sneaker | 201 or 400 |
| PUT       | `/api/dives/{sneakerId}` | JSON for updating sneaker | JSON of updated sneaker | 200, 404, or 400 |
| DELETE    | `/api/dives/{sneakerId` |              | | 204, 404, or 400 |

## Technologies Used
- SpringToolSuite/Spring/SpringBoot
- Hibernate/JPA
- MySQL/MySQLWorkbench
- Postman

## Lessons Learned
Repositories provide a powerful, easy way to communicate with a database by using query methods. Utilizing these query methods along with additional Service methods, I feel my Controller methods have transitioned into more readable code. For the first time in any project thus far, my Controller methods also account for different use cases and associated status codes.

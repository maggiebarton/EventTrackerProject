# EventTrackerProject

## Overview
The SneakerStock app helps keep track of a sneaker collection. Currently, the application allows CRUD operations for Sneaker entries.

From the homepage, users can view the entire shoe collection or add a new sneaker to the collection

## REST API Endpoints
| HTTP Verb | URI             | Request Body | Response Body | Status |
|-----------|-----------------|--------------|---------------|---------|
| GET       | `/api/sneakers`    |              | List of sneaker collection | 200   |
| GET       | `/api/sneakers/{sneakerId}` |              | Single sneaker   | 200 or 404 |
| POST      | `/api/sneakers`    | JSON of new sneaker       | JSON of created sneaker | 201 or 400 |
| PUT       | `/api/sneakers/{sneakerId}` | JSON for updating sneaker | JSON of updated sneaker | 200, 404, or 400 |
| DELETE    | `/api/sneakers/{sneakerId}` |              | | 204, 404, or 400 |
| GET       | `/api/brands`    |              | List of sneaker brands | 200   |
| GET       | `/api/brands/{brandId}/sneakers`    |              | List of sneakers for specific brand | 200 or 404 |
| GET       | `/api/conditions`    |              | List of sneaker conditions | 200   |

## Technologies Used
- SpringToolSuite/Spring/SpringBoot
- Hibernate/JPA
- MySQL/MySQLWorkbench
- Postman

## Lessons Learned
Repositories provide a powerful, easy way to communicate with a database by using query methods. Utilizing these query methods along with additional Service methods, I feel my Controller methods have transitioned into more readable code. For the first time in any project thus far, my Controller methods also account for different use cases and associated status codes.

Using JavaScript to dynamically create elements makes sites extremely functional with a minimalistic feel. An interesting problem I ran into was adding event listeneres to these dynamic elements: how to access selectors than don't exist yet on page load? The solution I found useful was the ```Element: closest()``` method. By attaching an event listener to the document, and setting the target to the closest match of the CSS selector, I could include the click event within the page load event without throwing an error. 
```document.addEventListener('click', function(e) {
		let target = e.target.closest("#deleteSneaker");
		if (target) {
			console.log('delete event listener working')
			let sneakerId = e.target.parentElement.previousElementSibling.firstElementChild.id;
			console.log(sneakerId);
			deleteSneaker(sneakerId);
		}

	})

import $ from "jquery";

/**
 * @returns {Promise} - Promise resolving with the user data by fetching it from (https://jsonplaceholder.typicode.com/users)
 */
export function fetchUsers() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/users",
			method: "GET",
			success: function (data) {
				resolve(data);
			},
			error: function (error) {
				reject(error);
			},
		});
	});
}

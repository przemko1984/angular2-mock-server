const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/authors', (req, res, next) => {
		// let url_parts = url.parse(req.originalUrl, true),
		// 	query = url_parts.query,
		// 	from = query.start,
		// 	to = +query.start + +query.count,
		// 	sort = query.sort,
		// 	queryStr = query.query,
		let authors = server.db.getState().authors;
		// console.log('sort', sort);
		// console.log('queryStr', queryStr);
		// if (authors.length < to) {
		// 	to = courses.length;
		// }
		// authors = courses.slice(from, to);
		
		res.json(authors);
	});
	
	return router;
};

'use strict';

module.exports = {
	index: {
		options: {
			pretty: true,
			data: {
				debug: false,
				buildTimestamp: '<%= buildTimestamp %>'
			}
		},
		files: [{
			src: ['webapp/index.jade', 'webapp/includes/**/*.jade'],
			ext: '.html',
			extDot: 'last',
			expand: true
		}]
	}
};

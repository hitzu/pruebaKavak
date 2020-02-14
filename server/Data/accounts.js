'use strict'


var Accounts = [
	{
		"account":123456789,
		"balance": 45450.00,
		"owner": 7612856727,
		"password":"123456",
		"createdAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"account":987654321,
		"balance": 45450.00,
		"owner": 7612338352,
		"password":"123456",
		"createdAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"account":455947030,
		"balance": 100.00,
		"owner": 7612123456,
		"password":"123456",
		"createdAt": "2012-04-23T18:25:43.511Z"
	},
]

var TransactionHistory = [
	{
		"fromAccount":455947030,
		"toAccount":987654321,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"fromAccount":123456789,
		"toAccount":455947030,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"fromAccount":123456789,
		"toAccount":455947030,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"fromAccount":455947030,
		"toAccount":987654321,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"fromAccount":455947030,
		"toAccount":987654321,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"fromAccount":455947030,
		"toAccount":987654321,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},
	{
		"fromAccount":455947030,
		"toAccount":987654321,
		"amount":876.88,
		"sentAt": "2012-04-23T18:25:43.511Z"
	},

]

module.exports = {Accounts,TransactionHistory}
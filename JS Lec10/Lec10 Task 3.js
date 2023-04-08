let notifications = {};

        Object.defineProperties(notifications, {
	ID : {
				writable: false,
				configurable: false,
        value: 1,
        },
	From : {
    		value:"Jhon Doe"
  			},
	Email : {
				writable: false,
				configurable: false,
    		value:"example@gmail.com"
  				},
	Message : {
    		value:"Hello,Sir How Are You"
  					},
	dateOfMessage : {
		writable: false,
		configurable: false,
    value: new Date()
  			}

        })

console.log(notifications.ID,notifications.From,notifications.Email,notifications.Message,notifications.dateOfMessage)
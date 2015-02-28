# Jobbox.io-console

This is an HTML console using the Jobbox's API to fetch data provided by them.

## Commands available

###company [id]
	Returns the company with the given id.
###offer [id] 
	Returns the job offer with the given id.
###application [id] 
	Returns the application with the given id. The application must belong to the current user.
###referral [id] 
	Returns the referral with the given id. The referral must have been received or sent by the current user.
###referral_request [id] 
	Returns the list of referral requests received by the current user.
###companies 
	Returns the list of companies.
###offers 
	Returns the list of job offers.
###user 
	Returns information of the current user.
###applications 
	Returns the list of applications made by the current user.
###referrals_sent 
	Returns the list of referrals sent by the current user.
###referrals_received 
	Returns the list of referrals received by the current user.
###referral_requests_received 
	Returns the list of referral requests received by the current user.
###referral_requests_sent 
	Returns the list of referral requests sent by the current user.
###clear 
	clear the terminal screen
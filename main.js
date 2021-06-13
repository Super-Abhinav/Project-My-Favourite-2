function Home() {
    window.open("https://super-abhinav.github.io/Project-My-Favourite-2/","_blank");
}
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<abhinav.ananddps2807@gmail.com>",
	Password : "<9431200745>",
	To : '<P-1673-16@dpspatna.com>',
	From : "<abhinav.ananddps2807@gmail.com>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
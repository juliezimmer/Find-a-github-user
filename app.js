// Instantiate a GitHub class
const github = new GitHub();

// Instantiate a UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
// searchUser.addEventListener('keyup', function(e){})
searchUser.addEventListener ('keyup', (e) => {
   // Get text input
   // .value is the text entered in the search field
   const userText = e.target.value;
   // validate the input
   // make sure there is text entered
   if(userText !== '') {
      // make HTTP GET request
      github.getUser(userText)
      .then(data => {
         if(data.profile.message === 'Not Found'){
            // show alert

         } else {
            // Show the profile
            ui.showProfile(data.profile);
         }
      })
   } else {
      // Clear profile
   }
});
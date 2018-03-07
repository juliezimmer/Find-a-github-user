class GitHub {
   constructor () {
      // from GitHub
      this.client_id = '6bd591a50688560d0aeb';
      this.client_secret = 'e5f119e8bd87c97b1f077fd362a72435b583bcfa';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profileData = await profileResponse.json();

      return {
         profile: profileData
      }
   }
}
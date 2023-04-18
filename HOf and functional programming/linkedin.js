const validateLinkedInUrl = (url) => {
    const regex = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm
    
  
    if (regex.test(url)) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  };

  validateLinkedInUrl("https://www.linkedin.com/in/jane+doe");

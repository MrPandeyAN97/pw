const validateLinkedInUrl = (url) => {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-z\d]$/i;
  
    if (regex.test(url)) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  };

  validateLinkedInUrl("https://www.linkedin.com/in/jane+doe");
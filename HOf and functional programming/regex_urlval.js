const input = "https://www.example.com";

const regex = ^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$
                  
if (regex.test(input)) {
  console.log("Input matches the URL pattern.");
} else {
  console.log("Input does not match the URL pattern.");
}

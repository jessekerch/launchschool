// Consider the following interface definition that utilizes optional properties:
// Implement a function displayUserInfo that takes a UserInfo object and returns
// a formatted string containing the user's information.
// For optional properties, display a default value
// (use "N/A" for email and "unknown" for age) if they are not provided.
function displayUserInfo(userInfo) {
    return userInfo.name + (userInfo.email || "n/a") + (userInfo.age || 'unknown');
}
console.log(displayUserInfo({ name: 'jesse' }));

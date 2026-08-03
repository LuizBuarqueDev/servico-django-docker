export class Auth {
  login(username, password) {
    return new Promise((resolve, reject) => {
      if (username === "admin" && password === "password") {
        resolve({ success: true, message: "Login successful" });
      } else {
        reject({ success: false, message: "Invalid username or password" });
      }
    });
  }
}

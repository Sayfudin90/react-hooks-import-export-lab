// src/__tests__/user.test.js
import { username, city, image } from "../data/user"; // Ensure the path is correct

console.log('username:', username);
console.log('city:', city);
console.log('image:', image);

describe("User Data Tests", () => {
  test("username is exported correctly", () => {
    expect(username).toBe("Liza");
  });

  test("city is exported correctly", () => {
    expect(city).toBe("New York");
  });

  test("image is exported correctly", () => {
    expect(image).toBe("https://i.imgur.com/mV8PQxj.gif");
  });
});

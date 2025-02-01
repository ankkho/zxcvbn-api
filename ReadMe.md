# zxcvbn-api: Password Strength Estimator API Service

**Overview:**

`zxcvbn-api` is a Dockerized API service that exposes the functionality of the [zxcvbn-ts](https://zxcvbn-ts.github.io/zxcvbn/) password strength estimator. Built with Node.js and TypeScript, this service allows developers to integrate robust password strength estimation into their applications without directly embedding the zxcvbn-ts library.

**Features:**

- **Password Strength Estimation:** Evaluates password strength based on common patterns, dictionary words, and other heuristics.
- **API Endpoint:** Provides a RESTful API endpoint to assess password strength.
- **Dockerized Service:** Simplifies deployment and scalability by containerizing the application.

**Getting Started:**

1. **Clone the Repository:**

   Begin by cloning the `zxcvbn-api` repository to your local machine:

   ```sh
   git clone git@github.com:ankkho/zxcvbn-api.git
   ```

2. **Navigate to the Project Directory:**

   Change into the project directory:

   ```sh
   cd zxcvbn-api
   ```

3. **Install Dependencies:**

   Install the necessary Node.js dependencies:

   ```sh
   npm install
   ```

4. **Build the Docker Image:**

   Build the Docker image with the tag `zxcvbn-api`:

   ```sh
   docker build -t zxcvbn-api .
   ```

5. **Run the Docker Container:**

   Start the Docker container, exposing port 3000:

   ```sh
   docker run -p 3000:3000 zxcvbn-api
   ```

   The API service will be accessible at `http://localhost:3000`.

**Usage:**

To assess the strength of a password, send a POST request to the `/password-strength` endpoint with a JSON payload containing the password:

```json
{
  "password": "your_password_here"
}
```

The API will respond with a JSON object containing the password strength score and feedback.

**Example Request:**

```sh
curl -X POST http://localhost:3000/password-strength \
  -H "Content-Type: application/json" \
  -d '{"password": "P@ssw0rd"}'
```

**Example Response:**

```json
{"calcTime":13,"password":"P@ssw0rd","guesses":17,"guessesLog10":1.2304489213782739,"sequence":[{"pattern":"dictionary","i":0,"j":7,"token":"P@ssw0rd","matchedWord":"password","rank":2,"dictionaryName":"passwords","reversed":false,"l33t":true,"subs":[{"letter":"a","substitution":"@"},{"letter":"o","substitution":"0"}],"subDisplay":"@ -> a, 0 -> o","baseGuesses":2,"uppercaseVariations":2,"l33tVariations":4,"guesses":16,"guessesLog10":1.2041199826559246}],"crackTimesSeconds":{"onlineThrottling100PerHour":612,"onlineNoThrottling10PerSecond":1.7,"offlineSlowHashing1e4PerSecond":0.0017,"offlineFastHashing1e10PerSecond":1.7e-9},"crackTimesDisplay":{"onlineThrottling100PerHour":"10 minutes","onlineNoThrottling10PerSecond":"2 seconds","offlineSlowHashing1e4PerSecond":"less than a second","offlineFastHashing1e10PerSecond":"less than a second"},"score":0,"feedback":{"warning":"This is similar to a commonly used password.","suggestions":["Add more words that are less common.","Capitalize more than the first letter.","Avoid predictable letter substitutions like '@' for 'a'."]}}
```

**Contributing:**

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

**License:**

This project is licensed under the MIT License.

**References:**

- [zxcvbn-ts GitHub Repository](https://github.com/zxcvbn-ts/zxcvbn)
- [zxcvbn-ts Documentation](https://zxcvbn-ts.github.io/zxcvbn/)

By utilizing `zxcvbn-api`, developers can seamlessly integrate advanced password strength estimation into their applications, enhancing security and user experience.

# Keyscribe Backend

## To setup locally

1. Install dependencies
```bash
cd backend
npm install
```
2. Create .env file by copying template
3. Get key files from Teams channel
4. Build backend
```bash
npm run build
```
5. Run server
```bash
npm start
```
6. Visit [https://localhost:8000](https://localhost:8000) to view the application. Don't worry when the browser warns about an insecure website. That message is shown because we use [self-signed certificates](https://www.entrust.com/resources/faq/what-is-a-self-signed-certificate) for development.

## Useful CLI Instructions
- To view live changes while developing, use this command:
```bash
npm run dev
```
- To run the test suite:
```bash
npm test
```
- To lint your code:
```bash
npm run lint
```
- To start the server in production mode:
```bash
npm run build
npm start
```
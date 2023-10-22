# Keyscribe
UF Senior Design Project Repo

## Repo Workflow
- Development occurs locally on a feature branch.
- Your feature branch can be pushed to github using:
```bash
git push --set-upstream origin feature-branch-name
```
- When your feature works, submit a pull request to merge your changes to the dev branch. These will be reviewed by the team. The dev branch has all of the most recent changes and will be used as the "staging" environment.
- Periodically, stable changes will be merged to the main branch. This will be the "production" environment.

## To Setup Backend Locally
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
6. To view live changes while developing, use this command:
```bash
npm run dev
```
7. Visit [https://localhost:8000](https://localhost:8000) to view the application. Don't worry when the browser warns about an insecure website. That message is shown because we use [self-signed certificates](https://www.entrust.com/resources/faq/what-is-a-self-signed-certificate) for development.


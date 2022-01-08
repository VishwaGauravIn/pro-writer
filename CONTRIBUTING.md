## Branch Organization
Submit all changes directly to the main branch. We don’t use separate branches for development or for upcoming releases. We do our best to keep main in good shape, with all tests passing.

Code that lands in main must be compatible with the latest stable release. It may contain additional features, but no breaking changes. We should be able to release a new minor version from the tip of main at any time.

## Where to Find Known Issues
We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

## Reporting New Issues
The best way to get your bug fixed is to provide a reduced test case. 

## Proposing a Change
It’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

## Before submitting a pull request, please make sure the following is done:
- Fork the repository and create your branch from main.
- Run npm in the repository root.
- If you’ve fixed a bug or added code, test it's responiveness on different devices.
- Format your code with prettier (A VSCode extension) or manually but your code should look formatted.
- Make sure your code lints (no eslint error, warnings are fine). 

## Contribution Prerequisites
- You have Node installed at v8.0.0+ and Yarn at v1.2.0+
- You are familiar with Git.
- You are familiar with GitHub.

## License
By contributing to React, you agree that your contributions will be licensed under its GPL-3.0 License license.


# TurboGPT.ai - An improved UI for ChatGPT
TurboGPT is an open-source ChatGPT UI project that enables users to chat with AI-powered open GPT-3 technology. TurboGPT can be used as a standalone chatbot or integrated into a larger project.

forked from [mikebpech/turbogpt.ai](https://github.com/mikebpech/turbogpt.ai), All I've done is change up the colors a little bit. I'm using Night Owl for the Dark mode, and a cool combo of Solarized Light and Sandy Beach for the Light mode.
Deployed to ~~[turbogpt.withlinda.dev](https://turbogpt.withlinda.dev)~~ (I paused the deployment because it uses a lot of RAM and deployment become expensive, 1.86 GB memory, not sure why)

![Screenshot 2023-09-19 003832](https://github.com/withLinda/turbogpt.ai/assets/82918531/456f4eae-48ff-4485-9901-b8b681114f94)

![Screenshot 2023-09-19 003738](https://github.com/withLinda/turbogpt.ai/assets/82918531/45ee963f-ffc7-4dad-8c97-257ad3241ed8)

## Installation

To install and run TurboGPT, you need to use Yarn package manager. Clone this repository and install the necessary packages by running the following command:

```bash
yarn install
```

## Usage

To use TurboGPT, simply run the following command:

```bash
yarn start
```
This will start the project in your terminal. Simply enter your API key and then use it as normal.

## Docker

TurboGPT's server can be instantiated in Docker. The server will automatically restart with Docker. 

```bash
docker-compose up -d --build
```

## Contributing

We welcome and encourage contributions to TurboGPT. To contribute to the project, please follow these steps:

1. Fork the repository.
2. Add your changes and commit them.
3. Push to your fork.
4. Create a pull request.

## License

TurboGPT is licensed under the MIT License. Feel free to use and distribute it, but please do not remove the license header. Do not claim ownership over it or claim it as your own :) 

## Support

If you have any questions or issues with TurboGPT, please open an issue on the project GitHub page.

## Credits

TurboGPT was developed by [Mike Pechousek](https://linkedin.com/in/mikepechousek). Special thanks to OpenAI for their simple API. 

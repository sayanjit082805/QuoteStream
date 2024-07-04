# QuoteStream

QuoteStream is a quote generator application built using vanilla JavaScript and styled with Tailwind CSS. It fetches quotes from the free API-Ninjas API to display inspirational quotes.



# Features

* Generates random and unique quotes.
* Instantly share any quote on X (formerly Twitter).
* Copy any quote which inspires/motivates you.
* A rather minimalist UI.


# Showcase

## Demo

![](https://raw.githubusercontent.com/sayanjit082805/QuoteStream/main/assets/demo.gif)

## Screenshots

![](https://raw.githubusercontent.com/sayanjit082805/QuoteStream/main/assets/ss_1.png)

![](https://raw.githubusercontent.com/sayanjit082805/QuoteStream/main/assets/ss_2.png)


## Prerequisites

- Node.js (v-14 or later)
- npm or yarn
- API-Ninjas API Key


## Installation and Usage

First, head over to [Api-Ninjas](https://api-ninjas.com/) and generate your own API-Key, it's free. Then, follow the steps below :

* Clone the repository.
  
```bash
git clone https://github.com/sayanjit082805/QuoteStream.git
cd QuoteStream
```

* Install dependencies with ```npm install``` (do this only if you want to modify/contribute)

* Create ```src/apikey.js``` and paste the following code : 

```
const KEY = '' // Add key here
export default KEY
```
* Now, add your generated key.

* Assuming you are using vscode, install [this](https://ritwickdey.github.io/vscode-live-server/) extension.

* Load the ```index.html``` file with the above extension. 



## Contributing

Contributions are always welcome!

- Fork the repository

- Create a new branch ```(git checkout -b feature-branch)```

- Commit your changes ```(git commit -m 'Add new feature')```

- Open a pull request



## Acknowledgements

 - The API is provided by API-Ninjas.

 - The typewriter effect was implemented from [this](https://www.youtube.com/watch?v=MiTJnYHX3iA) video by dcode.

 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



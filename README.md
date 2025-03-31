# KAPLAY Background Scroll

Easily add a smooth, customizable left-scrolling background to your KAPLAY game.

https://github.com/user-attachments/assets/512395dc-4ae2-4391-a0e8-c5a7db394323


## Installation

Install the package via npm:

```bash
npm install kaplay-bg-scroll
```

## Usage

An example of how to import and use the scrolling background in a Kaplay game:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addBgScroll } from "kaplay-bg-scroll";

kaplay({
  width: 500,
  height: 580,
  letterbox: true,
});

loadSprite("bg", "sprites/background.png", 100);

scene("game", () => {
  addBgScroll("bg", 500, 100);
});

go("game");
```

### Parameters

The <code>addBgScroll</code> takes the following parameters

| Parameter     | Type     | Default | Required | Description                        |
| ------------- | -------- | ------- | -------- | ---------------------------------- |
| `spriteName`  | `string` | N/A     | ✅ Yes   | Name from previously loaded sprite |
| `bgWidth`     | `number` | N/A     | ✅ Yes   | Width of previously loaded sprite  |
| `scrollSpeed` | `number` | N/A     | ✅ Yes   | Scroll speed of background         |

<br>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<br>

## Contact

Have questions or suggestions? Reach out via:

- GitHub Issues

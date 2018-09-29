# Example

```shell 
$ npm install gatsby-window --save
```
or
```shell
$ yarn add gatsby-window
```

###Import usage

```javascript
import { windowGatsby } from "gatsby-window" 
// ES2015 modules
const { windowGatsby } = require("gatsby-window");
```

### Use example
```javascript
import React, { Component } from "react";
import { windowGatsby as windowG } from "gatsby-window"

export default class GatsbyPage extends Component {

    componentDidMount() {
        // Using gatsby-window in only-browser methods
        const { sessionStorage } = windowG
        sessionStorage.setItem("componentDidMount", "Using session storage in Gatsby after build!");
        console.log(sessionStorage.getItem("componentDidMount"));
    };

    componentWillUnmount() {
        // Using gatsby-window in only-browser methods
        windowG.sessionStorage.setItem("componentWillUnmount", "Using session storage in Gatsby after build!");
        console.log(windowG.sessionStorage.getItem("componentWillUnmount"));
    };

    render() {
        // Using gatsby-window in other methods
        if (windowG) {
            const { sessionStorage } = windowG
            sessionStorage.setItem("key", "Using session storage in Gatsby after build!");
            console.log(sessionStorage.getItem("key"));
        }

        return (
            <h1>A</h1>
        )
    }
}
```

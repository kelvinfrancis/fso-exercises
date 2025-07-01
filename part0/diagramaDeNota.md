```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: Get https://studies.cs.helsinki.fi/exampleapp/notes
        active server
        server->>browser: HTML document
        desactive server

        browser->>server: Get https://studies.cs.helsinki.fi/exampleapp/notes/main.css
        activate server
        server-->>browser: the CSS file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "Hello", "date": "2025-7-1" }, ... ]
        deactivate server

        Note right of browser: The browser executes the callback function that renders the notes

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        server-->>browser: note added to notes
        deactivate server
```

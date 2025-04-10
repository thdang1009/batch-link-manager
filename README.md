# Product Requirements Document: Batch Link Manager Chrome Extension

**1. Introduction**

This document outlines the requirements for a Chrome extension designed to enhance the user's workflow when managing multiple URLs. The extension will provide functionality to parse lists of URLs from a specific format, open these URLs in bulk, and save currently open tabs in the same format. This extension is intended for personal use to improve productivity.

**2. Goals**

* Improve efficiency when opening and managing multiple URLs.
* Provide a convenient way to save and restore browsing sessions.
* Reduce manual effort in handling lists of URLs.

**3. Target User**

* The primary user is an individual who frequently works with lists of URLs.
* The user needs a tool to quickly open multiple links and save their current browsing session for later use.
* The user has basic technical proficiency to install and use a Chrome extension.

**4. Scope**

* **In Scope:**
    * Parsing URLs from a defined format (Format A).
    * Opening multiple URLs in new tabs.
    * Providing options to open URLs in normal or incognito mode.
    * Saving URLs of all currently open tabs to a text file in Format A.
    * A user-friendly interface for managing these functions.
* **Out of Scope:**
    * Advanced URL manipulation (e.g., editing URLs within the extension).
    * Support for URL formats other than Format A.
    * Cloud storage or synchronization of saved URLs.
    * User authentication or profiles.

**5. Functional Requirements**

**5.1. URL Parsing and Opening:**

* The extension shall allow the user to input a list of URLs in Format A (each URL on a new line) into a designated area within the extension's popup.
* The extension shall parse the input and extract individual URLs.
* The extension shall provide a button to "Open All URLs".
* The extension shall provide an option (e.g., a checkbox or a separate button) to open URLs in incognito mode.
* The extension shall open each URL in a new tab when the "Open All URLs" button is clicked.
* The extension shall handle invalid URLs gracefully (e.g., by logging them or skipping them with a notification to the user).
* The extension should provide visual feedback to the user during the URL opening process (e.g., a loading indicator or counter).

**5.2. Tab Saving:**

* The extension shall provide a button to "Save Current Tabs".
* When the "Save Current Tabs" button is clicked, the extension shall:
    * Retrieve the URLs of all currently open tabs in the current window.
    * Format the URLs into Format A (each URL on a new line).
    * Prompt the user to save the formatted list of URLs to a text file.
    * The default filename for the text file should include a timestamp.

**5.3. User Interface (UI):**

* The extension's popup UI shall be clear, concise, and easy to use.
* The UI shall include:
    * An area for inputting/displaying the list of URLs.
    * Buttons for "Open All URLs" and "Save Current Tabs".
    * An option (checkbox/button) for incognito mode.
    * Clear labels for all buttons and options.
    * Feedback messages to the user (e.g., success/error messages).

**6. Non-Functional Requirements**

* **Performance:** The extension shall parse and open URLs quickly and efficiently. Saving tabs should also be a quick operation.
* **Reliability:** The extension shall function consistently without errors. It should handle edge cases gracefully.
* **Usability:** The extension shall be easy to install, understand, and use.
* **Security:** The extension shall not request unnecessary permissions. It should handle user data (URLs) securely within the browser.
* **Compatibility:** The extension shall be compatible with the latest stable version of Chrome.

**7. Format A Definition**

* Format A is defined as a simple text format where each URL is on a separate line.
* Example:
    ```
    [https://gemini.google.com/app/f63a087ebb2f4c70?hl=vi](https://gemini.google.com/app/f63a087ebb2f4c70?hl=vi)
    [https://www.example.com/page2](https://www.example.com/page2)
    [https://www.otherexample.com/](https://www.otherexample.com/)
    ```

**8.  Future Considerations**

* (Optional) Implement the ability to sort or filter the list of URLs.
* (Optional) Add functionality to save and load URL lists within the extension (local storage).
* (Optional) Error handling for duplicate tabs.

**9.  Acceptance Criteria**

* All functional and non-functional requirements are met.
* The extension is stable and does not produce errors.
* The UI is user-friendly and intuitive.
* The extension performs efficiently.

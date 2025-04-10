document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('urlInput');
    const openUrlsButton = document.getElementById('openUrls');
    const saveTabsButton = document.getElementById('saveTabs');
    const copyTabsButton = document.getElementById('copyTabs');
    const incognitoMode = document.getElementById('incognitoMode');
    const statusDiv = document.getElementById('status');

    // Function to show status messages
    function showStatus(message, isError = false) {
        statusDiv.textContent = message;
        statusDiv.className = 'status ' + (isError ? 'error' : 'success');
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'status';
        }, 3000);
    }

    // Function to parse URLs from input
    function parseUrls(input) {
        return input.split('\n')
            .map(url => url.trim())
            .filter(url => url.length > 0);
    }

    // Function to validate URL
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    // Function to get current date in YYYY-MM-DD format
    function getCurrentDate() {
        const date = new Date();
        return date.toISOString().split('T')[0];
    }

    // Handle opening URLs
    openUrlsButton.addEventListener('click', async () => {
        const urls = parseUrls(urlInput.value);
        if (urls.length === 0) {
            showStatus('Please enter at least one URL', true);
            return;
        }

        const invalidUrls = urls.filter(url => !isValidUrl(url));
        if (invalidUrls.length > 0) {
            showStatus(`Invalid URLs found: ${invalidUrls.join(', ')}`, true);
            return;
        }

        try {
            for (const url of urls) {
                await chrome.tabs.create({
                    url: url,
                    active: false,
                    incognito: incognitoMode.checked
                });
            }
            showStatus(`Successfully opened ${urls.length} URLs`);
        } catch (error) {
            showStatus('Error opening URLs: ' + error.message, true);
        }
    });

    // Handle saving current tabs to file
    saveTabsButton.addEventListener('click', async () => {
        try {
            const tabs = await chrome.tabs.query({ currentWindow: true });
            const urls = tabs.map(tab => tab.url).join('\n');
            
            const filename = `tabs-${getCurrentDate()}.txt`;
            
            const blob = new Blob([urls], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            await chrome.downloads.download({
                url: url,
                filename: filename,
                saveAs: true
            });
            
            showStatus('Tabs saved successfully');
        } catch (error) {
            showStatus('Error saving tabs: ' + error.message, true);
        }
    });

    // Handle copying tabs to clipboard
    copyTabsButton.addEventListener('click', async () => {
        try {
            const tabs = await chrome.tabs.query({ currentWindow: true });
            const urls = tabs.map(tab => tab.url).join('\n');
            
            await navigator.clipboard.writeText(urls);
            showStatus('Tabs copied to clipboard');
        } catch (error) {
            showStatus('Error copying tabs: ' + error.message, true);
        }
    });
}); 
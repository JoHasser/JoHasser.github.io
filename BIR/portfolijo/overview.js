document.getElementById("searchInput").addEventListener("input", function () {
    var filter = this.value.toLowerCase();
    var entries = document.querySelectorAll(".entry");  // Select all track entries
    var yearHeaders = document.querySelectorAll("h1");  // Select year headers (h1 elements)

    // Loop through each entry (track or text) and apply filtering
    entries.forEach(function (entry) {
        // If the entry is marked as unsearchable, hide it immediately
        if (entry.classList.contains('unsearchable')) {
            entry.style.display = "none";  // Hide unsearchable elements
            return;  // Skip to the next entry
        }

        var text = entry.textContent.toLowerCase();  // Get the text content of the entry
        // If the entry matches the search filter, show it; otherwise, hide it
        if (text.includes(filter)) {
            entry.style.display = "";  // Show matching entries
        } else {
            entry.style.display = "none";  // Hide non-matching entries
        }
    });

    // Loop through the year headers and decide whether to show or hide them
    yearHeaders.forEach(function (header) {
        var nextSibling = header.nextElementSibling;
        var hasVisibleTrack = false;

        // Look for visible tracks under the header
        while (nextSibling && nextSibling.tagName !== 'H1') {
            if (nextSibling.classList.contains('entry') && nextSibling.style.display !== "none") {
                hasVisibleTrack = true;
                break;
            }
            nextSibling = nextSibling.nextElementSibling;
        }

        // If there's at least one visible track under this year header, show the header
        if (hasVisibleTrack) {
            header.style.display = "";  // Show year header
        } else {
            header.style.display = "none";  // Hide year header if no visible tracks
        }
    });
});
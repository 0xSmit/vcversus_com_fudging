# VCVersus.com Auto Voter

The script places bulk votes on vcversus.com

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone this repository (or create the `index.js` and `package.json` files manually).
2. Navigate to the project directory in your terminal:

   ```bash
   cd vcversus_com_fudging
   ```

3. Install the required Node.js packages (specifically `axios` for HTTP requests):

   ```bash
   npm install
   ```

## Usage

1.  **Configure the `VC_ID_TO_VOTE_FOR`:**
    Open `index.js` and modify the `VC_ID_TO_VOTE_FOR` constant to the ID of the VC you wish to vote for. You can find VC IDs by inspecting the `id` field in the API response from `https://vcversus.com/api/vcs/rankings`.

    ```javascript
    const VC_ID_TO_VOTE_FOR = 27; // Change this to your desired VC ID
    ```

2.  **Adjust `REQUEST_DELAY_MS` (Optional):**
    You can also adjust `REQUEST_DELAY_MS` in `index.js` to change the delay between each vote submission. The current value is set to `10` milliseconds.

    ```javascript
    const REQUEST_DELAY_MS = 10; // Delay in milliseconds between votes
    ```

3.  **Run the script:**

    ```bash
    node index.js
    ```

    The script will log the total number of VCs found and the status of each vote submission to your console.

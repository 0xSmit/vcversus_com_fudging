const axios = require('axios');

const VC_ID_TO_VOTE_FOR = 27;

// delay between votes to prevent rate limiting, although their api is shit and it doesn't rate limit at all
const REQUEST_DELAY_MS = 10;

async function main() {
  const { data } = await axios.get('https://vcversus.com/api/vcs/rankings');

  let allRankings = Object.values(data).flat();
  console.log(`Total VCs : ${allRankings.length}`);

  console.log(`All VCs: ${JSON.stringify(allRankings, null, 3)}.`);

  // Loop through all ranked VCs to submit votes
  for (const vc of allRankings) {
    //skip if the VC is equal to out target VC
    if (vc.id === VC_ID_TO_VOTE_FOR) continue;

    //create payload for the POST request
    const postData = {
      winnerVcId: VC_ID_TO_VOTE_FOR,
      loserVcId: vc.id,
    };

    try {
      // Send the POST request to the votes API
      const { data: voteResponse } = await axios.post('https://vcversus.com/api/votes', postData);
      console.log(`Vote submitted successfully: Winner ${VC_ID_TO_VOTE_FOR}, Loser ${vc.id}. Response:`, voteResponse);
    } catch (error) {
      // in case of error log to console
      console.error(`Error submitting vote for winner ${VC_ID_TO_VOTE_FOR} vs loser ${vc.id}:`, error.message);
    }

    // Pause execution for a short period to avoid hitting rate limits
    await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY_MS));
  }
}

main();

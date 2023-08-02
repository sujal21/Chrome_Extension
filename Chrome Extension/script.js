async function getMatchData() {
  //fetch data from api
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=e89ffcda-c95a-4f32-a79b-fb994e8012be&offset=0"
  )
    //convert data in json format
    .then((data) => data.json())

    //check if data is retrieved successfully or not
    .then((data) => {
      if (data.status != "success") return;

      //if there are no matches return empty array
      const matchList = data.data;
      if (!matchList) return [];

      //show required output by mapping or filtering
      const relevantData = matchList
        // .filter(
        //   (match) => match.series_id == "7e6e13be-a46d-472f-b73c-f4360e320539"
        // )
        .map((match) => `${match.name},${match.status}`);
      console.log(relevantData);

      //show data in html page by sending into list items
      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match}</li>`)
        .join("");
      return relevantData;
    })

    //console any errors
    .catch((error) => console.log(error));
}

//call actual function
getMatchData();

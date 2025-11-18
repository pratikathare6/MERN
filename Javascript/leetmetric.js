document.addEventListener("DOMContentLoaded", function(){


        const searchButton = document.getElementById("search-btn");
        const usernameInput = document.getElementById("user-input");
        const  statusContainer = document.querySelector(".status-container");
        const easyprogresscircle = document.querySelector(".easy-progress");
        const mediumprogresscircle = document.querySelector(".medium-progress");
        const hardprogresscircle = document.getElementById(".hard-progress");
        const easylabel = document.getElementById("easy-label");
        const mediumlabel = document.getElementById("medium-label");
        const hardlabel = document.getElementById("hard-label");
        const cardstatuscontainer = document.querySelector(".status-cards");


        function validateusername(username){


            if(username.trim()=== ""){

                alert("user name should not be empty");

                return false;
            }

            const regex = /^[a-zA-Z0-9_-]{1,15}$/;

            const isMatching = regex.test(username);

            if(!isMatching){

                alert("Invalid Username");
            }
            return isMatching;



        }

        async function fetchuserdetails(username){

               // const url = 'https://leetcode-stats-api.herokuapp.com/${username}'

                try{
                    searchButton.textContent = "Searching...";
                    searchButton.disabled = true;
                    //statsContainer.classList.add("hidden");
        
                    // const response = await fetch(url);
                    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                    // const targetUrl = 'https://leetcode.com/graphql/';
                    const targetUrl = 'https://leetcode-stats-api.herokuapp.com/';
                    
                    const myHeaders = new Headers();
                    myHeaders.append("content-type", "application/json");
        
                    const graphql = JSON.stringify({
                        query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                        variables: { "username": `${username}` }
                    })
                    const requestOptions = {
                        method: "POST",
                        headers: myHeaders,
                        body: graphql,
                        redirect: "follow"
                    };
        
                    const response = await fetch(proxyUrl+targetUrl, requestOptions);
                    if(!response.ok) {
                        throw new Error("Unable to fetch the User details");
                    }
                    const parsedData = await response.json();
                    console.log("Logging data: ", data) ;
         
               
                }

                catch(error) {
                    statusContainer.innerHTML = `<p>${error.message}</p>`
                }   
                finally {
                    searchButton.textContent = "Search";
                    searchButton.disabled = false;
                }
            }


            function updateprogress(solved, total, label , circle){

                const progressDegree = (solved/total)*100;
                circle.style.setProperty("--progress-degree", `${progressDegree}%`);
                label.textContent = `${solved}/${total}`;

            }

            function displayuserdata(data){

                    const totalQues  = parsedData.data.allQuestionsCount[0].count;
                    const totalEasyQues  = parsedData.data.allQuestionsCount[1].count;
                    const totalMediumQues  = parsedData.data.allQuestionsCount[2].count;
                    const totalHardQues  = parsedData.data.allQuestionsCount[3].count;

                    const solvedTotalQues  = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;

                    const solvedTotalEasyQues  = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
                    const solvedTotalMediumQues  = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
                    const solvedTotalHardQues  = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;



                    updateprogress(solvedTotalEasyQues ,totalEasyQues, easylabel,easyprogresscircle);
                    updateprogress(solvedTotalMediumQues ,totalEasyQues, easylabel,easyprogresscircle);
                    updateprogress(solvedTotalHardQues ,totalEasyQues, easylabel,easyprogresscircle);



            }






        searchButton.addEventListener('click',function(){

            const username = usernameInput.value;

            console.log(username);

            if(validateusername(username)){

                fetchuserdetails(username);

            }
        })



})
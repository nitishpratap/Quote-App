
      let fetchRes = fetch("https://type.fit/api/quotes");


      fetchRes.then((res) => res.json())
        .then((d) => {
          // console.log(d[0].text);
          // console.log(d[156].author);
          let max = d.length;
          let min = 0;
          
          function random(){
              return  Math.floor(Math.random() * (max - min) ) + min;
          }
          let randomNumber = random();
          // console.log(randomNumber)
          quoteCreation(randomNumber)


          function quoteCreation(randomNumber){


          let quote = d[randomNumber].text;
          let quoteParagraph = document.createElement('p');
          quoteParagraph.innerText = quote;
          let quoteInHtml = document.getElementById("quote");
          quoteInHtml.appendChild(quoteParagraph)

          let authorInHtml = document.getElementById("author");
          let author = document.createElement('p');
          
          author.innerText=d[randomNumber].author;
          if(author.innerText==null){
            author.innerText = 'Unknown'
          }
          authorInHtml.appendChild(author)

          //new Quote generate

          let button = document.getElementById("new-Quote");
          button.addEventListener('click',newQuoteGenerator);
          let twitterText = document.getElementsByClassName("twitter-share-button");
            // console.log(twitterText[0].getAttribute("href"));
            let twitterLink = "https://twitter.com/intent/tweet?text=";
            twitterLink =twitterLink+quote;
            let tweet = twitterText[0].getAttribute("href");
            tweet = twitterLink
            twitterText[0].setAttribute('href',tweet)
            // console.log(tweet)  

            
            
            let whatsapp = document.getElementById("whatsapp").getAttribute('href');
            let whatsappLink = "whatsapp://send?text="
            whatsappLink =whatsappLink+quote;
            document.getElementById("whatsapp").setAttribute('href',whatsappLink)

            // console.log(whatsapp);

          }
          function newQuoteGenerator(){
              randomNumber = random();
            //   console.log(randomNumber)
            let quote =  d[randomNumber].text;
            let author = d[randomNumber].author;
            let flag = 0;
            if(author==null){
              // console.log("null mila")
              flag =1;
            }
            let quoteInHtml = document.getElementById("quote");
            quoteInHtml.innerText = quote;
            let authorInHtml = document.getElementById("author");
            
           
            let twitterText = document.getElementsByClassName("twitter-share-button");
            // console.log(twitterText[0].getAttribute("href"));
            let twitterLink = "https://twitter.com/intent/tweet?text=";
            twitterLink =twitterLink+quote;
            let tweet = twitterText[0].getAttribute("href");
            tweet = twitterLink
            twitterText[0].setAttribute('href',tweet)
            // console.log(tweet)  



            
            let whatsapp = document.getElementById("whatsapp").getAttribute('href');
            let whatsappLink = "whatsapp://send?text="
            whatsappLink =whatsappLink+quote;
            document.getElementById("whatsapp").setAttribute('href',whatsappLink)




            if(flag ==1){
              authorInHtml.innerText = "Unknown";
              flag = 0;
            }
            else{
            authorInHtml.innerText =author
            }
            // let twitterText = document.getElementsByClassName("twitter-share-button");
            // console.log(twitterText)
            
            

          }
          
           
        });
var action = function(color){
	document.body.style.backgroundColor = color;
}

var color = "grey";
action(color);


//  css to be applied to blur the post 

// data-testid : fbfeed_story : to iterate the facebook posts
// id : hyperfeed_story_id_5bd56f71261b48c70932942 : to uniquely identify the post


// -webkit-filter: blur(5px);
// -moz-filter: blur(5px);
// -o-filter: blur(5px);
// -ms-filter: blur(5px);
// filter: blur(5px);
// background-color: #ccc;


// steps :

// iterate through all the post in the feed
// for each feed test for the following condition : 
// Offensive, liked , shared , bookmarked
// hide/blur the post if it satisfy any of this
// also save its id for offensive


// in options add option for new social media pages
// also to personalise the experience of social media
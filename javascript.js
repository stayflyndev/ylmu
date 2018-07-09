var weak = [
    "We’re not alone. Not ever. God won’t let go, though we may struggle with the lies that He’s left us fending for ourselves in hard times. His Word is filled with reminders that He fights for us still today. “Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.” Deut. 31:6", 

    "The enemy is not fighting you because you are weak. He is fighting you because you are STRONG!",

    "Remember that no problem is beyond the scope of God’s sovereign care for His children. He has promised to take care of us. Jeremiah 29:1 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.'",

    " For the Lord your God has blessed you in all the work of your hands. He knows your going through this great wilderness. lThese forty years the Lord your God has been with you. You have lacked nothing.",

    "Suffering produces endurance, and endurance produces character, and character produces hope. And we know that for those who love God all things work together hfor good, for those who are called according to his purpose."
]

var fear = [
    "God is constantly working behind the scenes in every area of our lives, even when there is no tangible evidence to support that fact. Faith is a confident assurance in a God who loves us, who knows our thoughts, and who cares about our deepest needs. God is kind and understanding toward our weaknesses, but He requires us to go forward in faith, and the Bible is clear that faith does not mature and strengthen without trials.",

    "Adversity is God's most effective tool to develop a strong faith. as we learn to obey God's Word and allow it to saturate our thoughts, we find each trial becomes a stepping stone to a stronger and deeper faith. He sustained me in the past, He'll carry me through today and He'll uphold me in the future!",

    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. Philippians 4:7.",

]

var sad = [
    "“As for God, His way is perfect” (Psalm 18:30). If God’s ways are “perfect,” then we can trust that whatever He does—and whatever He allows—is also perfect. This may not seem possible to us, but our minds are not God’s mind. No greater suffering has ever been experienced than that of Jesus, a “man of sorrows and acquainted with grief” ",

    "Sadness is part of life, and it is not condemned. We are exhorted to see the greater reality of God’s plan even in the midst of our sadness and depression. Yes, this world is fallen and often painful. It can be depressing. But God is far greater. He is at work, victoriously. ",

    "There is no way that you can be feeling sad when you are giving thanks to God.  When we are rejoicing for all that God has done, we can’t be feeling sad because these two are polar opposites of one another. ",

    " Our pain ALWAYS has a purpose. Sometimes the purpose is to prepare us for some greater trial we will face down the road. We are not able to see the big picture in the way that God sees it. We see only the present pain, the sting of the needle. God is the parent who is with us in our suffering, yet also sees the end from the beginning in ways that we cannot fathom."

]

var hope = [
    "test3",
    "kjkj",
]
var fail = [
 "test",
 "kjkj",
]


function weakness() {
    var ranNum = Math.floor(Math.random() * (weak.length));
    document.getElementById("quoteDisplay").innerHTML = weak[ranNum];
}

function fearful() {
    var ranNum = Math.floor(Math.random() * (fear.length));
    document.getElementById("quoteDisplay").innerHTML = fear[ranNum];
}

function sadness() {
    var ranNum = Math.floor(Math.random() * (sad.length));
    document.getElementById("quoteDisplay").innerHTML = sad[ranNum];
}

function failure() {
    var ranNum = Math.floor(Math.random() * (fail.length));
    document.getElementById("quoteDisplay").innerHTML = fail[ranNum];
}

function hopeful() {
    var ranNum = Math.floor(Math.random() * (hope.length));
    document.getElementById("quoteDisplay").innerHTML = hope[ranNum];
}
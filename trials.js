let trial_objects = [
    { "stimulus_1": `<p style='font-size:24px;'>
Person A and Person B are having a conversation through messaging online. Assume we do not know whether they are texting, messaging on social media, posting in a comment section, or any other details about the method or platform where their conversation takes place.<br><br>
<b>Person A:</b><br>
Hey, how was your weekend?<br><br>
<b>Person B:</b><br>
kinda boring ig, hbu?<br><br>
<b>Person A:</b><br>
Sorry to hear that, my weekend was fine. Spent some time outside, the weather was nice.<br><br>
<b>Person B:</b><br>
that's cool<br><br>
<b>Person A:</b><br>
What is your schedule like this week, are you very busy?<br><br>
<b>Person B:</b><br>
not rly, might have some plans w friends but nm<br><br>
<b>Person A:</b><br>
That sounds fun, hope you'll save some time to talk more with me.<br><br>
<b>Person B:</b><br>
ya i'll try lol<br><br>
<i>(End of conversation)</i>
</p>`},
    { "stimulus_2": `<p style='font-size:24px;'>
Person C wrote different comments in different places online. Review the following examples below, then answer some questions about them.<br>
Assume that Person C could've posted these comments anywhere, like on a social media post, youtube video, group chat room, question forum, etc. Consider the platform irrelevant)<br>
Assume that each comment Person C made online was in a different context. (for example, assume Person C made all of the following comments on separate social media posts.)<br> 
Assume each comment was typed and either sent or posted, and that none of the comments were made out loud by Person C.<br><br>
<b>First comment Person C made online:</b><br>
stop ur gorg</br><br>
<b>Second comment Person C made online:</b><br>
lol im so jealus, no one ever gave me a surprise birthday party<br><br>
<b>Third comment Person C made online:</b><br> 
girl im so cooked fr<br><br>
</p>` },
    { "stimulus_3": `<p style='font-size:24px;'>
Person D and Person E are having a conversation through messaging online. Assume we do not know whether they are texting, messaging on social media, posting in a comment section, or any other details about the method or platform where their conversation takes place.<br><br>
<b>Person D:</b><br>
Long time no see, how are you?<br><br>
<b>Person E:</b><br>
Too long! I'm doing fine but things have been very hectic. How about yourself?<br><br>
<b>Person D:</b><br>
Things could be worse, I got that promotion I've been aiming for.<br>
<b>Person E:</b><br>
That's great, have you started already?<br><br>
<b>Person D:</b><br>
 Not until March.<br><br>
<b>Person E:</b><br>
How is the family?<br><br>
<b>Person D:</b><br>
Good, everyone seems to have made it through the flu season.<br><br>
<b>Person E:</b><br>
Good to hear, same at our house.<br><br>
<i>(End of conversation)</i>
</p>` },
    { "stimulus_4": `<p style='font-size:24px;'>
Person F and Person G are having a conversation through messaging online. Assume we do not know whether they are texting, messaging on social media, posting in a comment section, or any other details about the method or platform where their conversation takes place.<br><br>  
<b>Person F:</b><br>   
Do u rly think that she's gonna quit<br><br> 
<b>Person G:</b><br> 
nah, she's just pissed rn<br><br> 
<b>Person F:</b><br> 
Idk, she sounded serious<br><br> 
<b>Person G:</b><br> 
i could be wrong, but i don't think she will tbh<br><br> 
<b>Person F:</b><br>
I'll try n talk to her later maybe<br><br> 
<b>Person G:</b><br> 
to try n help her or just figure out if she means it lol<br><br> 
<b>Person F:</b><br> 
Prolly both lol<br><br>
<i>(End of conversation)</i> 
</p>` },
    { "stimulus_5": `<p style='font-size:24px;'>
Person H and Person I are having a conversation through messaging online. Assume we do not know whether they are texting, messaging on social media, posting in a comment section, or any other details about the method or platform where their conversation takes place.<br><br> 
<b>Person H:</b><br>
Good morning! How was your night last evening, and did you have a restful sleep?<br><br>
<b>Person I:</b><br>
Haha good morning,  yes it was fine. Probably stayed up a bit too late, but oh well<br><br>
<b>Person H:</b><br>
Sure.  Hopefully you didn't go fully wild.  Doesn't seem to be part of your personality, but perhaps I have misjudged?<br><br> 
<b>Person I:</b><br>
No, I wouldn't say that exactly. But once in a while it's nice to go out and have fun<br><br>
<b>Person H:</b><br>
Sure.  I have no problem with that.  I am enjoying learning more about you.  You are a welcome distraction.<br><br>
<b>Person I:</b><br> 
Thanks haha<br><br>
<b>Person H:</b><br> 
Don't mention it.<br><br>
<i>(End of conversation)</i>
</p>` }
]
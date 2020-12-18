var storyContent = ﻿{"inkVersion":19,"root":[["\n","\n",{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"start":[["^You lay on the blue sand, staring up at the burnt orange sky, the soft hum of an engine in the background. Both suns slowly beginning their descent to usher in the darkness.","\n","^\"Ready?\" a voice says nearby. You shift slightly to see Garrun Torch, leaning against the Jeep<sup>TM</sup>, arms crossed. Older, tall, with dark brown skin and thick black hair with just hints of silver. You exchanged pleasentries earlier. You don't recall seeing him in the employee database the last time you checked. New hire?","\n","^\"No rush,\" he says and resumes staring off into the horizon.","\n","ev","str","^Head out.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Stay for a bit longer.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Ask him to join you down here.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":"driving"},"\n",{"#f":5}],"c-1":["^ ",{"->t->":"start.stay_a_bit"},{"->t->":"start.night_fall"},{"->":"driving"},"\n",{"#f":5}],"c-2":["^ ",{"->t->":"start.join_me"},{"->t->":"start.night_fall"},{"->":"driving"},"\n",{"#f":5}]}],{"stay_a_bit":[["^\"Just a few more minutes,\" you say and close your eyes. Focusing on the the warm sand beneath you. You listen to the wind and the soft melodic sound of sand shifting across the landscape.","\n","^Time passes in quiet reprieve. The heat starts to fade as the light continues to wane.","\n","^\"Seems a bit unfair,\" Garrun says. You wait for him to expound, eyes still closed. \"Sunsets are always gorgeous on Onyn. Seen it quite a few times. Not many can say they've seen anything beyond their designated vector.\"","\n","^You open your eyes and adjust to the twilight. As you begin to sit up you can feel the heat leaving your back, now exposed to the chilled air. You pull your jacket tighter around you, hugging yourself for warmth. Garrun notices and grabs a warming cube from the Jeep<sup>TM</sup>. He places the small cube next to you and joins you on the soft sand. With a soft tap on the flame symbol, the cube begins to glow bright red. You feel it instantly and begin to uncurl yourself.","\n",["ev","str","^So this isn't his first task?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask what vector he is from.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^\"You've done tasks here before?\" you ask. Garrun begins playing with the sand. Scooping up handfuls and slowly pouring it back into the earth. The hue now tinged purple by the light of the warming cube.","\n","^\"Ah, no, this is actually my first one,\" he says, \"I used to be an emotional experience writer before this.\"","\n","^\"A what?\" you ask. Garrun laughs and shakes his head.","\n","^\"Its a bit niche but its actually quiet similar to the work we're doing now,\" he says and taps the warming cube. The light brightens as the heat intensifies. You begin to take off your jacket. He continues, \"So instead of traveling and making request videos I would travel and write down my emotional experience of the moment a customer wanted captured.\"","\n",["ev","str","^Wouldn't most people prefer video over words?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^You think its a novel idea.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Why the career switch?","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^\"Really? I figured most people would prefer video over a e-letter,\" you say. Garrun shakes his head, a rue smile on his lips.","\n","^\"Video only captures the moment, but not the true feeling of it. What one would experience being there and the emotional journey such moments elicit,\" he says, his eyes distant.","\n","^\"Which would you prefer?\" he asks.","\n",["ev","str","^Video. You're a visual person.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^e-letter. The written word is timeless.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Both?","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^\"I'm a visual person, so seeing something is always better for me,\" you say.","\n","^\"I can respect that,\" Garrun says. \"But I like to think my writing is powerful enough to paint vivid pictures in peoples mind and wrap them in a cocoon of raw emotion.\" He lays back on the sand, hands resting beneath his head. You listen to the sound of flowing sand as it gives way to his weight.","\n","^\"But perhaps that's just hubris talking,\" he says.","\n",{"->":".^.^.^.^.^.^.^.g-0"},{"#f":5}],"c-1":["\n","ev",1,"/ev",{"VAR=":"suggestedReadLater","re":true},"^\"Species have been conveying complex emotions through words for eons,\" you say. Garrun sits up and meets your gaze. His sole attention on you.","\n","^\"Yes!\" he says, \"That's exactly it. A connection to something anciet, far beyond ourselves.\" His gestures are grand and sweeping now as his speech hastens. \"Just to tap into language possibly shared by beings beyond us, outside of us. I just—the awe can be overwhelming at times. Honestly if magic existed, it would be the power we have to trigger physical reactions in other species simply by arranging symbols in a meaningful manner. If more people could see that. Just the beautiful chaos of it all.\" He stops to take a breath, waiting for a response.","\n",["ev","str","^Agree.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Words are powerful, but not magical?","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",1,"/ev",{"VAR=":"sharedAwe","re":true},"^\"It is wonderous when you think about it like that,\" you say.","\n","^\"Yes it is,\" he replies ","<>","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^\"That's a fascinating way to view it, but I would be hesitant to call it magical,\" you say.","\n","^\"No worries. We all view the world how we see it,\" he says ","<>","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^and lays back down on the sand.","\n",{"->":"start.stay_a_bit.0.g-0"},{"#f":5}]}],{"#f":5}],"c-2":["\n","^\"Both? Wouldn't one enhance the other?\" you ask.","\n","^\"See, I don't think so,\" Garrun says. \"I feel they would compete with each other, or perhaps contradict?\" He shifts to face you, head resting on his outstreched arm. \"I feel overtime you would inevitably favor one over the other.\"","\n","^\"Perhaps,\" you say. Garrun shrugs and shifts to his back, hands once again resting beneath his head.","\n",{"->":".^.^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["\n","ev",1,"/ev",{"VAR=":"suggestedReadLater","re":true},"^\"I kinda like that. It's definetly unconventional,\" you say. Garrun smiles as he lays back on the sand, hands resting behind his head.","\n","^\"I'll let you read some later,\" he says.","\n","^\"Isn't that private?\" you ask.","\n","^\"Most of them yes,\" he replies as he adjusts to sink deeper into the sand. The grains making a soothing sound beneath his motion. \"But I was able to get a few to sign off making them public domain. There all up on my personal iPortal.\"","\n","^\"That's kind of them,\" you say. \"I'm honestly suprised your former company let you do that. It's rare even after bankruptcy that you would have any ownership over your work.\"","\n","^\"I was too,\" Garrun says as he sits up and begins stretching. \"Got e-letter shortly after the company went under saying they waived all rights to my work and ownership should lie solely with the creator and customer.\"","\n","^\"Yeah... I highly doubt <i>Visual Media Experiences</i> would ever do that,\" you say. Garrun laughs.","\n","^\"No, no they wouldn't,\" he says.","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}],"c-2":["\n","^\"Did you get let go, or—\" you begin to say but Garrun interjects.","\n","^\"Ah no, the company went bankrupt,\" he says as he starts building a small mound of sand. \"Seems people really do prefer video. We were running on good will and fumes for the past few years. A shame really.\"","\n","^\"And now your working for the competitor?\" you ask. Garrun lets out a snort as he tries to stifle a laugh.","\n","^\"I guess so,\" he says. \"Still think there's something, eh, more about an experience of words. Something you just can't get with video. I still do some side work for a select clientele though.\"","\n","^\"You got a side project here?\" you ask.","\n","^\"If we have time,\" he says and flops back into the sand, his arms resting beneath his head. You hear the sand moving beneath his weight and letting out a soft rushing sound as he adjusts to get comfortable.","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^\"What was your designated vector?\" you ask. Garrun stares up at the expanse.","\n","^\"Mars, vector 52, mining district,\" he says. \"You?\"","\n",["ev","str","^Mars, vector 8, farming district.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Moon 22, vetor 30, trading district.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Earth, vector 16,  research district.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",1,"/ev",{"VAR=":"fellowMartian","re":true},"^\"Mars, vector 8, farming district,\" you say. Garrun perks up, his gaze catching yours.","\n","^\"Really?\" he says, \"Always nice to travel with another Martian.\"","\n","^\"Likewise,\" you say.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^\"Moon 22, vetor 30, trading district,\" you say. Garrun shakes his head.","\n","^\"That's gotta be rough. Never could do moons. I need more variety in my landscape\" he says. You shrug.","\n","^\"You get used to it after awhile,\" you say.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^\"Earth, vector 16,  research district,\" you say. Garrun lets out a long whistle.","\n","^\"Well aren't you a lucky duck,\" he says. \"Gorgeous planet. I've vacationed there quite a bit.\"","\n","^\"It has it's charm,\" you say. Garrun rolls his eyes.","\n","^\"I guess living there it all just starts to become status quo,\" he says. You shrug.","\n","^\"I guess so,\" you say.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^You both let the conversation lull, each content passing the fading daylight in silence. You lay back down on the sand. Garrun following suite shortly after. You notice the wind has picked up a bit now as the air continues to chill. You lean over and tap the warming cube again. It brightens and the heat intensifies. You lay back down taking in the new warmth. Garrun breaks the silence first.","\n","^\"What made you take a job that keeps you far from home?\" he asks. ","<>","\n",["ev",{"CNT?":".^.^.^.c-0"},"/ev",{"->":".^.b","c":true},{"b":["\n","^\"I mean I wanted nothing to do with the red dust planet, but you grew up in the farming district. A lot nicer then the mining hell pits.\"","\n",{"->":".^.^.^.8"},null]}],["ev",{"CNT?":".^.^.^.c-1"},"/ev",{"->":".^.b","c":true},{"b":["\n","^\"While the moon isn't exactly vista capital, trading is highly lucrative. People kill to get into trading districts.\"","\n",{"->":".^.^.^.8"},null]}],["ev",{"CNT?":".^.^.^.c-2"},"/ev",{"->":".^.b","c":true},{"b":["\n","^\"Honestly, if I was born on earth I would never leave. Just something about that lush green vegetation. Truly paradise.\"","\n",{"->":".^.^.^.8"},null]}],"nop","\n","ev","str","^You've always wanted to travel the stars.","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Pay. Far more then you could make back home.","/str",{"CNT?":".^.^.c-1"},"!","/ev",{"*":".^.c-4","flg":21},"ev","str","^You love the variety.","/str","/ev",{"*":".^.c-5","flg":20},"ev","str","^Trading is lucrative but cutthroat. You prefer a slower pace.","/str",{"CNT?":".^.^.c-1"},"/ev",{"*":".^.c-6","flg":21},{"c-3":["\n","^\"Travel really. Not many jobs out there that will pay you to visit distant planets and record exciting experiences,\" you say.","\n","^\"A nice perk isn't it,\" Garrun says.","\n",{"->":".^.^.^.littleBuddy"},{"#f":5}],"c-4":["\n","^\"The pays good. Really good, and the work is fun so a win win in my book,\" you say. ","<>","\n",["ev",{"CNT?":".^.^.^.^.c-0"},"/ev",{"->":".^.b","c":true},{"b":["\n","^\"Farmings nice, but its a lot of work for barely decent pay.\"","\n","^Garrun sits up his hands gripping his thighs.","\n","^\"I have similar reason, but thats a main one,\" he says. \"Wasn't about to fade away in a mining pit for barely a living wage.\" Garrun's gaze is distant and hard, his whole body tense with memories gone by.","\n","^\"But now were here,\" you say as you sit up to face him. \"On Onyn watching a twin sunset in a blue desert.\"","\n","^He smiles and his demeanor softens.","\n","^\"Yes we are,\" he says.","\n","ev","void","/ev","->->",{"->":".^.^.^.6"},null]}],["ev",{"CNT?":".^.^.^.^.c-2"},"/ev",{"->":".^.b","c":true},{"b":["\n","^\"Although I will admit it feels weird that I'm making more sending experience videos to customers then if I was cataloging new bacteria.\"","\n","^\"Really? I think quite the opposite,\" he says. \"We allow people to see experiences they could never afford to see in person. I find that quite valuable.\"","\n",{"->":".^.^.^.6"},null]}],"nop","\n",{"->":".^.^.^.littleBuddy"},{"#f":5}],"c-5":["\n","^\"I like waking up knowing I get to experience something different each day. No two days are alike,\" you say. Garrun nods.","\n","^\"Actually, all my past jobs were like that. Never could handle any level of monotony,\" he says.","\n",{"->":".^.^.^.littleBuddy"},{"#f":5}],"c-6":["\n","^\"Even with the advantage of being born in a trading district, it's a ruthless industry defined by sleepless nights and guarded backs. I wanted no part in it,\" you say.","\n","^\"Nor would I,\" Garrun says.","\n",{"->":".^.^.^.littleBuddy"},{"#f":5}],"#f":5}],"littleBuddy":["^A small glowing reptilian creature crosses in front of you, pausing your conversation as you both watch in fascination. Its warm amber light mesmerizing. It eyes the warming cube and begins slowly approaching it. Once it realizes it's a heat source it finds a nearby spot, burrowing half of its body in the sand. Once comfortable it closes its eyes. With the novelty fading you turn your attention back to Garrun.","\n",["ev",{"CNT?":".^.^.^.c-0"},"!","/ev",{"->":".^.b","c":true},{"b":["\n","^\"What about you?\" you ask.","\n",{"->":".^.^.^.4"},null]}],[{"->":".^.b"},{"b":["\n","^\"What about you? Was your vector really that bad?\" you ask.","\n",{"->":".^.^.^.4"},null]}],"nop","\n","<>","^ Garrun pauses, contemplating your question.","\n","ev",{"CNT?":".^.^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^\"It wasn't Pluto ice caves bad, but not exactly a well off vector either,\" he says. ",{"->":".^.^.^.13"},null]}],"nop","ev",{"CNT?":".^.^.g-0.c-5"},"/ev",[{"->":".^.b","c":true},{"b":["^\"Like you, ",{"->":".^.^.^.19"},null]}],[{"->":".^.b"},{"b":["^\"",{"->":".^.^.^.19"},null]}],"nop","^I wanted variety and to not end up in the mining pits. I watched too many people lose themselves down there and I did not wish for that to be my fate","ev",{"CNT?":".^.^.c-0"},"!","/ev",[{"->":".^.b","c":true},{"b":["^,\" he replies.",{"->":".^.^.^.27"},null]}],[{"->":".^.b"},{"b":["^.\"",{"->":".^.^.^.27"},null]}],"nop","\n",{"->":".^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"#f":5,"#n":"q_set_1"}],{"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"join_me":["ev","void","/ev","->->",{"#f":1}],"night_fall":[["ev","str","^Continue.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^You look back out over the horizon. The lights completely gone now as the twin suns have sunk beneath the horizon. A bright orange moon has taken their place. The only other light sources are the glowing warming cube and the soft headlights of the still running Jeep<sup>TM</sup>. Garrun gazes at the expanse above.","\n","^\"Kinda snuck up on us,\" he says taking a quick glance at his watch.","\n","^\"What time is it?\" you ask.","\n","^\"1800 terran hours,\" Garrun replies as he gets up and heads to the Jeep<sup>TM</sup>. He begins rummaging through the packs in the back seat. \"Give or take a few hours as Onyn doesn't operate on a 24 hour cycle.\" He pulls out two silver wrapped food packages.","\n","^\"Blueberry or Blood Orange?\" he asks.","\n","ev","str","^Blueberry.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Blood Orange.","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Your not hungry.","/str","/ev",{"*":".^.c-3","flg":20},{"c-1":["\n","^\"Bluberry,\"","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-2":["\n","^\"Blood Orange,\"","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-3":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":[["ev",{"CNT?":".^.^.^.g-0.c-1"},{"CNT?":".^.^.^.g-0.c-2"},"||","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ you say and he hands you the pack, resuming his spot beside you. You eat in silence for a bit before he continues.","\n",{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{"b":["\n","^\"Thanks, but not I'm quite hungry yet,\" you say. He shrugs and opens a pack, resuming his spot beside you. You both sit in silence for a bit before he speaks again.","\n",{"->":".^.^.^.2"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"#f":1}],"driving":["end",{"#f":1}],"past_work":[["ev","str","^You've always done this.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^You worked at space burger.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^You were a mech mechanic.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",{"#f":5}],"c-1":["\n",{"#f":5}],"c-2":["\n",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"suggestedReadLater"},0,{"VAR=":"sharedAwe"},0,{"VAR=":"fellowMartian"},"/ev","end",null],"#f":1}],"listDefs":{}};
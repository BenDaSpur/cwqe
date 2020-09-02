---
author: []
categories:
- Technical
title: These are a few of my favorite bugs - 2010 Reprint
date: 2020-09-02T06:00:00Z
picture: ''

---
_NOTE:_

_This is a 'reprint' of an article I wrote for my first testing blog MANY MOONS AGO._

_I'm going to be including a few of my older posts here with some updated commentary._

_It's amazing to me how many of the below bugs are still possible to find in 2020 code.  I think programming practices and more recent technology make them far less of an issue, though.  I still smile when I think about causing some of these errors._

Orignal Post Date :  Friday,  April 15th 2010

Original Post:

In the sometimes hum drum world of TPS reports and status meetings testers take their entertainment where it comes to them.   
I present some of the bugs that make me giggle when I find them :  
  
1) Bad grammar errors - and naughty grammar errors. It's always a treat to stumble across some forgotten bit of code that pops up a poorly worded message that a developer never intended to see the light of day. Sometimes it's just some text that never got edited...sometimes it's an expletive hidden in a pop up – and sometimes it’s a fantastic combination of bad grammar and desperation in an error message letting you know that if you've managed to get yourself into this broken state " Your screwed buddy".  
  
2) Data truncation errors - this is the equivalent of shoving firecrackers in a watermelon. It's a crude sort of bug - there is nothing clever about typing a bunch of characters into a field and pressing submit - but sometimes it's just fun to watch something explode.  
  
3) The Highlander Principle of Pop up Windows aka "There can be only one." - This applies to any bug managing the parent/child relationship with pop-ups. Mostly I just like finding these errors so that I can use that title in the bugs. It separates the wheat from the chaff, if you know what I mean.  
  
  
4) "I reject your reality and substitute it with my own" (See MythBusters) - I dub any bug this when it appears to the user that the system just ignored their input and just went and did whatever the heck it wanted to . Often, fun browser caching bugs will have this effect.   
  
  
5) The spastic clicker error - Any time you can resubmit a form by clicking a button more than once. I loved it when I found this one in my banking software. After I paid my car payment...twice. Here is the problem - EVERYONE STILL DOUBLE CLICKS. It's not *just* spastics... we all do it. I know, I know... it's a web web web web world...and we should all know that only a single click is necessary for all things web. The reality is, people double click. It was bred into us in elementary school computer lab and we are all doomed and / or overly caffeinated. Even my 4 year old this morning told me that 'If it doesn't open you have to click 2 times really fast'.  
  
You HAVE to protect your apps from people abusively clicking! And you can't do that by just putting up a neat little sign that says 'please do not click more than once'.  
  
  
  
What are some of your favorite bugs?
(solution)[http://www.datagenetics.com/blog/july22012/index.html]
(more solutions)[https://www.quora.com/You-have-2-eggs-You-are-on-a-100-floor-building-You-drop-the-egg-from-a-particular-floor-It-breaks-or-survives-If-it-survives-you-can-throw-the-same-egg-from-a-higher-floor-How-many-attempts-do-you-need-to-identify-the-max-floor-at-which-the-egg-doesnt-break-when-thrown-down]

As a interview question, I used it in my interview, and no one give a better answer than "binary search", even though I give them a hint about better solution suck as "10-divided search" etc.

A few days ago, a friend of me asked me about this question, and he wants a brief and convictive answer.

I think that answer could be "balance". Just because of "balance", one could search either upon a floor or down a floor, and get a "balance" number in order to minimise the max and reduce the wastes.

The solution is like "Big O",where one should foucus on a worst case rather than a normal case or a good case.

But in fact, a better solution means its probability is higher. so, what if we add some weight on each floor, as a familiar scene in out life, the fisrt floor has 100 weight, second 99, third 98 etc. What would "balance" be used on this situation?



---
author: 
- Naser
categories: []
title: When It's Easier to Code up Your Meal Request
date: 2020-04-20T06:00:00Z
picture: ''

---
If possible, I’d like a medium Papa Murphy’s Chicken Garlic Pizza. I checked DoorDash and GrubHub and they both offer deliver it. If not available, I’d be fine with a plain cheese pizza, and finally if that’s not available, I’d be fine with eating leftovers. I’ve actually never used a food delivery service, so I’m not sure how easy it would be to set up all the deliveries, so I can pick up the food, myself, if that’s easier.

  If you’re really bored with nothing better to do, here's something I typed up on my   phone, really quick. It probably won't compile, though:

    If (!deliverService.Any() && !possibleToOrderPapaMurphys)
    {
                  Console.WriteLine(“Naser, it’s leftovers for you.”);
                  return;
    }
    if (possibleToOrderPapaMurphys)
    {
    			if(!garlicChickenAvailable)
    			{
                                Console.WriteLine(“It’s cheese pizza for you.”);
    			}
    			else
    			{
                  				Console.WriteLine(“First choice available.”);
    			}
    }
    
    if(!possibleToOrderPapaMurphys)
    {
                  Console.WriteLine(“Naser, you took too long to respond and spent too much time writing this stupid pseudo-ish code that probably doesn’t work anyways, so you can have leftovers.”);
    }
    
    if (!deliveryService.Any())
    {
                  Console.WriteLine(“Naser, the order was placed, but you’ll have to pick up your own food.”);
    }
    
    else
    {
                  Console.WriteLine(“Order has been placed.”);
                  return;  
    }
    
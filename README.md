## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
    - button and form 

-   Consider your data model.
         -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?

    -   What are the key/value pairs?

    -   What arrays might you need?
        - array of babies (names??) and array of signs
    -   What needs to live in a persistence layer?

-   Is there some state we need to initialize?
    beanie babies '' and astrosigns ''

-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
    aquiring importing/exporting the data

## html
- dropdown with options we get from data on supabase
-section to append beanie baby els to

## state
what changes?
- the array of signs from the db
- array of beanie babies from db

## events
- page load
    - see all beanie babies (requested from db)
    - dropdown is populated w/ signs (from db)
    - append beanie baby elements to their section (w/ data from db)
- click submit of sign option (in form)
    - request filtered list of bbs from db
    - displayBabies(); function (in different file???)


## user stories
what should user be able to do/see?
- see entire list of beanie babies on page load
- see list of signs in the dropdown
- choose a sign in dropdown and see list filter based on the choice



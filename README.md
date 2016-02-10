#### Project Description

##### Goal

Build a testing / comparison framework that accepts user input in a textarea, uses a JavaScript parser such as [Esprima](http://esprima.org/) or [Acorn](http://marijnhaverbeke.nl/acorn/), evaluates whether the code meets certain criteria, and displays feedback to the user to guide them.

##### Demo

A demo of this program is available at [http://lindsayelia.github.io/khan-academy-comparison-tool/](http://lindsayelia.github.io/khan-academy-comparison-tool/).

##### Criteria to test

- A whitelist of specific functionality. For example, the ability to say "This program MUST use a 'for loop' and a 'variable declaration'."
- A blacklist of specific functionality. For example, the ability to say "This program MUST NOT use a 'while loop' or an 'if statement'."
- Determine the rough structure of the program. For example, "There should be a 'for loop' and inside of it there should be an 'if statement'."

##### Considerations

**1.** _Evaluate Esprima and Acorn and provide justification for choosing one over the other._

I chose to use Esprima. Esprima has better documentation than Acorn. It has examples, videos about it, and the documentation is well structured/formatted. I found it much easier to navigate the docs compared to the Acorn docs. Esprima seems much more beginner friendly, which is better if beginners are working on this project also or might be in the future.

The Esprima documentation says it:
- has high performance
- has good test coverage
- runs on all modern web browsers

**2.** _Test that the program/framework is supported by all modern versions of Firefox, Chrome, and Safari and IE 8+ (web only). Make sure that the textarea is not blocking, or slowing down, user input in as many browsers as possible._

I checked that the testing API works in 3 browsers (Chrome v48, Firefox v43, Safari v9.0.3) with some small manual tests, and those worked well. My JS code file is relatively small, so that may be why there are no obvious issues with the speed that the displayed feedback appears when the user types, from my manual testing.

I’m not using any server side code, so the user does not have to wait for the client side & server side to communicate.

I also used [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to evaluate the page load time and usability of the application, and made changes to my code based on the suggestions shown by PageSpeed.

Lastly, I searched caniuse.com for specific types of JS I was using, jQuery v2 and textarea events. This showed that both jQuery v2 ([http://jquery.com/browser-support/](http://jquery.com/browser-support/)) and input events ([http://caniuse.com/#feat=input-event](http://caniuse.com/#feat=input-event)) are supported on all current versions of Chrome, Firefox, and Safari, and IE9+.


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




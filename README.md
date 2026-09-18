Section 1 — Command Description
What My Tool Does
My tool is a simplified, enhanced version of the Linux grep command. It searches a file for a specific word or pattern, displays all matching lines, and counts the total number of matches.
For example, I tested the program using a server.log file with 100 server records. When I searched for ERROR, the program found and displayed 23 matching lines.
How to Run It
Use the following command:  node aiwsgrep.js "ERROR" server.log
General syntax:  node aiwsgrep.js <pattern> <filename>
Commands It Combines
My tool combines ideas from grep and wc. The grep functionality searches for matching lines, while the counting functionality is similar to wc, reporting the number of matches.

Section 2 — AI-Assisted Programming
What I Asked AI
I used AI to understand what the Linux grep command does, what the -r option means, how process. argv works in Node.js, and how to create test data. I also asked AI for help understanding errors and identifying test cases and edge cases.
Where AI Helped
AI helped explain error messages such as MODULE_NOT_FOUND and identify a spelling error in readFileSync. 
Where I Had to Think Independently
I had to run the commands myself in Codio, examine the output, determine whether the results were correct, organize my files, and verify that my program worked with the test data. 
What AI Got Wrong or Missed
Initially, AI thought that some of my files were of certain names or included some code, while actually, my Codio files were different. For example, my aiwshead.js included my grep code, but my other file was called nano aiwsgrep.js.
<img width="468" height="653" alt="image" src="https://github.com/user-attachments/assets/1a1d1a63-e80f-4c85-b6d9-5791607da7ba" />

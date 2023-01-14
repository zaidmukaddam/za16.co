---
title: "The Idea behind making of the ChatGPT Killer: ScanGPT"
description: "ScanGPT is a tool that can detect if a text was written by a human or by an artificial intelligence."
date: "2023-01-14T00:00:00"
tags: ["chatbot", "gpt", "ai"]
heroImage: "/assets/words/the-making-of-scangpt/scangpt-matrix.jpg"
---

## Introduction

Lately I've been very surprised by OpenAI's ChatGPT. I used the program for a variety of purposes, and I was very impressed with the results.

But, How do we guarantee that something is not... False?

Good. With a little research, I found GLTR, a project developed by MIT students that analyzes the frequency of words and their grammatical composition, and using Artificial Intelligence, shows you a graph with the analyzed content, which is not very useful for easily decide if you found something Fake or Real. → http://gltr.io/dist/index.html

Continuing my research, I came across GPT-2 Output Detector, which showed the probability of a chatgpt generated text being False - 98% was the result. → https://openai-openai-detector.hf.space/

Although these programs were developed to detect GPT-2 text, they still work to differentiate GPT-3 text from OpenAI.

# Why Differentiate Real vs. False?

I recently came across news of StackOverflow banning comment and replies made using ChatGPT. I also came across Schools banning the use of Artificial Intelligence, and even students being expelled because of it. I decided I needed to do something. As I have been making projects that are used by people and that are interesting, here's my solution to identify texts written by Artificial Intelligence.

**ScanGPT** → _https://scangpt.space_

I started it two weeks ago. It's really very simple to use. Add it to Chrome, and on any web page, click on the extension icon and voilà.

In a matter of seconds, the Extension scans the page and brings you important information, such as:
- Number of False Paragraphs
- Total number of paragraphs
- Paragraph most likely to be False
- Chance of the Page being Fake

---

# Conclusion

If you've made it this far, thank you very much. I put a lot of effort into this project and I want the dev community to enjoy it. I have many updates already being developed and I hope they will motivate me to continue them.

Link to Star the repository. → https://github.com/zaidmukaddam/scan-gpt

Follow ScanGPT om Instagram for updates. → https://www.instagram.com/scangpt/

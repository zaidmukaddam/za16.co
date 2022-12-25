---
title: "Playing with AI - Can it become your coworker?"
description: "Over the past couple of days, I have toyed around with all this cool AI stuff and this is my documentation on things I enjoyed.."
date: "2022-12-25T00:00:00"
tags: ["AI", "Machine Learning", "GPT-3", "Dall E"]
heroImage: "/assets/words/ai-worker/banner.webp"
---

Is AI taking over the world?

That's the biggest question everyone has.
I'd say not yet.
But, for now, it's great at solving, making art, suggesting code, etc.

Over the past couple of days, I've toyed around with all this cool AI stuff and this is my documentation on things I enjoyed.

## Personal Pair Progammer

Github's [Copilot](https://github.com/features/copilot) is really helpful in cases where you are writing boilerplate code that follows the same pattern. For example, to do something with Redux, it involves writing an action, a reducer and a side effect. Copilot suggests you some of it.

Quick regex checks are a time saver with Copilot. No need to go to stack overflow and search. You write a comment and it tell you what you need to write.


<img src="/assets/words/ai-worker/valid-email.png" alt="valid email check sugession 2" width="auto" height="auto" />

Copilot saves a lot of back and forth.

Sometimes, it even teaches you new things by suggesting something you don't know.

AI Teacher?

[GPT-3 playground](https://beta.openai.com/playground) is great as well. Once I took help for a bash command that I didn't know how to write.

<img src="/assets/words/ai-worker/thanks-gpt.png" alt="gpt-3-playground" width="auto" height="auto" />

## Making Art

You can become a graphic designer with no skills.

If you know how to describe the picture you want, get the AI to draw/make it for you not that difficult.

If you want to try, you can go to [Dall E](https://openai.com/dall-e-2/) and give a few prompts.
They give you some free credits every month.

[Stable Diffusion](https://github.com/CompVis/stable-diffusion) is another option.
You can run this locally, for free, unlimited number of times.

Some the stuff that I liked from the generated pieces of art.

<img src="/assets/words/ai-worker/ai-coworker-art.webp" alt="ai-coworker-art-2" width="auto" height="auto" />

## Better transcrption

There are services which do transcribe the audio to text for you.

Honestly, they aren't perfect, especially for Indian accents like mine. We need to spend time fixing mistakes. And we need to spend money if you hit the free limits.

Enter Open AI's [whisper](https://github.com/openai/whisper).

It's open-source, free, runs locally, does a great job at recognizing accents. It even translates your regional voice to English.

It has different models that get the job done. I felt the `base` model is good for my voice.

[This packages](https://github.com/m1guelpf/auto-subtitle) adds subtitles to videos.

## My AI Co-worker

A few weeks ago i made my own AI Chatbot using gpt-3 called [Ada But Better](https://adabutbetter.space/). Its more of a Personal Assistant than a chatbot.

## Conclusion

AI is getting better and better. It's not perfect yet, but it's getting there. I'm excited to see what the future holds.

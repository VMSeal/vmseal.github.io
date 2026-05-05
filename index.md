<p class="tagline" align="center">
    The virtualisation app <i>for</i> macOS, done natively and securely. <br />
    Currently in alpha.
</p>

**IMPORTANT:** there are no downloads available right now!  
If you want to use it, you currently have to build it yourself with Xcode.

## Features
* Security is built-in, not bolted-on.
* Natively crafted.
* "AI"-free -- no LLMs are involved.

See more about security below.

## Security

In VMSeal, security is a core tenet, so read more about how the different aspects contributes to the whole security model below.

### Threat Model

The app treats its guests as if they are untrusted, but not necessarily compromised.  
The host, however, is assumed to be fully trusted.

### Sandboxing

Sandboxing is vital and is thus utilised via macOS' *App Sandbox*.  
Nothing is requested from inside the sandbox, except for outgoing connections, used for downloading VM images.  

Besides the *App Sandbox*, VMSeal utilises the *Hardened Runtime*, and, furthermore, the opt-in *Hardware Memory Tagging* build-feature.  

The biggest layer, of course, is Apple's *Virtualization.framework*, which does the bulk of work and is the primary line of defence from untrusted VMs.

### Source Code

Swift is the primary and preferred language inside the source code,  
with a *small* percentage in C, which is **not** used for critical tasks.

There are also no dependencies besides official Apple libraries.

This is due to supply-chain risks of using third-party dependencies, so it's best to keep them down to the absolute minimum,  
which also reduces the amount of parties that need to be trusted **significantly**.

The source code itself encourages audits, and effort gets put into making it maintainable, thus more easily auditable.

### The User

The user is considered a threat, in the way that they may make mistakes.  

So, for example, to mitigate the risk of downloading tampered ISOs,  
VMSeal offers downloads for supported guest OSes inside the app during setup of a new VM *only*.

This internal database of OSes are intended to act as an auditable source of truth.

Currently, only SHA256 digests are used for verifying if the downloaded ISO is corrupt,  
but in the future, verification with PGP keys will be utilised.

## Privacy

VMSeal is privacy-friendly; it does not collect data and never "phones home".  
The only situation where privacy-concerns are warranted is when downloading ISOs.  

Why? Because the mirrors or download pages *can, but don't necessarily,* collect information about the download process.

## About

VMSeal is developed by [Axel Karlsson](https://github.com/0xdefoliate), with support by [Håkan Karlsson](https://github.com/0xhakankarlsson).  
Please consider contributing to the app, it really helps!

### Trademark

The word "VMSeal" and associated branding are common-law trademarks of Axel H. Karlsson.  

You may not use the name "VMSeal" when forking it or distributing unofficial builds.  
Thank you.

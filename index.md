# VMSeal

The virtualisation app *for* macOS, done natively and securely.  
Currently in early alpha.

**IMPORTANT:** there are no downloads available right now!  
If you want to use it, you currently have to build it yourself with Xcode.

## Features
* Security is built-in, not bolted-on.
* Natively crafted.
* "AI"-free -- no LLMs are involved.

See more about security below.

## Security

In VMSeal, security is a core tenet, so read more about our approach below.

### Threat Model

The app treats its guests as if they are untrusted, but not necessarily compromised.

### Sandboxing

Utilisation of macOS' *App Sandbox* is its primary line of defence, which allows the operating system to enforce the security of VMSeal.  
Nothing is requested from outside the sandbox, except for outgoing connections, for downloading VMs.

Besides the App Sandbox, VMSeal utilises the *Hardened Runtime*, and, furthermore, the opt-in *Hardware Memory Tagging* build-feature.

The biggest layer, of course, is Apple's *Virtualization.framework*, which does the bulk of work.

### Source Code

Inside the source code, Swift is used for >98% of the code, and the remaining percentage in C.  
There are also no dependencies besides official Apple libraries.

This is due to the targeted nature of using dependencies, and it's best to keep it to the absolute minimum,  
which keeps the amount of trusted parties down **significantly**.

The source code itself is encouraged to be audited, and effort gets put into making it maintainable, thus more easily auditable.

### The User

The user is considered a threat, in the way that they may make mistakes.  

So, for example, to prevent downloading tampered ISOs, VMSeal offers supported guest OSes for both Intel and Silicon Macs. 
during setup of a new VM.

The internal database of OSes are intended to offer as an auditable source of truth.

## Privacy

This app is privacy-friendly; it does not collect data and never "phones home".  
The only situation where privacy-concerns are warranted are when downloading ISOs from the internet.

Why? Because the mirrors or download pages *can, but don't necessarily,* collect information about the connection.

## About

The app is developed by [Axel Karlsson](https://github.com/0xdefoliate), with support by [Håkan Karlsson](https://github.com/0xhakankarlsson).  
Please consider contributing to the app!

### Trademark

VMSeal is an unregistered trademark of Axel H. Karlsson.  

You may not use the name "VMSeal" when forking it or making unofficial builds.  
Thank you.
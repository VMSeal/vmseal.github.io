# VMSeal

The virtualisation app *for* macOS, done natively and securely.  
Currently in early alpha.

## Who's it for?

This app is for people who:
* have a secured environment for e.g. developing
* wants to test software on GNU/Linux
* etc...

## Native

The app is built on top of native macOS foundations, such as *Swift*, *SwiftUI*, and Apple's own *Virtualization.framework*.

No Electron, no non-native hypervisors like QEMU, nothing like that.

## Security

How does VMSeal accomplish higher security?  
Well, firstly, it utilises macOS' *App Sandbox*, and requests nothing except for outgoing network connections, used for fetching ISOs.  

It also uses macOS' *Hardened Runtime*, enables *Hardware Memory Tagging* when supported, and uses several compiler options hardening it further.

It is also, of course, shielded by macOS' hypervisor itself.

These safeguards ensure that the boundary between the VM and the host are as shielded as possible.

## About

The app is developed by [Axel Karlsson](https://github.com/0xdefoliate), with support by [Håkan Karlsson](https://github.com/0xhakankarlsson).  
Please consider contributing to the app!
# Source: https://compressi.us/status

**All systems operational**

Last checked at 9:53:15 PM

## What this covers

This page checks the hosted CMX Cloud API that powers accounts, device pairing, aggregate sync, release lookup, and downloads. It does not cover your model provider, whose status you should check with them directly.

## Your local gateway

CMX runs locally and does not depend on our servers to compress requests. To check your own gateway, run:

```
cmx status
```

If the hosted API is interrupted, your local compression keeps working. Only dashboard sync, pairing, and download lookups are affected.
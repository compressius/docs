# Source: https://compressi.us/downloads

01

## Choose your install method

Choose a method below to see its command and requirements.

LinuxMacWindows

curlnpmpnpm

Copy

```
$ curl -sSfL https://compressi.us/install.sh | sh
```

**Linux**No Node.js required.

02

## Download CMX for your system

Latest stable release. Standalone files do not require Node.js.

### Windows installers

Choose x64 for Intel or AMD PCs, or ARM64 for Windows on ARM. Run the installer, then open a new terminal.

[Download Windows x64 installer →](https://compressi.us/downloads/cmx-setup-windows-amd64.exe) [Download Windows ARM64 installer →](https://compressi.us/downloads/cmx-setup-windows-arm64.exe)

### Portable binaries · Linux, Mac & Windows

[Linuxx86\_64](https://compressi.us/downloads/cmx-linux-amd64)

Copy link

[Linuxarm64](https://compressi.us/downloads/cmx-linux-arm64)

Copy link

[macOSIntel](https://compressi.us/downloads/cmx-darwin-amd64)

Copy link

[macOSApple Silicon](https://compressi.us/downloads/cmx-darwin-arm64)

Copy link

[Windowsx64 · portable .exe](https://compressi.us/downloads/cmx-windows-amd64.exe)

Copy link

[WindowsARM64 · portable .exe](https://compressi.us/downloads/cmx-windows-arm64.exe)

Copy link

Linux

Choose x86\_64 for Intel/AMD or arm64 for ARM devices. Rename the downloaded file to cmx, make it executable with chmod +x cmx, and place it in a directory on your PATH.

Mac

Choose Apple Silicon for M-series Macs or Intel for Intel Macs. Rename the binary to cmx, make it executable with chmod +x cmx, and place it on your PATH. The curl installer handles this for you.

Windows portable

Choose x64 or ARM64 to match your PC. Rename the file to cmx.exe and place it in a folder on your PATH, or run it from PowerShell with .\\cmx.exe setup.

Verify downloaded files against SHA256SUMS from the matching [stable release](https://github.com/compressius/cmx/releases/latest). That page also includes release notes and installer scripts.

03

## Test the latest nightly

Early fixes and features for a test machine. Each build has an immutable version; stable remains the recommended channel.

Latest nightly[Checking latest release…](https://github.com/compressius/cmx/releases)

LinuxMacWindows

curlnpmpnpm

Copy

```
$ curl -sSfL https://compressi.us/install-nightly.sh | sh
```

**Linux**No Node.js required.

For standalone nightly files, select a prerelease from [all releases](https://github.com/compressius/cmx/releases). Match the version when checking SHA256SUMS.

04

## Connect your coding agent

Setup pairs your CMX account, starts the local gateway, and helps connect detected agents. Your agent keeps managing its provider credentials.

Set up⌘

`cmx setup`Copy

Check routing⌘

`cmx harness verify`Copy

See status⌘

`cmx status`Copy

[Read the setup guide →](https://compressi.us/docs#quick-start)
# lifemander

A helpful MTG life tracking app build primarily for the casual Commander(EDH) format.

## Status

This app was orriginally a fun little project to investigate the use of mobx and mobx-persist. The project is currently shelved but may be updated in the future. 

### Running the app

The app is currently still in its early developement phase. As such it is not on any store or even available in a standalone form. To run this app via a simulator, just clone down the repository, use your profered node package manager to install the modules (I used yarn for this project but feel free to use npm), then run the start script and it should be running in development.
Then it is just a matter of installing the expo client in your phone (available in the google play store and the apple app store) and scanning the QRcode that appears. Again the app is in very early stages of development at this stage, so there is limited functionality.

### Current feature set

Two player life tracking. Positive and negitive. Changes in magnitudes of 1 and 5.

Persistant life totals. Accidentally close the app? Don't worry your totals aren't lost. Just start it back up and they will be there.

Reset game button. 

### Planned features

Custom life change values.

Player customisation including name, colour and custom player counters for tracking commander damage, poison counters etc.

Option for additional players. Up to a max of 8, any more and even on tablets it gets a bit messy.

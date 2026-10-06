# Phone Sheet Card

A Lovelace card that shows everything the Home Assistant Companion app (Android, iOS, macOS) reports about a device, grouped into readable sections. Pick a phone, the card finds its sensors by itself.

![Phone Sheet Card](https://raw.githubusercontent.com/saintleningrad-prog/ha-phone-sheet-card/main/images/card.png)

## Sections

| Section | What it shows (when the sensor reports a value) |
|---|---|
| **Battery** | level bar, charging state and charger, time until full, temperature, health, charge cycles, power, power saving / Low Power Mode |
| **Connectivity** | network or connection type, public IP, Wi-Fi name, signal quality, band, link speed and IP, each SIM with operator, 2G/3G/4G/5G and signal, mobile data, roaming, hotspot, traffic, IPv6 |
| **Device** | OS and security patch, app version, last reboot, time zone, screen and lock, brightness, timeout, orientation, NFC, work profile, last or active app, notifications, calls; on macOS camera and microphone in use |
| **Sound and media** | ringer and audio mode, Do Not Disturb or Focus, all volume levels, microphone, speakerphone, headphones, audio output, playing media, Bluetooth and connected devices, next alarm |
| **Location** | home or address, GPS accuracy, activity, last update trigger, high accuracy mode, location permission |
| **Storage** | used storage with a low space warning, internal and SD card |
| **Health and activity** | steps, distance, floors, pace, calories, heart rate, blood oxygen, blood pressure, body temperature, glucose, body measurements, water, VO2 max, sleep with phases (Health Connect on Android, HealthKit and pedometer on iOS) |
| **Car** | Android Auto: car name, fuel, battery, range, odometer, speed, charging |
| **Phone sensors** | light, proximity, air pressure, accent color |
| **Kiosk mode and camera** | iOS app kiosk mode, brightness, volume, screensaver, camera motion and stream |
| **Companion app** | app traffic, memory, standby bucket, BLE transmitter, beacon monitor |

Works with Android, iOS and macOS Companion apps. Every line appears only when the device actually reports the value, so there is no clutter of `unknown`, and sections without data are hidden. Units come from the sensors themselves. Optional hints tell which Android sensors to enable in the app. The card follows the dashboard theme and is translated to English and Russian.

## Installation

### HACS (custom repository)

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/saintleningrad-prog/ha-phone-sheet-card`, category **Dashboard**.
2. Install **Phone Sheet Card** and reload the browser page.

### Manual

Copy `phone-sheet-card.js` to `<config>/www/phone-sheet-card/` and add `/local/phone-sheet-card/phone-sheet-card.js` as a **JavaScript module** under Settings → Dashboards → Resources.

## Configuration

The card has a visual editor. In YAML:

```yaml
type: custom:phone-sheet-card
device: 0123456789abcdef0123456789abcdef   # mobile_app device id
title: My phone                            # optional
steps_entity: sensor.my_phone_steps_today  # optional, e.g. a daily utility meter
hints: true                                # optional, show which sensors to enable
```

| Option | Default | Description |
|---|---|---|
| `device` | required | the phone (a `mobile_app` device) |
| `title` | device name | card title |
| `steps_entity` | | entity for daily steps. Without it the card uses Health Connect daily steps or the phone step counter (counts since reboot) |
| `hints` | `true` | show hints for sensors that are not enabled yet |

### Daily steps

The phone step counter counts since the last reboot. For steps per day create a **Utility Meter** helper (Settings → Devices & services → Helpers → Utility Meter) with the phone `Steps sensor` as source and cycle **daily**, then set it as `steps_entity`.

## Enabling sensors on the phone

**Android:** most sensors are disabled by default. In the Companion app open **Settings → Companion app → Manage sensors** and enable the ones you want. Some need an Android permission (activity recognition, usage access for the last used app, Health Connect).

**iOS:** open **Settings → Companion App → Sensors**. Health data needs HealthKit access for the Home Assistant app.

## License

MIT, see [LICENSE](LICENSE).

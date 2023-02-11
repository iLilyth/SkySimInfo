/// <reference types="../ctautocomplete" />
/// <reference lib="es2015" />

import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SliderProperty,
    @SelectorProperty,
    @NumberProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    } from 'Vigilance';
    @Vigilant('SkySimInfo', 'Sky Sim Info Settings',)
    class Settings {

        @SwitchProperty({
            name: "Chat Copy",
            description: "Copies RNG drops to clipboard automatically",
            category: "?Features",
        })
        AutoCopyRareDrops = true;

        @SwitchProperty({
            name: "Rare Drop Notification",
            description: "Creates a title on rare drop",
            category: "?Features",
        })
        RareDropNotification = true;

        @SwitchProperty({
            name: "Pickaxe Ability Timer",
            description: "Shows timer and notification for Pickobolus Ability",
            category: "?Mining",
        })
        PickaxeAbilityTimer2 = true;

        @SliderProperty({
            name: "Pickobolus Timer",
            description: "Shows a title when your pickaxe ability is ready",
            category: "?Mining",
            min: 25,
            max: 35
        })
        PickAbilityTimer = 30;
       
        @SwitchProperty({
            name: "Mining Bits Counter",
            description: "Tracks lifetime bits made and bits made this session",
            category: "?Trackers",
        })
        MiningBitsCounter = true;

        @SwitchProperty({
            name: "Voidgloom Display",
            description: "Counts bosses fought this session and bosses killed overall",
            category: "?Trackers",
        })
        VoidgloomUtils = true;

        @SwitchProperty({
            name: "F6 Data Tracker",
            description: "Counts f6 runs this session and bits made overall",
            category: "?Trackers",
        })
        f6Data = true;

        @SwitchProperty({
            name: "Format Damage Numbers",
            description: "Adds commas to damage numbers (might reduce framerate idk)",
            category: "?Visual",
        })
        FormatDmg = true;

        @SwitchProperty({
            name: "Remove 0 Damage Markers",
            description: "Removes damage numbers that are equal to 0",
            category: "?Visual",
        })
        RemoveZeros = true;

        @SwitchProperty({
            name: "Ping Display",
            description: "Shows your ping",
            category: "?Visual",
        })
        pingCounter = true;

        @SwitchProperty({
            name: "FPS Counter",
            description: "Adds a FPS counter to your screen",
            category: "?Visual",
        })
        FPSCounter = true;

        @SwitchProperty({
            name: "VCB Display",
            description: "Shows timer and soul count for VCB",
            category: "?Voidglooms",
        })
        VCBData = true;

        @SwitchProperty({
            name: "VWarden Display",
            description: "Shows timer for hits phase and buff for VWarden",
            category: "?Voidglooms",
        })
        VWardenData = true;

        constructor() {
            this.initialize(this);
            this.addDependency("Pickobolus Timer", "Pickaxe Ability Timer")
        }
    }
    
    export default new Settings();
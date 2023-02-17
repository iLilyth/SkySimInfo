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
            name: "Pickaxe Ability Timer X",
            description: "",
            category: "?Mining",
            min: 0,
            max: 100
        })
        PickaxeAbilityTimerX = 1;

        @SliderProperty({
            name: "Pickaxe Ability Timer Y",
            description: "",
            category: "?Mining",
            min: 0,
            max: 100
        })
        PickaxeAbilityTimerY = 34;



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

        @SliderProperty({
            name: "Mining Bits Counter X",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        MiningBitsCounterX = 1;

        @SliderProperty({
            name: "Mining Bits Counter Y",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        MiningBitsCounterY = 30;



        @SwitchProperty({
            name: "Voidgloom Display",
            description: "Counts bosses fought this session and bosses killed overall",
            category: "?Trackers",
        })
        VoidgloomUtils = true;

        @SliderProperty({
            name: "Voidgloom Display X",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        VoidgloomUtilsX = 1;

        @SliderProperty({
            name: "Voidgloom Display Y",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        VoidgloomUtilsY = 36;



        @SwitchProperty({
            name: "F6 Data Tracker",
            description: "Counts f6 runs this session and bits made overall",
            category: "?Trackers",
        })
        f6Data = true;

        @SliderProperty({
            name: "F6 Data Tracker X",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        f6DataX = 1;

        @SliderProperty({
            name: "F6 Data Tracker Y",
            description: "",
            category: "?Trackers",
            min: 0,
            max: 100
        })
        f6DataY = 40;



        @SwitchProperty({
            name: "Beacon Alert",
            description: "Adds an Alert and marker for beacons",
            category: "?Visual",
        })
        BeaconAlert = true;

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

        @SliderProperty({
            name: "Ping Display X",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        pingCounterX = 1;

        @SliderProperty({
            name: "Ping Display Y",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        pingCounterY = 1;



        @SwitchProperty({
            name: "FPS Counter",
            description: "Adds a FPS counter to your screen",
            category: "?Visual",
        })
        FPSCounter = true;

        @SliderProperty({
            name: "FPS Counter X",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        FPSCounterX = 1;

        @SliderProperty({
            name: "FPS Counter Y",
            description: "",
            category: "?Visual",
            min: 0,
            max: 100
        })
        FPSCounterY = 3;



        @SwitchProperty({
            name: "VCB Display",
            description: "Shows timer and soul count for VCB",
            category: "?Voidglooms",
        })
        VCBData = true;

        @SliderProperty({
            name: "VCB Display X",
            description: "",
            category: "?Voidglooms",
            min: 0,
            max: 100
        })
        VCBDataX = 1;

        @SliderProperty({
            name: "VCB Display Y",
            description: "",
            category: "?Voidglooms",
            min: 0,
            max: 100
        })
        VCBDataY = 44;



        @SwitchProperty({
            name: "VWarden Display",
            description: "Shows timer for hits phase and buff for VWarden",
            category: "?Voidglooms",
        })
        VWardenData = true;

        @SliderProperty({
            name: "VWarden Display X",
            description: "",
            category: "?Voidglooms",
            min: 0,
            max: 100
        })
        VWardenDataX = 1;

        @SliderProperty({
            name: "VWarden Display Y",
            description: "",
            category: "?Voidglooms",
            min: 0,
            max: 100
        })
        VWardenDataY = 42;



        constructor() {
            this.initialize(this);
            this.addDependency("Pickobolus Timer", "Pickaxe Ability Timer")
            
            this.addDependency("Pickaxe Ability Timer X", "Pickaxe Ability Timer")
            this.addDependency("Pickaxe Ability Timer Y", "Pickaxe Ability Timer")

            this.addDependency("Mining Bits Counter X", "Mining Bits Counter")
            this.addDependency("Mining Bits Counter Y", "Mining Bits Counter")

            this.addDependency("Voidgloom Display X", "Voidgloom Display")
            this.addDependency("Voidgloom Display Y", "Voidgloom Display")

            this.addDependency("F6 Data Tracker X", "F6 Data Tracker")
            this.addDependency("F6 Data Tracker Y", "F6 Data Tracker")

            this.addDependency("Ping Display X", "Ping Display")
            this.addDependency("Ping Display Y", "Ping Display")

            this.addDependency("FPS Counter X", "FPS Counter")
            this.addDependency("FPS Counter Y", "FPS Counter")

            this.addDependency("VCB Display X", "VCB Display")
            this.addDependency("VCB Display Y", "VCB Display")

            this.addDependency("VWarden Display X", "VWarden Display")
            this.addDependency("VWarden Display Y", "VWarden Display")
        }
    }
    
    export default new Settings();
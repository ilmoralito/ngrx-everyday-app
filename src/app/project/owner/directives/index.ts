import { BorderDottedDirective } from "./border-dotted.directive";
import { FirstDirective } from "./first/first.directive";
import { OnlineDirective } from "./online/online.directive";
import { PrimaryButtonDirective } from "./primary-button/primary-button.directive";
import { RainbowDirective } from "./rainbow/rainbow.directive";
import { TrackDirective } from "./track/track.directive";

export const directives: any[] = [
    RainbowDirective,
    PrimaryButtonDirective,
    FirstDirective,
    TrackDirective,
    OnlineDirective,
    BorderDottedDirective
];

export * from "./rainbow/rainbow.directive";
export * from "./primary-button/primary-button.directive";
export * from "./first/first.directive";
export * from "./track/track.directive";
export * from "./online/online.directive";
export * from "./border-dotted.directive"

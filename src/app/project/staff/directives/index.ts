import { Type } from "@angular/core";
import { FirstDirective } from "./first/first.directive";
import { TestDirective } from "./test/test.directive";
import { HighlightDirective } from "./highlight/highlight.directive";
import { CyDirective } from "./cy/cy.directive";
import { LightDirective } from "./light/light.directive";
import { OptDirective } from "./opt/opt.directive";
import { ShadowDirective } from "./shadow/shadow.directive";
import { MyHighlightDirective } from "./my-highlight/my-highlight.directive";
import { TrackDirective } from "./track/track.directive";
import { ThreeDirective } from "./three/three.directive";
import { FourDirective } from "./four/four.directive";

export const directives: Type<any>[] = [
    FirstDirective,
    TestDirective,
    HighlightDirective,
    CyDirective,
    LightDirective,
    OptDirective,
    ShadowDirective,
    MyHighlightDirective,
    TrackDirective,
    ThreeDirective,
    FourDirective,
];

export * from "./first/first.directive";
export * from "./test/test.directive";
export * from "./highlight/highlight.directive";
export * from "./cy/cy.directive";
export * from "./light/light.directive";
export * from "./opt/opt.directive";
export * from "./shadow/shadow.directive";
export * from "./my-highlight/my-highlight.directive";
export * from "./track/track.directive";
export * from "./three/three.directive";
export * from "./four/four.directive";

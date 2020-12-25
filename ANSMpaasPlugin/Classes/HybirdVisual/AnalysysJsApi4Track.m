//
//  AnalysysJsApi4Track.m
//  MpassDemo
//
//  Created by 少冲 on 2020/9/10.
//  Copyright © 2020 Analysys. All rights reserved.
//

#import "AnalysysJsApi4Track.h"

@implementation AnalysysJsApi4Track

-(void)handler:(NSDictionary *)data context:(PSDContext *)context callback:(PSDJsApiResponseCallbackBlock)callback {
    [super handler:data context:context callback:callback];
    
    WKWebView *webView = (WKWebView *)context.currentViewControllerProxy.psdContentView;
    
    id params = data[@"props"];
    if ([webView isKindOfClass:NSClassFromString(@"WKWebView")] && [params isKindOfClass:NSArray.class]) {
        //  hybird触发事件
        Class visualHybrid = NSClassFromString(@"ANSVisualHybrid");
        SEL analysysAgentTrack = NSSelectorFromString(@"analysysAgentTrack:withParams:");
        if ([visualHybrid respondsToSelector:analysysAgentTrack]) {
            [visualHybrid performSelector:analysysAgentTrack withObject:webView withObject:params];
        }
        callback(@{@"resulut": @"success"});
    } else {
        callback(@{@"resulut": @"failure"});
    }
}

@end

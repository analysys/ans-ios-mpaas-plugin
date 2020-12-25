//
//  AnalysysJsApi4Property.m
//  MpassDemo
//
//  Created by 少冲 on 2020/9/10.
//  Copyright © 2020 Analysys. All rights reserved.
//

#import "AnalysysJsApi4Property.h"

@implementation AnalysysJsApi4Property

-(void)handler:(NSDictionary *)data context:(PSDContext *)context callback:(PSDJsApiResponseCallbackBlock)callback {
    [super handler:data context:context callback:callback];
    
    WKWebView *webView = (WKWebView *)context.currentViewControllerProxy.psdContentView;
        
    id params = data[@"props"];
    if ([webView isKindOfClass:NSClassFromString(@"WKWebView")] && [params isKindOfClass:NSArray.class]) {
        //  hybird关联原生获取属性列表
        Class visualHybrid = NSClassFromString(@"ANSVisualHybrid");
        SEL analysysAgentGetProperty = NSSelectorFromString(@"analysysAgentGetProperty:withParams:");
        if ([visualHybrid respondsToSelector:analysysAgentGetProperty]) {
            [visualHybrid performSelector:analysysAgentGetProperty withObject:webView withObject:params];
        }
        callback(@{@"resulut": @"success"});
    } else {
        callback(@{@"resulut": @"failure"});
    }
}

@end
